<template lang="pug">
.weui-tab(v-bind="$attrs")
  .weui-tab__panel
    slot(name="active")
  .weui-tabbar
    slot
</template>
<script>
export default {
	props: {
		value: {
			type: [String, Object, Boolean, Number],
			required: true,
		},
	},
	provide() {
		return {
			wetab: this,
		};
	},
	methods: {
		switcName(name) {
			this.$emit('input', name);
			this.$emit('change', name);
		},
	},
};
</script>
