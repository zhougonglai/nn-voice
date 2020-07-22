export const state = () => ({
	user: '',
});

export const actions = {
	async userAction({ commit }, id) {
		// console.log(process.env.API);
		const { data } = await this.$axios.$get(`${process.env.API}/users/${id}`);
		commit('USER', data);
		return data;
	},
};

export const mutations = {
	USER(state, user) {
		state.user = user;
	},
};
