<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
	template(#loading)
		PageHold
	WeTabs(v-model="active" @change="tabChange")
		template(#active)
			nuxt
		WeTabItem(label="主页" name="home")
			template(#icon)
				i.bx.weui-tabbar__icon(:class="[ active === 'home' ? 'bxs-home' : 'bx-home']")
		WeTabItem(label='更多社区' name="more")
			template(#icon)
				i.bx.weui-tabbar__icon(:class="[ active === 'more' ? 'bxs-grid-alt' : 'bx-grid-alt' ]")
		WeTabItem(label="我的" v-if="user" :icon="user.avatar" name="me")
		WeTabItem(label="我的" v-else name="me")
			template(#icon)
				i.bx.weui-tabbar__icon(:class="[ active === 'me' ? 'bxs-user' : 'bx-user' ]")
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';
import { mapState, mapActions } from 'vuex';

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
		};
	},
	components: {
		LazyLocadView,
		PageHold,
	},
	computed: {
		...mapState('user', ['user']),
	},
	methods: {
		...mapActions('user', ['userAction']),
		async init() {
			if (this.user) {
				return true;
			} else {
				return await this.userAction(1);
			}
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
