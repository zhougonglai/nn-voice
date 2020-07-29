// const img = `https://api.adorable.io/avatars/285/${id}.png`;
const uuid = () =>
	Math.random()
		.toString()
		.substr(-6);

export const state = () => ({
	cards: [],
	userCards: [],
});

export const getters = {
	getCard: state => id => state.cards.find(server => server.serverId == id),
};

export const actions = {
	async cardAction({ commit }) {
		const cards = [
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvKAKGQOAAA6_Dm45LY377.png',
				intor:
					'绝地求生是一款战术竞技游戏,策略与枪法一样重要,充满各种随机性要素,需要你随时做出判断,取得胜利。',
				mambers: 76,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 12280,
				serverName: '绝地求生',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvGAbtGyAAADeA6r4tc653.png',
				userId: 144080262,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvqAcDqQAABBY1ZENXc890.png',
				intor:
					'DOTA2完整继承了原作DotA超过一百位的英雄。DOTA2的玩法和DotA完全相同，通过优秀的系统、美术和功能，呈现出了超越经典且原味十足的体验感觉。',
				mambers: 46,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10276,
				serverName: 'DOTA2',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvmARmwoAAADA-MUg2g002.png',
				userId: 144080303,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOyWABTEUAABTPTCSuqE492.png',
				intor:
					'玩家们将扮演一座监狱岛上的囚犯，而他们必须在这座小岛进行求生游戏，过程都将通过直播给所有付费观众观看',
				mambers: 10,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10277,
				serverName: 'SCUM',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOySAYM_gAAAI97VhOYU242.png',
				userId: 144080309,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOyyAMO_5AABQZ_r9lTo702.png',
				intor:
					'这款游戏是动漫改编的动作格斗游戏火影忍者系列的最新作品,在游戏中玩家们将体验到全新的夺阵战玩法,提升了游戏的可玩性。',
				mambers: 20,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10278,
				serverName: '火影忍者：新忍出击',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOyyAIL3tAAAGzN0-q_E353.png',
				userId: 144080313,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOzKAMBEQAAA-iDgEQz4263.png',
				intor:
					'故事紧随《狙击精英3》,男主Karl Fairburne在完成上一代的任务后果断奔赴亚平宁半岛和反抗军携手对抗意大利法西斯。',
				mambers: 9,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10280,
				serverName: '狙击精英4',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOzKAabj7AAACtXY13as473.png',
				userId: 144080320,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/06/rB8AIF79qeWAb_5bAABeeKvHG0s891.png',
				intor:
					'《神之浩劫》在众神对战背景下，提供多模式对战玩法，在操作上结合了MMORPG和FPS游戏的元素，为玩家提供更多操作追求及乐趣。',
				mambers: 12,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10281,
				serverName: '神之浩劫',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/06/rB8AIF79qeCAPYAmAAAGH3cI0k0548.png',
				userId: 144080325,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2aAXNZpAAAeCXpspiI224.png',
				intor:
					'一款生存的多人沙盒类游戏，角色在废墟之城内不断的搜刮，强化自己的装备和建造设施来抵御怪物的无休止攻击',
				mambers: 5,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10283,
				serverName: 'Unturned',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2aAeWfRAAAB-xmSyMM914.png',
				userId: 144080331,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2yATV1wAABFBW4Z2WE969.png',
				intor:
					'《机械迷城》是一部非常经典的单机游戏，从每一关奇思精巧令人拍案叫绝的布局，到峰回路转大气磅礴中充满淡淡忧伤的故事情节',
				mambers: 18,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10285,
				serverName: '机械艺术',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2yAY60IAAAC8xsVcDA670.png',
				userId: 144080335,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO22ATN17AAAmeR8OBZI718.png',
				intor:
					'游戏玩法是简单粗暴的大乱斗，玩家可以拳击、推、拉、冲撞对手，或是利用环境的机关、陷阱来对付其他人',
				mambers: 3,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10286,
				serverName: '基佬大乱斗',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO22ADyXQAAAEcS_9djU526.png',
				userId: 144080336,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO3KAcYYhAAAZlhqStto468.png',
				intor:
					'玩家们将会在僵尸世界中求生，并能够进行交易和PVP。游戏将会包含经典的老派生存模式，每个玩家能够利用不同的技能来打造自己的角色',
				mambers: 4,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10287,
				serverName: '死亡边境2',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO3GAFS-nAAAEOIBMC9c089.png',
				userId: 144080340,
				userUrlNn: '',
			},
		];
		commit('SET_CARD', cards);
		return cards;
	},
	cardsAction() {},
	async userCardAction({ commit }) {
		const cards = [
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvKAKGQOAAA6_Dm45LY377.png',
				intor:
					'绝地求生是一款战术竞技游戏,策略与枪法一样重要,充满各种随机性要素,需要你随时做出判断,取得胜利。',
				mambers: 76,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 12280,
				serverName: '绝地求生',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvGAbtGyAAADeA6r4tc653.png',
				userId: 144080262,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvqAcDqQAABBY1ZENXc890.png',
				intor:
					'DOTA2完整继承了原作DotA超过一百位的英雄。DOTA2的玩法和DotA完全相同，通过优秀的系统、美术和功能，呈现出了超越经典且原味十足的体验感觉。',
				mambers: 46,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10276,
				serverName: 'DOTA2',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/05/rBMjk17XOvmARmwoAAADA-MUg2g002.png',
				userId: 144080303,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOyWABTEUAABTPTCSuqE492.png',
				intor:
					'玩家们将扮演一座监狱岛上的囚犯，而他们必须在这座小岛进行求生游戏，过程都将通过直播给所有付费观众观看',
				mambers: 10,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10277,
				serverName: 'SCUM',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOySAYM_gAAAI97VhOYU242.png',
				userId: 144080309,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOyyAMO_5AABQZ_r9lTo702.png',
				intor:
					'这款游戏是动漫改编的动作格斗游戏火影忍者系列的最新作品,在游戏中玩家们将体验到全新的夺阵战玩法,提升了游戏的可玩性。',
				mambers: 20,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10278,
				serverName: '火影忍者：新忍出击',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOyyAIL3tAAAGzN0-q_E353.png',
				userId: 144080313,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOzKAMBEQAAA-iDgEQz4263.png',
				intor:
					'故事紧随《狙击精英3》,男主Karl Fairburne在完成上一代的任务后果断奔赴亚平宁半岛和反抗军携手对抗意大利法西斯。',
				mambers: 9,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10280,
				serverName: '狙击精英4',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/07/rBMjk17XOzKAabj7AAACtXY13as473.png',
				userId: 144080320,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/06/rB8AIF79qeWAb_5bAABeeKvHG0s891.png',
				intor:
					'《神之浩劫》在众神对战背景下，提供多模式对战玩法，在操作上结合了MMORPG和FPS游戏的元素，为玩家提供更多操作追求及乐趣。',
				mambers: 12,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10281,
				serverName: '神之浩劫',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/06/rB8AIF79qeCAPYAmAAAGH3cI0k0548.png',
				userId: 144080325,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2aAXNZpAAAeCXpspiI224.png',
				intor:
					'一款生存的多人沙盒类游戏，角色在废墟之城内不断的搜刮，强化自己的装备和建造设施来抵御怪物的无休止攻击',
				mambers: 5,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10283,
				serverName: 'Unturned',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2aAeWfRAAAB-xmSyMM914.png',
				userId: 144080331,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2yATV1wAABFBW4Z2WE969.png',
				intor:
					'《机械迷城》是一部非常经典的单机游戏，从每一关奇思精巧令人拍案叫绝的布局，到峰回路转大气磅礴中充满淡淡忧伤的故事情节',
				mambers: 18,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10285,
				serverName: '机械艺术',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO2yAY60IAAAC8xsVcDA670.png',
				userId: 144080335,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO22ATN17AAAmeR8OBZI718.png',
				intor:
					'游戏玩法是简单粗暴的大乱斗，玩家可以拳击、推、拉、冲撞对手，或是利用环境的机关、陷阱来对付其他人',
				mambers: 3,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10286,
				serverName: '基佬大乱斗',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO22ADyXQAAAEcS_9djU526.png',
				userId: 144080336,
				userUrlNn: '',
			},
			{
				backImgUrl:
					'https://dfs01.nn.com/group1/M00/00/01/rBMjhl7eJnmAGOjEAAUsJc3gBkM035.png',
				bigImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO3KAcYYhAAAZlhqStto468.png',
				intor:
					'玩家们将会在僵尸世界中求生，并能够进行交易和PVP。游戏将会包含经典的老派生存模式，每个玩家能够利用不同的技能来打造自己的角色',
				mambers: 4,
				nickName: '',
				nnNumber: 0,
				onlineNum: 0,
				serverId: 10287,
				serverName: '死亡边境2',
				serverTypeId: 2,
				smallImgUrl:
					'https://dfs01.nn.com//group1/M00/00/0A/rBMjk17XO3GAFS-nAAAEOIBMC9c089.png',
				userId: 144080340,
				userUrlNn: '',
			},
		];
		commit('SET_USER_CARD', cards);
		return card;
	},
};

export const mutations = {
	SET_CARD(state, card) {
		state.cards = card;
	},
	SET_USER_CARD(state, card) {
		state.userCards = card;
	},
};
