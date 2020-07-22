<template lang="pug">
#home
	WeNavbar(v-model="current")
		WeNavItem(name="message") 消息
		WeNavItem(name="voice") 语音

</template>
<script>
import { mapActions } from 'vuex';

export default {
	name: 'home',
	data() {
		return {
			current: 'message',
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		...mapActions('channel', ['cardAction', 'userCardAction']),
		init() {
			this.cardAction();
			this.userCardAction();
		},
	},
};
</script>
