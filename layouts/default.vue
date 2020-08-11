<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
	template(#loading)
		PageHold
	v-app
		.absolute.inset-0.safe-aria
			WeTabs(v-model="active" @change="tabChange")
				template(#active)
					keep-alive(:include="['index', 'more', 'me']")
						nuxt
				WeTabItem(label="消息" name="index")
					template(#icon)
						i.material-icons.weui-tabbar__icon home
				WeTabItem(label='房间' name="more")
					template(#icon)
						i.material-icons.weui-tabbar__icon apps
				WeTabItem(label='动态' name="explore")
					template(#icon)
						i.material-icons.weui-tabbar__icon explore
				WeTabItem(:label="`${user.first_name} ${user.last_name}`" v-if="user" :icon="user.avatar" name="me")
				WeTabItem(label="我的" v-else name="me" icon="https://dfs01.nn.com/group1/M00/00/19/rB8AIF8RSeyACRJoAAAKmXbq74c060.png")
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';
import { mapState, mapActions, mapMutations } from 'vuex';
import RTMmixin from '@/mixins/rtm';

export default {
	name: 'DefaultLayout',
	data() {
		return {
			drawer: false,
			active: 'index',
			tabs: {
				index: '/',
				more: '/more',
				explore: '/explore',
				me: '/me',
			},
			darkmode: false,
		};
	},
	mixins: [RTMmixin],
	components: {
		LazyLocadView,
		PageHold,
	},
	computed: {
		...mapState('user', ['user']),
		...mapState('rtm', ['clients']),
	},
	mounted() {
		this.$vuetify.theme.dark = matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;
		this.active = this.$route.name;
	},
	methods: {
		...mapActions('user', ['userAction']),
		async init() {
			if (process.env.NODE_ENV === 'production' && !window.vConsole) {
				window.vConsole = new window.VConsole();
			}
			return Promise.resolve();
		},
		tabChange(name) {
			this.$router.push(this.tabs[name]);
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
