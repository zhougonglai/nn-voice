<template lang="pug">
.lazy-load-view(v-bind="$attrs")
  slot(v-if="!ready" name="loading")
  slot(v-else)
</template>
<script>
import CircleLoader from './CircleLoader';

export default {
	props: {
		// () => new Promise((resolve) => setTimeout(resolve, 0)),
		initFN: {
			type: Function,
			required: true,
		},
	},
	data() {
		return {
			ready: false,
		};
	},
	mounted() {
		this.initFN().then(this.initSlot);
	},
	methods: {
		initSlot() {
			this.ready = true;
		},
	},
};
</script>
<style lang="scss" scoped>
.lazy-load-view {
	width: 100%;
	height: 100%;
}
</style>
