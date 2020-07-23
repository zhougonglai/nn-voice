<template lang="pug">
LazyLoadView(:initFN="init")
  template(#loading)
    v-skeleton-loader.mx-auto(
						v-for="ske in 5"
						:key="ske"
						type="list-item-avatar-two-line")
  .message-list
    .message-item(v-for="msg in messages" :key="msg.uid") {{msg.text}}
</template>
<script>
import LazyLoadView from '@/components/wc/LazyLoadView';

export default {
	components: {
		LazyLoadView,
	},
	data() {
		return {
			messages: [
				{
					uid: 'asfasf',
					text: 'asgasg',
				},
			],
		};
	},
	methods: {
		async init() {
			this.$RTM.messageFromPeer(this.subscribe);
			return Promise.resolve(true);
		},
		subscribe(msg, id, prop) {
			console.log(msg, id, prop);
		},
	},
};
</script>
