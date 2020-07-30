<template lang="pug">
.lazy-load-view(v-bind="$attrs")
  slot(v-if="!loading" name="loading")
  slot(v-else)
</template>
<script>
export default {
	props: {
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
		await this.initFN().then(this.initSlot);
	},
	methods: {
		initSlot(...args) {
			this.loading = true;
			this.$emit('rendered', { ...args });
		},
		async reloading(callback) {
			this.loading = false;
			await callback();
			this.loading = true;
		},
	},
};
</script>
