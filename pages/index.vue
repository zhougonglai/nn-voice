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
						v-for="user in users"
						:key="user.id"
						:title="`${user.first_name} ${user.last_name}`"
						@click="navigationRoom(user)"
						:desc="user.email")
						template(#header)
							img.weui-media-box__thumb(:src="user.avatar")
						template(#footer)
							box-icon(name='send' type='solid')
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
		...mapState('user', ['users']),
		...mapState('channel', ['cards', 'userCards']),
	},
	methods: {
		...mapActions('user', ['usersAction']),
		...mapActions('channel', ['cardAction', 'userCardAction']),
		init() {
			return this.initCards();
		},
		navChange(name) {
			// const action = {
			// 	message: () => this.initCards(),
			// 	voice: () => this.initUserCards(),
			// };
			// action[name]();
		},
		async initCards() {
			return await Promise.all([this.usersAction(1), this.usersAction(2)]);
		},
		async initUserCards() {
			return await Promise.all([this.userCardAction()]);
		},
		navigationRoom(card) {
			this.$router.push(`/channel/${card.id}`);
		},
	},
};
</script>
