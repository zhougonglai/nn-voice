<template lang="pug">
#home.flex.flex-col.h-full
	WeNavbar(v-model="current" @change="navChange")
		WeNavItem(name="message") 消息
		WeNavItem(name="voice") 语音
	.flex-1.overflow-y-auto
		keep-alive(:include="['PeerToPeer', 'PeerToChannel']")
			PeerToPeer(v-if="current === 'message'")
			PeerToChannel(v-else)
</template>
<script>
import { mapState, mapActions } from 'vuex';
import LazyLocadView from '@/components/wc/LazyLoadView';
import PeerToPeer from '@/components/container/PeerToPeer';
import PeerToChannel from '@/components/container/PeerToChannel';

export default {
	name: 'index',
	data() {
		return {
			current: 'message',
		};
	},
	components: {
		LazyLocadView,
		PeerToPeer,
		PeerToChannel,
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
	},
};
</script>
