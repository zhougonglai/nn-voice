import AgoraRTM from 'agora-rtm-sdk';
import EventEmitter from 'events';

const CHANNEL_MESSAGE = 'ChannelMessage';
const MESSAGE_FROM_PEER = 'MessageFromPeer';

export default class RTM extends EventEmitter {
	appId = '921f058a58694b73b69f62a061d9d070';
	client;
	channel;

	createInstance() {
		return (this.client = AgoraRTM.createInstance(this.appId));
	}

	subscribeClientEvents() {
		const clentEvents = [CHANNEL_MESSAGE, MESSAGE_FROM_PEER];
		clentEvents.forEach(eventName => {
			this.client.on(eventName, (...args) => {
				console.log('emit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	/**
	 * 状态改变
	 * @param {newState, reason} callback
	 */
	connectionStateChanged(callback) {
		this.client.on(CHANNEL_MESSAGE, callback);
	}

	async login(uid, token = null) {
		return await this.client.login({ uid, token });
	}

	async logout() {
		return this.client.logout();
	}

	/**
	 * p2p
	 * @param {*} payload
	 * @param {*} uid
	 */
	async sendMessageToPeer(payload, uid) {
		return await this.client.sendMessageToPeer(payload, uid);
	}

	messageFromPeer(callback) {
		this.client.on(MESSAGE_FROM_PEER, callback);
	}

	createChannel(channelId) {
		this.channel = this.client.createChannel(channelId);
	}

	async join() {
		return await this.channel.join();
	}

	leave() {
		this.channel.leave();
	}
}
