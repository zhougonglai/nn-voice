<template lang="pug">
#home.flex.flex-col.h-full
	WeNavbar(v-model="current")
		WeNavItem(name="peer") 好友
		WeNavItem(name="channel") 频道
	.flex-1.overflow-y-auto
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
		};
	},
	components: {
		LazyLocadView,
		PeerToPeer,
		PeerToChannel,
	},
};
</script>
