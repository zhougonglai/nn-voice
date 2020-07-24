import { mapState, mapActions, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState('user', ['user', 'users']),
	},
	mounted() {
		this.initRtmClient();
	},
	methods: {
		...mapActions('rtm', ['peersStatusAction']),
		...mapMutations('rtm', ['CONNECT_CHANGE', 'MSG_UPDATE']),
		async initRtmClient() {
			if (!this.$RTM.client) {
				this.$RTM.createInstance();
				this.$RTM.connectionStateChanged((status, reason) => {
					this.CONNECT_CHANGE({ status, reason });
					const action = {
						CONNECTED: {
							LOGIN_SUCCESS: () => {
								if (this.users.length) {
									this.updatePeersStatus(this.users);
								}
								this.$RTM.messageFromPeer(this.messageFromPeer);
							},
						},
					};
					if (status in action) {
						if (reason in action[status]) {
							action[status][reason]();
						}
					}
				});
				if (this.user) {
					await this.login();
				}
			}
		},
		messageFromPeer(msg, pid, prop) {
			this.MSG_UPDATE({ ...msg, pid, ...prop });
		},
		async login() {
			return this.$RTM.login(this.user.id.toString());
		},
		async updatePeersStatus(users) {
			return this.peersStatusAction(users.map(user => user.id.toString()));
		},
	},
};
