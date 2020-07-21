<template lang="pug" functional>
svg.loader(viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" v-bind="$attrs")
  circle(cx='12' cy='12' r="10")
</template>
<style lang="scss" scoped>
.loader {
  animation: rotate 2s linear infinite;
  color: darkgray;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.loader circle {
  fill: transparent;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
