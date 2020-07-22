<template lang="pug">
.weui-cell(v-bind="$attrs")
  .weui-cell__hd(v-if="$slots.header")
    slot(name="header")
  .weui-cell__bd
    slot
  .weui-cell__ft(v-if="$slots.footer")
    slot(name="footer")
</template>
