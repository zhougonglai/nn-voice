import TRTC from 'trtc-js-sdk';
import EventEmitter from 'events';

const SDKAPPID = '1400406791';
const userSig = [
	'',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwoZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDCEiRZnpgPNtAgMMvAL1zY1ca8wzSor83b1s8xKLQ2LcM8JcPJKd8yLqMgrCfZKCsmo8rRVqgUA*QgvnQ__',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zIhwlDB4pTsxIKCzBQlK0MTAwMTAzNzS0OITGpFQWZRKlDc1NTUyMDAACJakpkLFrM0M7A0NzQzhpqSmQ40M8jD0tjFwjOrMtgpKEbfJzww2LDc28vUzN3HJLk4MiurzCMzNDLKKcXFuyrbVqkWAB55L1w_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwsZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDA0NIaakpkONLPAICI7x8M8N9g-2aAgPCQ53CjTqdQ81NcnxN-Sw8XMrzAgKtCy1NuwsCTSVqkWAAPxLzM_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwiZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDM0MzUxM4OakpkONDM0tDAt28goqdzAMSjJy1Db29QxK0bfJSqt1DJG36c4Rr*kzL3Y2DuvysTMUdvXVqkWAIfaL5w_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwqZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDA0hqotzkwHmpkfHhjol*4b6ehU7l2Ub5blneXmFZ5i7FjpXhZYZJYVYFpokplWGVia5mJhq1QLABTZL*k_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwmZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDM0MzW2gKotzkwHmlmUFKNvUuibnuRimOaZWuySE*idWpXu72EUo1-hnlJhFumSmlQaEOYRnpsT5mirVAsAdRswlw__',
];

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
	}

	async init() {
		return (this.status.support = await TRTC.checkSystemRequirements());
	}

	createClient(userId) {
		return (this.client = TRTC.createClient({
			mode: 'rtc',
			sdkAppId: SDKAPPID,
			userId,
			userSig: userSig[userId],
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

	async publish() {
		return this.client.publish(this.localStream);
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
