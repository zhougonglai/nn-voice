<template lang="pug">
.lazy-load-view(v-bind="$attrs")
  slot(v-if="!loading" name="loading")
  slot(v-else)
</template>
<script>
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
			loading: false,
		};
	},
	async mounted() {
		await this.initFN();
		this.initSlot();
	},
	methods: {
		initSlot() {
			this.loading = true;
		},
		async reloading(callback) {
			this.loading = false;
			await callback();
			this.loading = true;
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
