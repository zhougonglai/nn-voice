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
      :title="`${user.first_name} ${user.last_name}`"
      @click="navigationChat(user)"
      :desc="user.email")
      template(#header)
        img.rounded-lg.weui-media-box__thumb(:src="user.avatar")
        template(v-if="peersStatus && isFinite(peersStatus[user.id])")
          WeBage.weui-badge_dot(:class="{'bg-success': peersStatus[user.id]}")
      template(#footer)
        box-icon(name='send' type='solid' :color="$vuetify.theme.dark ? 'white' : 'black'")
</template>
<script>
import { mapState, mapActions } from 'vuex';
import LazyLoadView from '@/components/wc/LazyLoadView';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('user', ['user', 'users']),
		...mapState('rtm', ['peersStatus']),
	},
	methods: {
		...mapActions('user', ['usersAction']),
		...mapActions('rtm', ['peersStatusAction']),
		async initCards() {
			await this.usersAction(1).catch(e => {});
			return true;
		},
		async updatePeersStatus() {
			return this.peersStatusAction(this.users.map(user => user.id.toString()));
		},
		navigationChat(card) {
			this.$router.push(`/peer/${card.id}`);
		},
	},
};
</script>
