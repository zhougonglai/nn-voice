<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
  template(#loading)
    PageHold
  nuxt
</template>
<script>
import LazyLocadView from '@/components/wc/LazyLoadView';
import PageHold from '@/components/container/PageHold';

export default {
	name: 'AMPLayout',
	components: {
		LazyLocadView,
		PageHold,
	},
	methods: {
		async init() {
			return true;
		},
	},
	head() {
		return {
			htmlAttrs: {
				lang: 'en',
				amp: true,
			},
			bodyAttrs: {
				class: ['mobile'],
			},
			link: [
				{
					rel: 'stylesheet',
					href: 'https://c.mipcdn.com/static/v2/mip.css',
				},
			],
			script: [
				{
					src: 'https://c.mipcdn.com/static/v2/mip.js',
					body: true,
				},
			],
		};
	},
};
</script>
<style amp-boilerplate>
body {
	-webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
	-moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
	-ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
	animation: -amp-start 8s steps(1, end) 0s 1 normal both;
}
@-webkit-keyframes -amp-start {
	from {
		visibility: hidden;
	}
	to {
		visibility: visible;
	}
}
@-moz-keyframes -amp-start {
	from {
		visibility: hidden;
	}
	to {
		visibility: visible;
	}
}
@-ms-keyframes -amp-start {
	from {
		visibility: hidden;
	}
	to {
		visibility: visible;
	}
}
@-o-keyframes -amp-start {
	from {
		visibility: hidden;
	}
	to {
		visibility: visible;
	}
}
@keyframes -amp-start {
	from {
		visibility: hidden;
	}
	to {
		visibility: visible;
	}
}
</style>
