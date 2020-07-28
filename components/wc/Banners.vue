<template lang="pug">
.banners.w-full
	template(v-if="banners")
		.banner(
			v-for="(banner, i) in banners.banners" :key="i"
			:class="{active: banner.active, next: banner.next, last: banner.last}"
			@click="!banner.active && handleClick(banner, i)")
			img(:src="banner.url")
</template>
<script>
import { take, drop, findIndex } from 'lodash';

class Banner {
	active = false;
	next = false;
	last = false;
	constructor(url, i, end) {
		this.url = url;
		this.index = i;
		this.end = end;
	}

	get show() {
		return this.active || this.next || this.last;
	}
}

class Banners {
	constructor(banners) {
		this.banners = banners.map(
			(banner, i) => new Banner(banner.url, i, i === banners.length),
		);
		this.banners[0].active = true;
		this.banners[1].next = true;
		this.banners[2].last = true;
		this.index = 0;
	}

	get active() {
		return this.banners.find(banner => banner.active);
	}

	set active(banner) {
		banner.active = true;
		banner.next = false;
		banner.last = false;
	}

	get next() {
		return this.banners.find(banner => banner.next);
	}

	set next(banner) {
		banner.active = false;
		banner.next = true;
		banner.last = false;
	}

	get last() {
		return this.banners.find(banner => banner.last);
	}

	set last(banner) {
		banner.active = false;
		banner.next = false;
		banner.last = true;
	}
}

export default {
	props: {
		value: Number,
		data: Array,
	},
	data() {
		return {
			current: 0,
			banners: null,
			animating: false,
		};
	},
	mounted() {
		this.banners = new Banners(this.data);
	},
	methods: {
		activer(index) {
			console.log(index);
			this.$emit('input', index);
		},
		handleClick() {
			if (!this.animating) {
				this.animating = true;
				this.banners.index = this.banners.next.index;
				this.banners.active.active = false;
				this.banners.active = this.banners.next;
				this.banners.next = this.banners.last;
				if (this.banners.next.index === this.banners.banners.length - 1) {
					this.banners.last = this.banners.banners[0];
				} else {
					this.banners.last = this.banners.banners[this.banners.next.index + 1];
				}
				setTimeout(() => {
					this.animating = false;
				}, 200);
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.banners {
	height: 300px;
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
	transform: scale(0);
	transition: transform 0.2s ease;
	&.active {
		transform: translate3d(calc(-50px - 50%), -50%, 0px) scale(1);
		z-index: 10;
	}
	&.next {
		transform: translate3d(calc(25px - 50%), -50%, -150px) scale(1);
		z-index: 1;
	}
	&.last {
		display: block;
		transform: translate3d(calc(100px - 50%), -50%, -300px) scale(1);
		z-index: 0;
	}
}
</style>
