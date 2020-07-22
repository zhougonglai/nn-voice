export const state = () => ({
	user: '',
});

export const actions = {
	async userAction({ commit }, id) {
		const { data } = await this.$axios.$get(`/api/users/${id}`);
		commit('USER', data);
		return data;
	},
};

export const mutations = {
	USER(state, user) {
		state.user = user;
	},
};
