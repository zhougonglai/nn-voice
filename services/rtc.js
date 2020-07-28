import AgoraRTC from 'agora-rtc-sdk-ng';
import { compact } from 'lodash';
import EventEmitter from 'events';

const USER_PUBLISHED = 'user-published';

export default class RTC extends EventEmitter {
	appId = '921f058a58694b73b69f62a061d9d070';
	/**
	 * mode { 'rtc' ,'live'}
	 * codec { 'h264', 'vp8' }
	 * Safari < 12.1  codec = 'h264'
	 */
	config = {
		mode: 'rtc',
		codec: 'h264',
	};
	status = {
		support: null,
		codec: {
			audio: [],
			video: [],
		},
	};

	constructor() {
		super();
		if (process.env.NODE_ENV !== 'production') {
			console.log('enableLogUpload');
			AgoraRTC.enableLogUpload();
		}
		this.checkSystemRequirements();
		this.getSupportedCodec();
	}

	checkSystemRequirements() {
		this.status.support = AgoraRTC.checkSystemRequirements();
	}

	async getSupportedCodec() {
		const { video, audio } = await AgoraRTC.getSupportedCodec();
		this.status.codec.audio = audio;
		this.status.codec.video = video;
		return this.status;
	}

	/**
	 * 推荐使用 status.codec.audio[0]
	 * @param {mode, codec} config
	 */
	createClient(config = {}) {
		return (this.client = AgoraRTC.createClient({ ...this.config, ...config }));
	}

	subscribeClientEvents() {
		const clientEvents = [USER_PUBLISHED];
		clientEvents.forEach(eventName => {
			this.client.on(eventName, (...args) => {
				console.log('emit', eventName, ...args);
				this.emit(eventName, ...args);
			});
		});
	}

	async join(channel, uid = null, token = null) {
		return (this.uid = await this.client.join(this.appId, channel, token, uid));
	}

	// 频道流转发对象
	createChannelMediaRelayConfiguration() {
		return AgoraRTC.createChannelMediaRelayConfiguration();
	}

	/* --------------------------- MediaDevice ------------------------------ */
	async createMicrophoneAudioTrack() {
		return (this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack());
	}

	/**
	 *
	 * @param {*} skipPermissionCheck
	 * @returns { MediaDeviceInfo[] }
	 */
	async getMicrophones(skipPermissionCheck = undefined) {
		return AgoraRTC.getMicrophones(skipPermissionCheck);
	}

	onMicrophoneChanged(callback) {
		AgoraRTC.onMicrophoneChanged(callback);
	}

	async createCameraVideoTrack() {
		return (this.localVideoTrack = await AgoraRTC.createCameraVideoTrack());
	}

	/**
	 *
	 * @param {*} skipPermissionCheck
	 * @returns { MediaDeviceInfo[] }
	 */
	async getCameras(skipPermissionCheck = undefined) {
		return AgoraRTC.getCameras(skipPermissionCheck);
	}

	/**
	 * @param {state, device} callback
	 */
	onCameraChanged(callback) {
		AgoraRTC.onCameraChanged(callback);
	}

	async publish() {
		return await this.client.publish(
			compact([this.localAudioTrack, this.localVideoTrack]),
		);
	}

	/**
	 * @param {user, mediaType: { video, audio }} callback
	 */
	userPublished(callback) {
		this.client.on(USER_PUBLISHED, callback);
	}

	async leaveCall() {
		if (this.localAudioTrack) {
			this.localAudioTrack.close();
			this.localAudioTrack = null;
		}
		if (this.localVideoTrack) {
			this.localVideoTrack.close();
			this.localVideoTrack = null;
		}
		return await this.client.leave();
	}
}
