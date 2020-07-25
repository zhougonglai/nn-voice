<template lang="pug">
LazyLoadView(:initFN="init")
	template(#loading)
		v-skeleton-loader.mx-auto(
						v-for="ske in 5"
						:key="ske"
						type="list-item-avatar-two-line")
	.message-list(v-if="getMessages($route.params.id).length")
		.message-item(v-for="msg in getMessages($route.params.id)" :key="msg.serverReceivedTs") {{msg.text}}
	template(v-else)
		.empty.h-full.flex.align-center.justify-center
			img(src="https://discord.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg" alt="empty")
</template>
<script>
import LazyLoadView from '@/components/wc/LazyLoadView';
import { mapState, mapGetters } from 'vuex';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('rtm', ['messages']),
		...mapGetters('rtm', ['getMessages']),
	},
	methods: {
		async init() {
			return Promise.resolve(true);
		},
	},
};
</script>
