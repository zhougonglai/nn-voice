import TRTC from 'trtc-js-sdk';
import EventEmitter from 'events';
import { genUserSig } from './sign';

/**
 * @name clientEVents
 */
const STREAM_ADDED = 'stream-added';
const STREAM_REMOVED = 'stream-removed';
const STREAM_UPDATED = 'stream-updated';
const STREAM_SUBSCRIBED = 'stream-subscribed';
const CONNECTION_STATE_CHANGED = 'connection-state-changed';
const PEER_JOIN = 'peer-join';
const PEER_LEAVE = 'peer-leave';
const MUTE_AUDIO = 'mute-audio';
const MUTE_VIDEO = 'mute-video';
const UNMUTE_AUDIO = 'unmute-audio';
const UNMUTE_VIDEO = 'unmute-video';
const CLIENT_BANNED = 'client-banned';
const NETWORK_QUALITY = 'network-quality';
const ERROR = 'error';

/**
 * @name SteamEvents
 */
const PLAYER_STATE_CHANGED = 'player-state-changed';
const SCREEN_SHARING_STOPPED = 'screen-sharing-stopped';

export default class RTC extends EventEmitter {
	status = {
		support: null,
	};

	static getDevices() {
		return TRTC.getDevices();
	}

	static getCameras() {
		return TRTC.getCameras();
	}

	static getMicrophones() {
		return TRTC.getMicrophones();
	}

	static getSpeakers() {
		return TRTC.getSpeakers();
	}

	constructor() {
		super();
		this.init();
		TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
		TRTC.Logger.enableUploadLog();
		this.initDevice();
	}

	async init() {
		return (this.status.support = await TRTC.checkSystemRequirements());
	}

	async initDevice() {
		return (this.device = await TRTC.getDevices());
	}

	createClient(uid) {
		return (this.client = TRTC.createClient({
			mode: 'rtc',
			...genUserSig(uid),
		}));
	}

	async join(roomId) {
		return this.client.join({ roomId });
	}

	async leave() {
		return this.client.leave();
	}

	createStream(config) {
		return (this.localStream = TRTC.createStream(config));
	}

	async publish(stream) {
		return this.client.publish(stream || this.localStream);
	}

	async unpublish(stream) {
		return this.client.unpublish(stream || this.localStream);
	}

	async getRemoteMutedState() {
		return this.client.getRemoteMutedState();
	}

	subscribeClientEvents() {
		const events = [
			STREAM_ADDED,
			STREAM_SUBSCRIBED,
			STREAM_REMOVED,
			STREAM_UPDATED,
			STREAM_SUBSCRIBED,
			CONNECTION_STATE_CHANGED,
			PEER_JOIN,
			PEER_LEAVE,
			MUTE_AUDIO,
			MUTE_VIDEO,
			UNMUTE_AUDIO,
			UNMUTE_VIDEO,
			CLIENT_BANNED,
			// NETWORK_QUALITY,
			ERROR,
		];
		events.forEach(eventName => {
			this.client.on(eventName, (...args) => {
				console.log('RTCemit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	subscribeSteamEvents() {
		const events = [PLAYER_STATE_CHANGED, SCREEN_SHARING_STOPPED];
		events.forEach(eventName => {
			this.localStream.on(eventName, (...args) => {
				console.log('streamEvents emit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	subscribe(callback) {
		this.client.on(STREAM_ADDED, callback);
		// console.log('远端流增加: ' + event.stream.getId());
		// this.client.subscribe(event.stream);
		// callback(event);
	}

	subscribed(callback) {
		this.client.on(STREAM_SUBSCRIBED, callback);
		// const remoteId = 'remote_stream-' + event.stream.getId();
		// console.log('远端流订阅成功：' + remoteId);
		// event.stream.play('remote_stream-' + event.stream.getId());
		// event.stream.play('remote');
		// const remoteEl = document.getElementById('remote');
		// const div = document.createElement('div');
		// div.id = remoteId;
		// if (this.remotes) {
		// 	this.remotes.push(remoteId);
		// } else {
		// 	this.remotes = [remoteId];
		// }
		// remoteEl.appendChild(div);
		// event.stream.play(remoteId);
		// callback(event);
	}
}
