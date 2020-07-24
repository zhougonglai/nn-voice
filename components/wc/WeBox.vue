<template lang="pug">
.weui-media-box(v-bind="$attrs" v-on="listeners" :class="{'has_dot': hasDot}")
  .weui-media-box__hd(v-if="$slots.header")
    slot(name="header")
    //- weui-media-box__thumb
  .weui-media-box__bd
    slot(v-if="$slots.default")
    template(v-else)
      .weui-media-box__title(v-text="title")
      .weui-media-box__desc(v-text="desc")
  .weui-media-box__ft(v-if="$slots.footer")
    slot(name="footer")
</template>
<script>
export default {
	props: {
		title: [String, Number],
		desc: [String, Number],
		hasDot: Boolean,
	},
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
	},
};
</script>
<style lang="scss">
.weui-media-box {
	&.has_dot {
		.weui-media-box__hd {
			position: relative;
			.weui-badge {
				position: absolute;
				top: 4px;
				right: 4px;
			}
		}
	}
}
</style>
