<template lang="pug">
LazyLoadView(:initFN="initUserCards" v-cloak key="userCards")
  template(#loading)
    v-skeleton-loader.mx-auto.rounded-0(
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
import LazyLoadView from '@/components/wc/LazyLoadView';
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('channel', ['userCards']),
	},
	methods: {
		...mapActions('channel', ['userCardAction']),
		async initUserCards() {
			return await Promise.all([this.userCardAction()]);
		},
	},
};
</script>
