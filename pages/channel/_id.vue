<template lang="pug">
LazyLoadView#channel(:initFN="init")
  template(#loading)
    CircleLoader
  .flex-1 {{$route.params.id}}
</template>
<script>
export default {
	name: 'channelRoom',
	methods: {
		async init() {
			return true;
		},
	},
};
</script>
<style lang="scss" scoped>
#channel {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 25vh;
	padding: 10px;
}
</style>
