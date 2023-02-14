<template>
	<div class="aside-tab-item">
		<div class="left">
			<img src="@/assets/images/猫和老鼠.png" alt="" />
			<div class="name">DC-BLOG</div>
		</div>
		<div class="right">1篇</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
@import "@/assets/css/variable.less";
.aside-tab-item {
	width: 100%;
	box-sizing: border-box;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	.left {
		display: flex;
		font-size: 14px;
		align-items: center;
		img {
			width: 40px;
			height: 40px;
			border-radius: 5px;
			margin-right: 5px;
		}
		.name {
			color: @first-color;
		}
	}
	.right {
		font-size: 12px;
		color: @text-color;
	}
}
</style>
