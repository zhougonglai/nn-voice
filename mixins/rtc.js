import { mapState } from 'vuex';

export default {
	computed: {
		...mapState('user', ['user']),
	},
	mounted() {
		this.initRtcClient();
	},
	methods: {
		async initRtcClient() {
			if (this.$RTC.status.support) {
				if (!this.$RTC.client) {
					return await this.$RTC.createClient().enableAudioVolumeIndicator();
				}
				return false;
			}
		},
		async connect(channel) {
			await this.$RTC.join(channel, user.id);
			await this.$RTC.publish(
				await this.$RTC.createMicrophoneAndCameraTracks(),
			);
		},
	},
};
