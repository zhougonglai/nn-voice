// const img = `https://api.adorable.io/avatars/285/${id}.png`;
const uuid = () =>
	Math.random()
		.toString(16)
		.substr(-10);

export const state = () => ({
	cards: {},
	userCards: {},
});

export const getters = {
	getCard: state => id => state.cards[id],
};

export const actions = {
	async cardAction({ commit }) {
		const card = {
			name: '胡',
			username: '胡_金鑫',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/samuelkraft/128.jpg',
			email: '_75@yahoo.com',
			dob: '1963-08-26T23:22:24.737Z',
			phone: '669-05988534',
			address: {
				street: '伟祺 巷',
				suite: 'Apt. 374',
				city: '成 郭徽市',
				zipcode: '916863',
				geo: { lat: '9.1939', lng: '-3.2184' },
			},
			website: '方.biz',
			company: {
				name: '烨华 Inc',
				catchPhrase: 'Visionary 3rd generation emulation',
				bs: 'rich recontextualize communities',
			},
			id: '06c76eb1e8',
		};

		// const card = await this.$axios.$get(`${process.env.FACKR}`, {
		// 	params: {
		// 		property: 'helpers.contextualCard',
		// 		locale: 'zh_CN',
		// 	},
		// });
		// commit('SET_CARD', { ...card, id: uuid() });
		commit('SET_CARD', card);
		return card;
	},
	cardsAction() {},
	async userCardAction({ commit }) {
		const card = {
			id: '10c7cb8497',
			name: '尹 峻熙',
			username: '侯.熠彤',
			email: '7@hotmail.com',
			address: {
				street: '邹 中心',
				suite: 'Suite 735',
				city: '乐驹州市',
				zipcode: '654609',
				geo: { lat: '-16.0679', lng: '43.2693' },
			},
			phone: '01520070062',
			website: '钟.biz',
			company: {
				name: '聪健 - 聪健',
				catchPhrase: 'Pre-emptive local collaboration',
				bs: 'plug-and-play morph action-items',
			},
		};
		// const card = await this.$axios.$get(`${process.env.FACKR}`, {
		// 	params: {
		// 		property: 'helpers.userCard',
		// 		locale: 'zh_CN',
		// 	},
		// });
		// commit('SET_USER_CARD', { id: uuid(), ...card });
		commit('SET_USER_CARD', card);
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
