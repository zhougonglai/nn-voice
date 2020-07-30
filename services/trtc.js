import TRTC from 'trtc-js-sdk';
import EventEmitter from 'events';

const SDKAPPID = '1400406791';
const userSig = [
	'',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwoZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDCEiRZnpgPNtAgMMvAL1zY1ca8wzSor83b1s8xKLQ2LcM8JcPJKd8yLqMgrCfZKCsmo8rRVqgUA*QgvnQ__',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zIhwlDB4pTsxIKCzBQlK0MTAwMTAzNzS0OITGpFQWZRKlDc1NTUyMDAACJakpkLFrM0M7A0NzQzhpqSmQ40M8jD0tjFwjOrMtgpKEbfJzww2LDc28vUzN3HJLk4MiurzCMzNDLKKcXFuyrbVqkWAB55L1w_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwsZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDA0NIaakpkONLPAICI7x8M8N9g-2aAgPCQ53CjTqdQ81NcnxN-Sw8XMrzAgKtCy1NuwsCTSVqkWAAPxLzM_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwiZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDA0MoKakpkONNPC1N2szLEquzTf0NfbJ8ws3DTVr9Arz80k1CAlK9Hf2bUsLM8owzzS39LXVqkWAPuvLuk_',
	'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwqZQweKU7MSCgswUJStDEwMDEwMzc0tDiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDOwtDA0hqotzkwHmpkfHhjol*4b6ehU7l2Ub5blneXmFZ5i7FjpXhZYZJYVYFpokplWGVia5mJhq1QLABTZL*k_',
];
const STREAM_ADDED = 'stream-added';
const STREAM_SUBSCRIBED = 'stream-subscribed';

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
		const events = [STREAM_ADDED, STREAM_SUBSCRIBED];
		events.forEach(eventName => {
			this.client.on(eventName, (...args) => {
				console.log('emit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	subscribe(callback) {
		this.client.on(STREAM_ADDED, event => {
			console.log('远端流增加: ' + event.stream.getId());
			this.client.subscribe(event.stream);
			callback(event);
		});
	}

	subscribed(callback) {
		this.client.on(STREAM_SUBSCRIBED, event => {
			const remoteId = 'remote_stream-' + event.stream.getId();
			console.log('远端流订阅成功：' + remoteId);
			// event.stream.play('remote_stream-' + event.stream.getId());
			// event.stream.play('remote');
			const remoteEl = document.getElementById('remote');
			const div = document.createElement('div');
			div.id = remoteId;
			if (this.remotes) {
				this.remotes.push(remoteId);
			} else {
				this.remotes = [remoteId];
			}
			remoteEl.appendChild(div);
			event.stream.play(remoteId);
			callback(event);
		});
	}
}
