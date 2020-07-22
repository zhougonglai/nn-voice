<template lang="pug">
.weui-panel(v-bind="$attrs")
  .weui-panel__hd(v-if="$slots.header")
    slot(name="header")
  .weui-media__bd
    slot
  .weui-panel__ft(v-if="$slots.footer")
    slot(name="footer")
</template>
