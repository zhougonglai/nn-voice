<template lang="pug">
.weui-tab
  .weui-tab__panel
    slot
  .weui-tabbar
    .weui-tabbar__item
      img.weui-tabbar__icon(src="https://weui.io/images/icon_tabbar.png" alt="")
      .weui-tabbar__label 通讯录
    .weui-tabbar__item
      img.weui-tabbar__icon(src="https://weui.io/images/icon_tabbar.png" alt="")
      .weui-tabbar__label 通讯录
    .weui-tabbar__item
      img.weui-tabbar__icon(src="https://weui.io/images/icon_tabbar.png" alt="")
      .weui-tabbar__label 通讯录
</template>
