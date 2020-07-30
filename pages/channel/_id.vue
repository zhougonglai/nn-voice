<template lang="pug">
LazyLoadView.h-full.z-10(:initFN="init")
  template(#loading)
    CircleLoader
  .flex-1 {{$route.params.id}}
</template>
<script>
export default {
	methods: {
		async init() {
			return true;
		},
	},
};
</script>
