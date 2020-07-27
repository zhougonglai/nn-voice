export const state = () => ({
	peersStatus: {},
	connect: {
		state: '',
		reason: '',
	},
	messages: [],
});

export const getters = {
	getMessages: state => pid =>
		state.messages.filter(messages => messages.pid == pid),
};

export const actions = {
	async peersStatusAction({ commit }, uids) {
		const status = await this.$RTM.queryPeersOnlineStatus(uids);
		commit('PEERS_STATUS', status);
		return status;
	},
};

export const mutations = {
	PEERS_STATUS(state, status) {
		state.peersStatus = status;
	},
	CONNECT_CHANGE(state, { status, reason }) {
		state.connect.state = status;
		state.connect.reason = reason;
	},
	MSG_UPDATE(state, msg) {
		state.messages = state.messages.concat([msg]);
	},
};
