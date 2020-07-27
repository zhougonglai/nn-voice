import AgoraRTM from 'agora-rtm-sdk';
import EventEmitter from 'events';

// p2p Events
const CONNECTION_STATE_CHANGED = 'ConnectionStateChanged';
const MESSAGE_FROM_PEER = 'MessageFromPeer';
const PEERS_ONLINE_STATUS_CHANGED = 'PeersOnlineStatusChanged';

// p2c Events
const CHANNEL_MESSAGE = 'ChannelMessage';
const MEMBER_JOINED = 'MemberJoined';
const MEMBER_LEFT = 'MemberLeft';

export default class RTM extends EventEmitter {
	appId = '921f058a58694b73b69f62a061d9d070';
	constructor() {
		super();
		this.channels = {};
	}

	createInstance() {
		this.client = AgoraRTM.createInstance(this.appId);
		this.subscribeClientEvents();
	}

	subscribeClientEvents() {
		const clentEvents = [
			CONNECTION_STATE_CHANGED,
			MESSAGE_FROM_PEER,
			PEERS_ONLINE_STATUS_CHANGED,
		];
		clentEvents.forEach(eventName => {
			this.client.on(eventName, (...args) => {
				console.log('emit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	subscribeChannelEvents(channelName) {
		const channelEvents = [CHANNEL_MESSAGE, MEMBER_JOINED, MEMBER_LEFT];
		channelEvents.forEach(eventName => {
			this.channels[channelName].channel.on(eventName, (...args) => {
				console.log('emit', eventName, args);
				this.emit(eventName, { channelName, args });
			});
		});
	}

	async subscribePeersOnlineStatus(uids) {
		return this.client.subscribePeersOnlineStatus(uids);
	}

	peersOnlineStatusChanged(callback) {
		return this.client.on(PEERS_ONLINE_STATUS_CHANGED, callback);
	}

	/**
	 * 状态改变
	 * @param {newState, reason} callback
	 */
	connectionStateChanged(callback) {
		this.client.on(CONNECTION_STATE_CHANGED, callback);
	}

	async login(uid, token = null) {
		if (this.uid) return;
		this.uid = uid;
		return await this.client.login({ uid, token });
	}

	async logout() {
		return this.client.logout();
	}

	async queryPeerOnlineStatus(memberId) {
		console.log('queryPeersOnlineStatus', memberId);
		return this.client.queryPeersOnlineStatus([memberId]);
	}
	async queryPeersOnlineStatus(uids) {
		return this.client.queryPeersOnlineStatus(uids);
	}

	/**
	 * p2p
	 * @param {*} payload
	 * @param {*} uid
	 */
	async sendPeerMessage(text, uid) {
		console.log('sendPeerMessage', text, uid);
		return this.client.sendMessageToPeer({ text }, uid.toString());
	}

	async sendChannelMessage(text, channelName) {
		if (!this.channels[channelName] || !this.channels[channelName].joined)
			return;
		return this.channels[channelName].channel.sendMessage({ text });
	}

	/**
	 * 个人消息
	 * @param {msg, pid} callback
	 */
	messageFromPeer(callback) {
		this.client.on(MESSAGE_FROM_PEER, callback);
	}

	async joinChannel(name) {
		console.log('joinChannel', name);
		const channel = this.client.createChannel(name);
		this.channels[name] = {
			channel,
			joined: false,
		};
		this.subscribeChannelEvents(name);
		return channel.join();
	}

	async leaveChannel(name) {
		console.log('leaveChannel', name);
		if (
			!this.channels[name] ||
			(this.channels[name] && !this.channels[name].joined)
		)
			return;
		return this.channels[name].channel.leave();
	}

	//send image
	async uploadImage(blob, peerId) {
		const mediaMessage = await this.client.createMediaMessageByUploading(blob, {
			messageType: 'IMAGE',
			fileName: 'agora.jpg',
			description: 'send image',
			thumbnail: blob,
			// width: 100,
			// height: 200,
			// thumbnailWidth: 50,
			// thumbnailHeight: 200,
		});
		return this.client.sendMessageToPeer(mediaMessage, peerId);
	}

	async sendChannelMediaMessage(blob, channelName) {
		console.log('sendChannelMessage', blob, channelName);
		if (!this.channels[channelName] || !this.channels[channelName].joined)
			return;
		const mediaMessage = await this.client.createMediaMessageByUploading(blob, {
			messageType: 'IMAGE',
			fileName: 'agora.jpg',
			description: 'send image',
			thumbnail: blob,
			// width: 100,
			// height: 200,
			// thumbnailWidth: 50,
			// thumbnailHeight: 200,
		});
		return this.channels[channelName].channel.sendMessage(mediaMessage);
	}

	async cancelImage(message) {
		const controller = new AbortController();
		setTimeout(() => controller.abort(), 1000);
		await this.client.downloadMedia(message.mediaId, {
			cancelSignal: controller.signal,
			onOperationProgress: ({ currentSize, totalSize }) => {
				console.log(currentSize, totalSize);
			},
		});
	}
}
