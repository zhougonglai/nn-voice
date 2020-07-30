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
			await localSteam.initialize().then(() => {
				localSteam.play('local');
			});
			await this.$RTC.client.publish(localSteam);
			this.$RTC.subscribe(this.RTCsubscribe);
			this.$RTC.subscribed(this.RTCsubscribed);
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
