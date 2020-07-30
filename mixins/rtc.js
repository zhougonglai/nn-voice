import { mapState } from 'vuex';

export default {
	computed: {
		...mapState('user', ['user']),
	},
	methods: {
		async initRtcClient() {
			if (!this.$RTC.client) {
				if (this.user) {
					this.login();
				}
			}
			this.$store.subscribe(this.rtcEventsHandle);
		},
		rtcEventsHandle({ type, payload }) {
			const action = {
				'user/USER': () => (payload ? this.login() : this.logout()),
			};
			if (type in action) {
				action[type]();
			}
		},
		login() {
			this.$RTC.createClient(this.user.id);
			this.$RTC.subscribeClientEvents();
		},
		async joinByRTC() {
			await this.$RTC.join(this.$route.params.id);
			const localSteam = this.$RTC.createStream({
				userId: this.user.id,
				audio: true,
				video: true,
			});
			await localSteam
				.initialize()
				.then(() => {
					localSteam.play('local');
				})
				.catch(error => {
					switch (error.name) {
						case 'NotFoundError':
							window.weui.alert('没找到可用设备');
							break;
						case 'NotAllowedError':
							window.weui.alert('访问摄像头/麦克风被拒绝');
							break;
						case 'NotReadableError':
							window.weui.alert(
								'暂时无法访问摄像头/麦克风，请确保当前没有其他应用请求访问摄像头/麦克风，并重试',
							);
							break;
						case 'AbortError':
							window.weui.alert('由于某些未知原因导致设备无法被使用');
							break;
					}
				});
			return await this.$RTC.client.publish(localSteam);
		},
		RTCsubscribe(event) {
			console.log('RTCsubscribe', event);
		},
		RTCsubscribed(event) {
			console.log('RTCsubscribed', event);
		},
		logout() {},
	},
};
