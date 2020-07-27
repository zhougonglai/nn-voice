<template lang="pug">
#home.h-full.overflow-y-auto
	Banners(:data="banners")
	WeNavbar(v-model="current")
		WeNavItem(name="peer") 好友
		WeNavItem(name="channel") 频道
	keep-alive(:include="['PeerToPeer', 'PeerToChannel']")
		PeerToPeer(v-if="current === 'peer'")
		PeerToChannel(v-else)
</template>
<script>
import { mapState, mapActions } from 'vuex';
import LazyLocadView from '@/components/wc/LazyLoadView';
import PeerToPeer from '@/components/container/PeerToPeer';
import PeerToChannel from '@/components/container/PeerToChannel';

export default {
	name: 'index',
	data() {
		return {
			current: 'peer',
			banners: [
				{
					url: 'https://api.adorable.io/avatars/285/1.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/2.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/3.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/4.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/5.png',
				},
			],
		};
	},
	components: {
		LazyLocadView,
		PeerToPeer,
		PeerToChannel,
	},
};
</script>
