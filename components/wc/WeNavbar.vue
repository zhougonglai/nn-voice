<template lang="pug">
.weui-navbar
  slot
</template>
<script>
export default {
	props: {
		value: {
			type: [String, Number, Boolean],
			required: true,
		},
	},
	provide() {
		return {
			navbar: this,
		};
	},
	methods: {
		change(name) {
			this.$emit('input', name);
			this.$emit('change', name);
		},
	},
};
</script>
