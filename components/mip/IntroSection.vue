<template lang="pug">
section.intro-section
  .container.h-screen.flex.flex-col.gap-1
    .mip-parts.flex-1.grid.grid-cols-2.grid-rows-2.gap-1
      .download.windows
        .download-logo
          mip-img(
            layout="fixed"
            width="25" height="25"
            :src="require('~/assets/img/platform_win.png')")
        .download-label Windwos
      .download.macos
        .download-logo
          mip-img(
            layout="fixed"
            width="25" height="25"
            :src="require('~/assets/img/platform-macos-light.png')")
        .download-label macOS
      .download.ios
        .download-logo
          mip-img(
            layout="fixed"
            width="25" height="25"
            :src="require('~/assets/img/platform-ios-light.png')")
        .download-label iOS
      .download.android
        .download-logo
          mip-img(
            layout="fixed"
            width="25" height="25"
            :src="require('~/assets/img/platform_android-light.png')")
        .download-label Android
    .mip-parts.flex-1.grid.grid-cols-2.grid-rows-2.gap-1
      .cover.game.flex.flex-col.justify-end
        h1 游戏
        p PC游戏、平台游戏、主机游戏、手机游戏全部支持
      .cover.music.flex.flex-col.justify-end
        h1 音乐
        p 网易云音乐、QQ音乐、酷狗音乐完美播放
      .cover.website.flex.flex-col.justify-end
        h1 网页
        p 支持海外用户贴吧、论坛、垂直社区回国加速服务
      .cover.video.flex.flex-col.justify-end
        h1 视频
        p 爱奇艺、优酷、腾讯视频全支持，随时随地嗨看欧洲杯
</template>
<style lang="scss" scoped>
@import '~/styles/mixin.scss';

.intro-section {
	min-height: 100vh;
	background-color: var(--weui-BG-0);
	color: var(--weui-FG-0);
	.download {
		background-color: var(--weui-BG-1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		@include border(#ccc, 2px, solid);
		&-label {
			margin-top: 16px;
		}
	}
	.cover {
		background-size: cover;
		padding: 10px;
		h1 {
			color: #9df1e5;
		}
		p {
			margin-top: 10px;
			color: var(--weui-BG-0);
		}
	}
	.game {
		background-image: url('~assets/img/cover-game.png');
	}
	.music {
		background-image: url('~assets/img/cover-music.png');
	}
	.website {
		background-image: url('~assets/img/cover-website.png');
	}
	.video {
		background-image: url('~assets/img/cover-video.png');
	}
}
</style>
