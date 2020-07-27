<template lang="pug">
#more
	Banners(v-model="index" :active="banners[index]" :before="beforeActive" :after="afterActive")
</template>
<script>
import Banners from '@/components/wc/Banners';
import Banner from '@/components/wc/Banner';

export default {
	name: 'more',
	components: {
		Banners,
		Banner,
	},
	data() {
		return {
			index: 0,
			banner: 'https://api.adorable.io/avatars/285/',
			banners: [
				{
					key: 1,
					url: 'https://api.adorable.io/avatars/285/1.png',
				},
				{
					key: 2,
					url: 'https://api.adorable.io/avatars/285/2.png',
				},
				{
					key: 3,
					url: 'https://api.adorable.io/avatars/285/3.png',
				},
				{
					key: 4,
					url: 'https://api.adorable.io/avatars/285/4.png',
				},
				{
					key: 5,
					url: 'https://api.adorable.io/avatars/285/5.png',
				},
			],
		};
	},
	computed: {
		beforeActive() {
			return this.index === 0
				? this.banners[this.banners.length - 1]
				: this.banners[this.index - 1];
		},
		afterActive() {
			return this.index === this.banners.length - 1
				? this.banners[0]
				: this.banners[this.index + 1];
		},
	},
};
</script>
