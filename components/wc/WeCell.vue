<template lang="pug">
.weui-cell(v-bind="$attrs" v-on="listeners")
  .weui-cell__hd(v-if="$slots.header" @click.stop.prevent="preClick")
    slot(name="header")
  .weui-cell__bd
    slot
  .weui-cell__ft(v-if="$slots.footer" @click.stop.prevent="sufClick")
    slot(name="footer")
</template>
<script>
export default {
	computed: {
		listeners() {
			return {
				...this.$listeners,
				click: event => this.handleClick(event),
			};
		},
	},
	methods: {
		handleClick(event) {
			this.$emit('click', event);
		},
		preClick(event) {
			this.$emit('preClick', event);
		},
		sufClick(event) {
			this.$emit('sufClick', event);
		},
	},
};
</script>
