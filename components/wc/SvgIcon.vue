<template lang="pug">
svg.iconfont(aria-hidden=true)
  use(:xlink:href="className")
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    className: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
