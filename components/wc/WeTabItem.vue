<template lang="pug">
.weui-tabbar__item(
	:class="{'weui-bar__item_on': this.wetab.value === name }"
	@click="activeName")
	.weui-tabbar__box
		slot(v-if="$slots.icon" name="icon")
		img.weui-tabbar__icon(v-else :src="icon" :alt="label")
	slot(v-if="$slots.label")
	.weui-tabbar__label(v-else v-text="label")
</template>
<script>
export default {
	props: {
		icon: String,
		label: String,
		name: {
			type: [String, Number, Boolean],
			required: true,
		},
	},
	inject: ['wetab'],
	methods: {
		activeName() {
			this.wetab.switcName(this.name);
		},
	},
};
</script>
<style lang="scss" scoped>
.weui-tabbar__box {
	display: inline-block;
	position: relative;
}
</style>
