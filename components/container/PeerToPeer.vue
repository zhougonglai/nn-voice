<template lang="pug">
LazyLoadView(:initFN="initCards" v-cloak key="cards")
  template(#loading)
    v-skeleton-loader.mx-auto.rounded-0(
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
</template>
<script>
import { mapState, mapActions } from 'vuex';
import LazyLoadView from '@/components/wc/LazyLoadView';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('user', ['users']),
	},
	methods: {
		...mapActions('user', ['usersAction']),
		async initCards() {
			return await Promise.all([this.usersAction(1), this.usersAction(2)]);
		},
		navigationRoom(card) {
			this.$router.push(`/channel/${card.id}`);
		},
	},
};
</script>
