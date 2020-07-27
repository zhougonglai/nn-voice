<template lang="pug">
#more
	Banners(:data="banners")
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
					url: 'https://api.adorable.io/avatars/285/1.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/2.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/3.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/4.png',
				},
				{
					url: 'https://api.adorable.io/avatars/285/5.png',
				},
			],
		};
	},
};
</script>
