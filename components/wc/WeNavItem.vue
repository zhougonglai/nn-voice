<template lang="pug">
.weui-navbar__item(
	:class="[{ 'weui-bar__item_on': navbar.value === name }]"
	@click="navbar.change(name)"
	v-bind="$attrs")
  slot
</template>
<script>
export default {
	inject: ['navbar'],
	props: {
		name: {
			type: [String, Boolean, Number],
			required: true,
		},
	},
};
</script>
