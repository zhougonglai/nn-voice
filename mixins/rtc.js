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
			if (!this.$RTC.client) {
				if (this.user) {
					this.createRTC();
				}
				this.RTCconnect = this.$store.subscribe(this.rtcEventsHandle);
			}
		},
		rtcEventsHandle({ type, payload }) {
			const action = {
				'user/USER': () => (payload ? this.createRTC() : this.destoryRTC()),
			};
			if (type in action) {
				action[type]();
			}
		},
		async createRTC() {
			return await this.$RTC.createClient(this.user.id);
		},
		async joinRTC(roomId) {
			return await this.$RTC.join(roomId);
		},
		async publishLocalRTC(config) {
			const localStream = this.$RTC.createStream({
				userId: this.user.id,
				...config,
			});
			await localStream.initialize();
			await this.$RTC.client.publish(localStream);
			return localStream;
		},
		/**
		 * 发布后的流程依次是:
		 * @note
		 * Client.on('stream-added')
		 * Client.subscribe
		 * Client.on('stream-subscribed')
		 * Stream.play
		 */

		/**
		 *  类似下播
		 */
		unpublishLocalRTC() {
			this.$RTC.unpublish();
		},
		destoryRTC() {
			this.$RTC.unsubscribeClient();
			this.$RTC.client = null;
			this.RTCconnect();
		},
	},
};
