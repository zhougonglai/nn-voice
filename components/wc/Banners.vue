<template lang="pug">
.banners.w-full
	.banner.before(@click="handleClick('before')")
		img(:src="before.url")
	.banner.active(@click="handleClick('active')")
		img(:src="active.url")
	.banner.after(@click="handleClick('after')")
		img(:src="after.url")
</template>
<script>
export default {
	props: {
		value: [String, Number],
		before: Object,
		after: Object,
		active: Object,
	},
	methods: {
		activer(index) {
			console.log(index);
			this.$emit('input', index);
		},
		handleClick(index) {
			const action = {
				before: () => this.$emit('before'),
				active: () => this.$emit('input', this.value + 1),
				after: () => this.$emit('input', this.value + 2),
			};
			action[index]();
		},
	},
};
</script>
<style lang="scss" scoped>
.banners {
	height: 300px;
	border-bottom: 1px solid gray;
	position: relative;
	perspective: 1000px;
	overflow: hidden;
}
.banner {
	width: fit-content;
	height: fit-content;
	display: inline-flex;
	width: 275px;
	height: 275px;
	top: 50%;
	position: absolute;
	left: 50%;
	border-radius: 10px;
	overflow: hidden;
	transition: transform 0.2s ease;
	&.before {
		transform: translate3d(calc(-50px - 50%), -50%, 0px) scale(1);
		z-index: 10;
	}
	&.active {
		transform: translate3d(calc(25px - 50%), -50%, -150px) scale(1);
		z-index: 1;
	}
	&.after {
		display: block;
		transform: translate3d(calc(100px - 50%), -50%, -300px) scale(1);
		z-index: 0;
	}
}
</style>
