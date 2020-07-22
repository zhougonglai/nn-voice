<template lang="pug">
#home
	WeNavbar(v-model="current")
		WeNavItem(name="message") 消息
		WeNavItem(name="voice") 语音
</template>
<script>
export default {
	name: 'home',
	data() {
		return {
			current: 'message',
		};
	},
};
</script>
