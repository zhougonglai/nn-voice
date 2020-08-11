import { mapState, mapActions, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState('user', ['user', 'users']),
	},
	mounted() {
		this.initRtmClient();
	},
	methods: {
		async initRtmClient() {
			if (this.user) {
				await this.login();
				await this.$RTM.tim.updateMyProfile({
					nick: `${this.user.first_name}_${this.user.last_name}`,
					avatar: this.user.avatar,
				});
				const data = await this.$RTM.tim.getConversationList();
				console.log(data);
			}
			this.$store.subscribe(this.rtmEventsHandle);
		},
		rtmEventsHandle({ type, payload }) {
			const action = {
				'user/USER': () => (payload ? this.login() : this.logout()),
			};
			if (type in action) {
				action[type]();
			}
		},
		async login() {
			await this.$RTM.login(this.user.id.toString());
		},
		async logout() {
			return await this.$RTM.tim.logout();
		},
	},
};
