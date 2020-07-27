<template lang="pug">

</template>
<script>
export default {
	inject: ['banners'],
	props: ['index', 'after', 'before', 'active'],
	methods: {
		handleClick() {
			this.banners.active(this.index);
		},
	},
};
</script>
<style lang="scss" scoped>
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
	transform: translate3d(calc(25px - 50%), -50%, -150px) scale(1);
	transition: transform 0.2s ease;
	z-index: 1;
	&.before {
		transform: translate3d(calc(-50px - 50%), -50%, 0px) scale(1);
		// transform: translate(calc(25px - 50%), -50%) scale(1);
		z-index: 10;
	}
	&.after {
		display: block;
		transform: translate3d(calc(100px - 50%), -50%, -300px) scale(1);
		// transform: translate(calc(100px - 50%), -50%) scale(0.95);
		z-index: 0;
	}
}
</style>
