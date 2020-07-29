<template lang="pug">
.weui-loadmore(:class="[line ? 'weui-loadmore_line' : '', dot ? 'weui-loadmore_dot': '' ]")
  i.weui-loading(v-if="loading")
  .weui-loadmore__tips(v-text="placehold")
</template>
<script>
export default {
	props: {
		line: Boolean,
		dot: Boolean,
		loading: Boolean,
		placehold: String,
	},
};
</script>
