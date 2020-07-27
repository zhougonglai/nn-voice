import { mapState, mapActions, mapMutations } from 'vuex';
import { mapValues } from 'lodash';

export default {
	computed: {
		...mapState('user', ['user', 'users']),
	},
	mounted() {
		this.initRtmClient();
	},
	methods: {
		...mapActions('rtm', ['peersStatusAction']),
		...mapMutations('rtm', ['PEERS_STATUS', 'CONNECT_CHANGE', 'MSG_UPDATE']),
		async initRtmClient() {
			if (!this.$RTM.client) {
				this.$RTM.createInstance();
				this.$RTM.connectionStateChanged((status, reason) => {
					this.CONNECT_CHANGE({ status, reason });
					const action = {
						CONNECTED: {
							LOGIN_SUCCESS: async () => {
								if (this.users.length) {
									await this.subscribePeersOnlineStatus(
										this.users.map(user => user.id.toString()),
									);
									this.$RTM.peersOnlineStatusChanged(
										this.peersOnlineStatusChanged,
									);
									// this.updatePeersStatus(this.users);
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
		peersOnlineStatusChanged(status) {
			this.PEERS_STATUS(mapValues(status, v => v === 'ONLINE'));
		},
		messageFromPeer(msg, pid, prop) {
			this.MSG_UPDATE({ ...msg, pid, ...prop, sendTo: this.user.id });
		},
		async login() {
			return this.$RTM.login(this.user.id.toString());
		},
		async subscribePeersOnlineStatus(uids) {
			return this.$RTM.subscribePeersOnlineStatus(uids);
		},
		async updatePeersStatus(users) {
			return this.peersStatusAction(users.map(user => user.id.toString()));
		},
	},
};
