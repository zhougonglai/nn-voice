<template lang="pug">
#home.flex.flex-col.h-full
	WeNavbar(v-model="current" @change="navChange")
		WeNavItem(name="message") 消息
		WeNavItem(name="voice") 语音
	.flex-1.overflow-y-auto
		template(v-if="current === 'message'")
			LazyLocadView(:initFN="initCards" v-cloak key="cards")
				template(#loading)
					v-skeleton-loader.mx-auto(
						v-for="ske in 5"
						:key="ske"
						type="list-item-avatar-two-line")
				WePanel
					WeBox.weui-media-box_appmsg(
						v-for="card in cards"
						:key="card.id"
						:title="card.username"
						@click="navigationRoom(card)"
						:desc="card.company.catchPhrase")
						template(#header)
							img.weui-media-box__thumb(:src="card.avatar")
						template(#footer)
							SvgIcon(className="#iconTextchannel")
		template(v-else)
			LazyLoadView(:initFN="initUserCards" v-cloak key="userCards")
				template(#loading)
					v-skeleton-loader.mx-auto(
						v-for="ske in 5"
						:key="ske"
						type="list-item")
				.weui-cells
					WeCell.weui-cell_access(
						v-for="card in userCards"
						:key="card.id")
						template(#header)
							SvgIcon(className="#iconVoicechannel")
						.ml-4(v-text="card.username")
						template(#footer)
							| {{card.phone}}
</template>
<script>
import { mapState, mapActions } from 'vuex';
import LazyLocadView from '@/components/wc/LazyLoadView';

export default {
	name: 'home',
	data() {
		return {
			current: 'message',
		};
	},
	components: {
		LazyLocadView,
	},
	computed: {
		...mapState('channel', ['cards', 'userCards']),
	},
	methods: {
		...mapActions('channel', ['cardAction', 'userCardAction']),
		init() {
			return this.initCards();
		},
		navChange(name) {
			const action = {
				voice: () => this.initCards(),
				message: () => this.initUserCards(),
			};
			action[name]();
		},
		async initCards() {
			return await Promise.all([this.cardAction()]);
			// if (Object.values(this.cards).length < 11) {
			// } else {
			// 	return true;
			// }
		},
		async initUserCards() {
			return await Promise.all([this.userCardAction()]);
			// if (Object.values(this.userCards).length < 11) {
			// } else {
			// 	return true;
			// }
		},
		navigationRoom(card) {
			this.$router.push(`/channel/${card.id}`);
		},
	},
};
</script>
