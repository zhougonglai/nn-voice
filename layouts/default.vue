<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
	template(#loading)
		PageHold
	WeTabs
		nuxt
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';

export default {
	data() {
		return {
			drawer: false,
		};
	},
	components: {
		LazyLocadView,
		PageHold,
	},
	methods: {
		async init() {
			// return new Promise(resolve => setTimeout(resolve, 5000));
			return true;
		},
	},
};
</script>
<style lang="scss" scoped>
.weui-tab::v-deep {
	width: 100vw;
	height: 100vh;
}
</style>
