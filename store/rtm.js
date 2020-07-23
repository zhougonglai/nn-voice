export const state = () => ({
	clients: {},
	peers: [],
	channels: [],
	peerMessage: {},
	channelMessage: {},
});

export const actions = {};

export const mutations = {
	concatClient(state, client) {
		state.clients = state.clients.concat([client]);
	},
};
