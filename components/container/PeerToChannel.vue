<template lang="pug">
LazyLoadView(:initFN="initCards" v-cloak key="cards")
  template(#loading)
    v-skeleton-loader.mx-auto.rounded-0(
      v-for="ske in 5"
      :key="ske"
      type="list-item")
  .weui-cells
    WeCell.weui-cell_access(
      v-for="card in cards"
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
		...mapState('channel', ['cards']),
	},
	methods: {
		...mapActions('channel', ['cardAction']),
		async initCards() {
			return await Promise.all([this.cardAction()]);
		},
	},
};
</script>
