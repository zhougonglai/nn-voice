<template lang="pug">
LazyLoadView(:initFN="initCards" v-cloak key="cards")
	template(#loading)
		v-skeleton-loader.mx-auto.rounded-0(
			v-for="ske in 5"
			:key="ske"
			type="list-item-avatar-two-line")
	WePanel
		WeBox.weui-media-box_appmsg(
			v-for="user in users.filter($user => $user.id !== user.id)"
			:key="user.id"
			hasDot
			@click="navigationChat(user)")
			template(#header)
				img.rounded-lg.weui-media-box__thumb(:src="user.avatar")
				template(v-if="peersStatus && isFinite(peersStatus[user.id])")
					WeBage.weui-badge_dot(:class="{'bg-success': peersStatus[user.id]}")
			.weui-media-box__title {{user.first_name}} {{user.last_name}}
			.weui-media-box__desc(v-if="getMessages(user.id).length") {{getMessages(user.id)[getMessages(user.id).length - 1].text}}
			.weui-media-box__desc(v-else) {{user.email}}
			template(#footer)
				box-icon(name='send' type='solid' :color="$vuetify.theme.dark ? 'white' : 'black'")
				template(v-if="getMessages(user.id).length")
					WeBage.weui-badge_dot
	LoadMore(placehold="没有更多了" line)
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import LazyLoadView from '@/components/wc/LazyLoadView';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('user', ['user', 'users']),
		...mapState('rtm', ['peersStatus']),
		...mapGetters('rtm', ['getMessages']),
	},
	methods: {
		...mapActions('user', ['usersAction']),
		...mapActions('rtm', ['peersStatusAction']),
		async initCards() {
			await this.usersAction(1).catch(e => {});
			this.messageFromPeer();
			return true;
		},
		messageFromPeer() {},
		async updatePeersStatus() {
			return this.peersStatusAction(this.users.map(user => user.id.toString()));
		},
		navigationChat(card) {
			this.$router.push(`/peer/${card.id}`);
		},
	},
};
</script>
