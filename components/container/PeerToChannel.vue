<template lang="pug">
LazyLoadView(:initFN="initCards" v-cloak key="cards")
  template(#loading)
    v-skeleton-loader.mx-auto.rounded-0(
      v-for="ske in 5"
      :key="ske"
      type="list-item")
  .grid.grid-cols-2.gap-2.pa-2
    .rounded.card.flex.flex-col(v-for="card in cards" :key="card.id" @click="navigatorToChannel(card)")
      .card-header
        img(:src="card.bigImgUrl")
      .card-avatar
        img(:src="card.smallImgUrl")
      .card-content.pa-2
        .card-title(v-text="card.serverName")
        .card-intro(v-text="card.intor")
  LoadMore(placehold="没有更多了" line)
</template>
<script>
import LazyLoadView from '@/components/wc/LazyLoadView';
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('user', ['user']),
		...mapState('channel', ['cards']),
	},
	methods: {
		...mapActions('channel', ['cardAction']),
		async initCards() {
			return await Promise.all([this.cardAction()]);
		},
		navigatorToChannel(card) {
			if (this.user) {
				this.$router.push(`/channel/${card.serverId}`);
			} else {
				window.weui.alert('请先去登录');
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.card {
	background: var(--weui-BG-5);
	box-shadow: 0 2px 3px var(--weui-FG-3);
	color: var(--weui-FG-0);
	overflow: hidden;
	position: relative;
	&-header {
		position: relative;
	}
	&-avatar {
		position: absolute;
		right: 15px;
		top: 80px;
		background: var(--weui-BG-5);
		padding: 4px;
		border-radius: 50%;
	}
	&-content {
		flex: 1;
	}
	&-title {
		font-size: large;
		font-weight: 400;
		color: var(--weui-FG-0);
	}
	&-intro {
		font-size: small;
		color: var(--weui-FG-HALF);
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	&-action {
	}
}
</style>
