import { uniqBy } from 'lodash';

export const state = () => ({
	user: '',
	users: [],
});

export const getters = {
	getUser: state => id => state.users.find(user => user.id === parseInt(id)),
};

export const actions = {
	async userAction({ commit }, id) {
		// console.log(process.env.API);
		const { data } = await this.$axios.$get(`${process.env.API}/users/${id}`);
		commit('USER', data);
		return data;
	},
	async usersAction({ commit, state }, page) {
		const { data } = await this.$axios.$get(`${process.env.API}/users`, {
			params: { page },
		});
		if (page > 1) {
			commit('CONCAT_USERS', data);
		} else {
			commit('USERS', data);
		}
		return data;
	},
};

export const mutations = {
	USER(state, user) {
		state.user = user;
	},
	USERS(state, users) {
		state.users = users;
	},
	CONCAT_USERS(state, users) {
		state.users = uniqBy(state.users.concat(users), 'id');
	},
};
