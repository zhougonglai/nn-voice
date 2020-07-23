<template lang="pug">
.weui-btn(
  :class=[
    type ? `weui-btn_${type}` : '',
    loading ? `weui-btn_loading`: '',
    disabled ? `weui-btn_disabled`: '',
  ]
)
  slot
</template>
<script>
export default {
	props: {
		type: String,
		loading: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
