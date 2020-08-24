import TIM from 'tim-js-sdk';
import COS from 'cos-js-sdk-v5';
import EventEmitter from 'events';
import { genUserSig } from './sign';

const EVENTS = [
	TIM.EVENT.SDK_READY,
	TIM.EVENT.MESSAGE_RECEIVED,
	TIM.EVENT.MESSAGE_REVOKED,
	TIM.EVENT.MESSAGE_READ_BY_PEER,
	TIM.EVENT.CONVERSATION_LIST_UPDATED,
	TIM.EVENT.GROUP_LIST_UPDATED,
	TIM.EVENT.PROFILE_UPDATED,
	TIM.EVENT.BLACKLIST_UPDATED,
	TIM.EVENT.ERROR,
	TIM.EVENT.SDK_NOT_READY,
	TIM.EVENT.KICKED_OUT,
	TIM.EVENT.NET_STATE_CHANGE,
];

export default class RTM extends EventEmitter {
	constructor() {
		super();
		this.tim = TIM.create({ SDKAppID: process.env.SDKAPPID });
		this.tim.setLogLevel(process.env.NODE_ENV === 'production' ? 1 : 0);
		this.tim.registerPlugin({ 'cos-wx-sdk': COS });
	}

	subscribeTim() {
		EVENTS.forEach(eventName => {
			this.tim.on(eventName, (...args) => {
				console.log('tim emit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	async login(userID) {
		const { code, data } = await this.tim.login({
			...genUserSig(userID),
			userID,
		});
		if (data) {
			this.config = data;
			if (data.repeatLogin) {
				return { code, data, msg: data.errorInfo };
			}
		}
		return { code, data };
	}

	async updateMyProfile(profile) {
		this.tim.updateMyProfile({
			...profile,
		});
	}

	/* ------------------------   EVENTS ------------------------  */
	/**
	 * 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
	 */
	ready(cb) {
		this.tim.on(TIM.EVENT.SDK_READY, cb);
	}

	/**
	 * 收到推送的单聊、群聊、群提示、群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
	 * @return event.data - 存储 Message 对象的数组 - [Message]
	 */
	messageReceived(cb) {
		this.tim.om(TIM.EVENT.MESSAGE_RECEIVED, cb);
	}

	/**
	 * 收到消息被撤回的通知
	 * @return event.data - 存储 Message 对象的数组 - [Message] - 每个 Message 对象的 isRevoked 属性值为 true
	 */
	messageRevoked(cb) {
		this.tim.on(TIM.EVENT.MESSAGE_REVOKED, cb);
	}

	/**
	 * SDK 收到对端已读消息的通知，即已读回执
	 * event.name - TIM.EVENT.MESSAGE_READ_BY_PEER
	 * event.data - event.data - 存储 Message 对象的数组 - [Message] - 每个 Message 对象的 isPeerRead 属性值为 true
	 */
	messageReadByPeer(cb) {
		this.tim.on(TIM.EVENT.MESSAGE_READ_BY_PEER, cb);
	}

	/**
	 * 收到会话列表更新通知，可通过遍历 event.data 获取会话列表数据并渲染到页面
	 * event.name - TIM.EVENT.CONVERSATION_LIST_UPDATED
	 * event.data - 存储 Conversation 对象的数组 - [Conversation]
	 */
	conversationListUpdated(cb) {
		this.tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, cb);
	}

	/**
	 * 收到群组列表更新通知，可通过遍历 event.data 获取群组列表数据并渲染到页面
	 * event.name - TIM.EVENT.GROUP_LIST_UPDATED
	 * event.data - 存储 Group 对象的数组 - [Group]
	 */
	groupListUpdated(cb) {
		this.tim.on(TIM.EVENT.GROUP_LIST_UPDATED, cb);
	}

	/**
	 * 收到自己或好友的资料变更通知
	 * event.name - TIM.EVENT.PROFILE_UPDATED
	 * event.data - 存储 Profile 对象的数组 - [Profile]
	 */
	profileUpdated(cb) {
		this.tim.on(TIM.EVENT.PROFILE_UPDATED, cb);
	}

	/**
	 * 收到黑名单列表更新通知
	 * event.name - TIM.EVENT.BLACKLIST_UPDATED
	 * event.data - 存储 userID 的数组 - [userID]
	 */
	blacklistUpdated(cb) {
		this.tim.on(TIM.EVENT.BLACKLIST_UPDATED, cb);
	}

	/**
	 * 收到 SDK 发生错误通知，可以获取错误码和错误信息
	 * event.name - TIM.EVENT.ERROR
	 * event.data.code - 错误码
	 * event.data.message - 错误信息
	 */
	error(cb) {
		this.tim.on(TIM.EVENT.ERROR, cb);
	}

	/**
	 * 收到 SDK 进入 not ready 状态通知，此时 SDK 无法正常工作
	 * event.name - TIM.EVENT.SDK_NOT_READY
	 */
	sdkNotReady(cb) {
		this.tim.on(TIM.EVENT.SDK_NOT_READY, cb);
	}

	// 收到被踢下线通知
	// event.name - TIM.EVENT.KICKED_OUT
	// event.data.type - 被踢下线的原因，例如:
	//    - TIM.TYPES.KICKED_OUT_MULT_ACCOUNT 多实例登录被踢
	//    - TIM.TYPES.KICKED_OUT_MULT_DEVICE 多终端登录被踢
	//    - TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED 签名过期被踢 （v2.4.0起支持）。
	kickedOut(cb) {
		this.tim.on(TIM.EVENT.KICKED_OUT, cb);
	}

	//  网络状态发生改变（v2.5.0 起支持）。
	// event.name - TIM.EVENT.NET_STATE_CHANGE
	// event.data.state 当前网络状态，枚举值及说明如下：
	//     \- TIM.TYPES.NET_STATE_CONNECTED - 已接入网络
	//     \- TIM.TYPES.NET_STATE_CONNECTING - 连接中。很可能遇到网络抖动，SDK 在重试。接入侧可根据此状态提示“当前网络不稳定”或“连接中”
	//    \- TIM.TYPES.NET_STATE_DISCONNECTED - 未接入网络。接入侧可根据此状态提示“当前网络不可用”。SDK 仍会继续重试，若用户网络恢复，SDK 会自动同步消息
	netStateChange(cb) {
		this.tim.on(TIM.EVENT.NET_STATE_CHANGE, cb);
	}

	/* ------------------------   Message ------------------------  */
	/**
	 *
	 * @param {*} to
	 * @param {*} payload {text}
	 * @param {*} type [CONV_C2C, CONV_GROUP]
	 */
	createTextMessage(to, payload, type = 'CONV_C2C', ...args) {
		return this.tim.createTextMessage({
			to,
			payload,
			conversationType: TIM.TYPES[type],
			...args,
		});
	}

	/**
	 *
	 * @param {*} to
	 * @param {*} payload {file}
	 * @param {*} cb fun(event)
	 * @param {*} type
	 * @param  {...any} args
	 */
	createImageMessage(to, payload, cb, type = 'CONV_C2C', ...args) {
		return this.tim.createImageMessage({
			to,
			payload,
			conversationType: TIM.TYPES[type],
			onProcess: cb,
			...args,
		});
	}

	createAudioMessage() {}

	async sendMessage(msg, option) {
		return await this.tim.sendMessage(msg, option);
	}

	/* ------------------------   Conversation ------------------------  */
	/* ------------------------   Profile ------------------------  */
	/* ------------------------   Group ------------------------  */
	/* ------------------------   GroupMember ------------------------  */
}
