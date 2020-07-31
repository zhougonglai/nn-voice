import { mapState } from 'vuex';
import { genUserSig } from '@/services/sign';

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
		RTCsubscribe(event) {
			console.log('RTCsubscribe', event);
		},
		RTCsubscribed(event) {
			console.log('RTCsubscribed', event);
		},
		logout() {},
	},
};
