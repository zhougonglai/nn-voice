<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
	template(#loading)
		PageHold
	v-app
		nuxt
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';
import { mapState, mapActions } from 'vuex';
import RTMmixin from '@/mixins/rtm';

export default {
	name: 'ChannelLayout',
	data() {
		return {};
	},
	components: {
		LazyLocadView,
		PageHold,
	},
	mixins: [RTMmixin],
	computed: {
		...mapState('user', ['user']),
	},
	mounted() {
		this.$vuetify.theme.dark = matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;
	},
	methods: {
		...mapActions('user', ['userAction']),
		async init() {
			if (this.user) {
				return new Promise(resolve => setTimeout(resolve, 2250));
			} else {
				return await this.userAction(1);
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.weui-tab::v-deep {
	width: 100vw;
	height: 100vh;
	img.weui-tabbar__icon {
		border-radius: 50%;
	}
}
</style>
