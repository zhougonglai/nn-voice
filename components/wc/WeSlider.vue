<template lang="pug">
.weui-slider-box
  .weui-slider(ref="slider")
    .weui-slider__inner
      .weui-slider__track
      .weui-slider__handler
  .weui-slider-box__value
</template>
<script>
export default {
	props: {
		step: {
			type: Number,
			default: 1,
		},
		defaultValue: {
			type: Number,
			default: 0,
		},
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			window.weui.slider(this.$refs.slider, {
				step: this.step,
				defaultValue: this.defaultValue,
				onChange: percent => {
					this.$emit('change', percent);
				},
			});
		},
	},
};
</script>
