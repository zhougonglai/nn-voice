<template lang="pug">
LazyLocadView.appearance-none(:initFN="init" v-cloak)
	template(#loading)
		PageHold
	header.mip-nav-wrapper
		mip-nav-slidedown.mip-element-sidebar.container(
			data-id="bs-navbar"
			data-showbrand="1"
			data-brandname="薄荷")
			nav#bs-navbar.navbar-collapse.collapse.navbar.navbar-static-top
				ul.nav.navbar-nav.navbar-right
					li
						n-link(to="/mip/" ) 首页
					li
						n-link(to="/mip/recharge") 充值
					li
						n-link(to="/mip/activity") 活动
					li
						n-link(to="/mip/business") 合作
					li
						n-link(to="/mip/game") 游戏支持
					li
						n-link(to="/mip/notice") 官方公告
					li
						n-link(to="/mip/about") 关于BOHE
					li.navbar-wise-close
						span#navbar-wise-close-btn
	nuxt
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';

export default {
	name: 'MIPLayout',
	components: {
		LazyLocadView,
		PageHold,
	},
	methods: {
		async init() {
			return true;
		},
	},
	head() {
		return {
			htmlAttrs: {
				lang: 'zh',
				mip: true,
			},
			bodyAttrs: {
				class: ['mobile'],
			},
			link: [
				{
					rel: 'stylesheet',
					href: 'https://c.mipcdn.com/static/v2/mip.css',
				},
			],
			script: [
				{
					src: 'https://c.mipcdn.com/static/v2/mip.js',
					body: true,
				},
				{
					src:
						'https://c.mipcdn.com/static/v2/mip-nav-slidedown/mip-nav-slidedown.js',
					body: true,
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--weui-BG-0);
	height: fit-content;
	z-index: 9;
}
#bs-navbar {
	background-color: var(--weui-BG-0);
}
</style>
