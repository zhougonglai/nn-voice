// const img = `https://api.adorable.io/avatars/285/${id}.png`;
const uuid = () =>
	Math.random()
		.toString(16)
		.substr(-10);

export const state = () => ({
	cards: {},
	userCards: {},
});

export const actions = {
	async cardAction({ commit }) {
		const card = await this.$axios.$get(`${process.env.FACKR}`, {
			params: {
				property: 'helpers.contextualCard',
				locale: 'zh_CN',
			},
		});
		commit('SET_CARD', { ...card, id: uuid() });
		return card;
	},
	cardsAction() {},
	async userCardAction({ commit }) {
		const card = await this.$axios.$get(`${process.env.FACKR}`, {
			params: {
				property: 'helpers.userCard',
				locale: 'zh_CN',
			},
		});
		commit('SET_USER_CARD', { id: uuid(), ...card });
		return card;
	},
};

export const mutations = {
	SET_CARD(state, card) {
		state.cards[card.id] = card;
	},
	SET_USER_CARD(state, card) {
		state.userCards[card.id] = card;
	},
};
