<template lang="pug">
LazyLocadView.absolute.inset-0(:initFN="init" v-cloak)
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
import RTCMixin from '@/mixins/rtc';

export default {
	name: 'ChannelLayout',
	data() {
		return {};
	},
	components: {
		LazyLocadView,
		PageHold,
	},
	mixins: [RTMmixin, RTCMixin],
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
			if (process.env.NODE_ENV === 'production' && !window.vConsole) {
				window.vConsole = new window.VConsole();
			}
			if (this.user) {
				return true;
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
