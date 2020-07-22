import AgoraRTC from 'agora-rtc-sdk-ng';
import { compact } from 'lodash';

export default class RTC {
	appId = '921f058a58694b73b69f62a061d9d070';
	/**
	 * mode { 'rtc' ,'live'}
	 * codec { 'h264', 'vp8' }
	 * Safari < 12.1  codec = 'h264'
	 */
	config = {
		mode: 'rtc',
		codec: 'vp8',
	};
	status = {
		support: null,
		codec: {
			audio: [],
			video: [],
		},
	};

	client;
	uid;
	localAudioTrack;
	localVideoTrack;

	constructor() {
		this.status.support = AgoraRTC.checkSystemRequirements();
		this.init();
	}

	init() {
		this.getSupportedCodec();
		this.createChannelMediaRelayConfiguration();
	}

	async getSupportedCodec() {
		const { video, audio } = await AgoraRTC.getSupportedCodec();
		this.status.codec.audio = audio;
		this.status.codec.video = video;
	}

	createChannelMediaRelayConfiguration() {
		return AgoraRTC.createChannelMediaRelayConfiguration();
	}

	createClient() {
		this.client = AgoraRTC.createClient(this.config);
	}

	async join(channel, uid = null, token = null) {
		return (this.uid = await this.client.join(this.appId, channel, token, uid));
	}

	async createMicrophoneAudioTrack() {
		return (this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack());
	}

	async publish() {
		return await this.client.publish(
			compact([this.localAudioTrack, this.localVideoTrack]),
		);
	}
}
