<template lang="pug">
section.top-section
  .container
    .top-text
      h1 薄荷网游加速器
      p 千万游戏用户的长期之选
    .top-buttons
      button 立即免费使用
</template>
<script>
export default {
	name: 'TopSection',
};
</script>
<style lang="scss" scoped>
.top-section {
	background: linear-gradient(
		270deg,
		rgba(0, 254, 241, 1) 0%,
		rgba(0, 194, 135, 1) 100%
	);
	height: 100vh;
	display: flex;
	align-items: center;
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.top-text {
		text-align: center;
		color: var(--weui-FG-0);
		h1 {
			font-size: 42px;
			font-weight: bold;
		}
		p {
			font-size: 16px;
			line-height: 32px;
			margin: 22px 0 31px;
		}
	}
	.top-buttons {
		button {
			color: #9df1e5;
			background-color: #2b2d38;
			box-shadow: 0px 0px 20px 5px rgba(157, 241, 229, 0.7);
			border-radius: 3px;
			border: 1px solid rgba(157, 241, 229, 0.5);
			height: 50px;
			min-width: 160px;
			font-size: large;
		}
	}
}
</style>
