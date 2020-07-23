<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
	template(#loading)
		PageHold
	v-app
		v-main
			WeTabs.safe-aria(v-model="active" @change="tabChange")
				template(#active)
					nuxt
				WeTabItem(label="主页" name="home")
					template(#icon)
						i.bx.weui-tabbar__icon(:class="[ active === 'home' ? 'bxs-home' : 'bx-home']")
				WeTabItem(label='更多社区' name="more")
					template(#icon)
						i.bx.weui-tabbar__icon(:class="[ active === 'more' ? 'bxs-grid-alt' : 'bx-grid-alt' ]")
				WeTabItem(:label="`${user.first_name} ${user.last_name}`" v-if="user" :icon="user.avatar" name="me")
				WeTabItem(label="我的" v-else name="me" icon="https://dfs01.nn.com/group1/M00/00/19/rB8AIF8RSeyACRJoAAAKmXbq74c060.png")
					//- template(#icon)
					//- 	i.bx.weui-tabbar__icon(:class="[ active === 'me' ? 'bxs-user' : 'bx-user' ]")
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
	data() {
		return {
			drawer: false,
			active: 'home',
			tabs: {
				home: '/',
				more: '/more',
				me: '/me',
			},
			darkmode: false,
		};
	},
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
	},
	methods: {
		...mapActions('user', ['userAction']),
		async init() {
			if (this.user) {
				return await this.initClient();
			} else {
				return await this.userAction(1);
			}
		},
		async initClient() {
			const client = await this.$RTM.createInstance();
			this.$RTM.connectionStateChanged(this.connectionStateChanged);
			return await this.$RTM.login(this.user.id.toString());
		},
		connectionStateChanged(state, reason) {
			console.log('connectionStateChanged', state, reason);
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
