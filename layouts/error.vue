<template lang="pug">
v-app
  v-main
    .w-full.h-full.flex.items-center.justify-center
      h1(v-if="error.statusCode === 404") {{ pageNotFound }}
      h1(v-else) {{ otherError }}
      br
      n-link(to="/") 回到首页
</template>
<script>
export default {
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title,
		};
	},
	data() {
		return {
			pageNotFound: '找不到该页面',
			otherError: '暂时无法访问',
		};
	},
};
</script>

<style scoped>
h1 {
	font-size: 20px;
}
</style>
