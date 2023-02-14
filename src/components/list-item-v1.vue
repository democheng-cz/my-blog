<template>
	<div class="list-item-v1">
		<div class="left">
			<img class="cover" src="@/assets/images/猫和老鼠.png" alt="" />
		</div>
		<div class="right">
			<div class="title">vue3切换风格</div>
			<div class="desc">
				我们想要实现风格切换，基本思路就是定制一套基本的样式，然后不同的风格，我们使用不同的颜色，通过最外层添加clas选择器来进行覆盖，达到切换风格效果。
				我们想要实现风格切换，基本思路就是定制一套基本的样式，然后不同的风格，我们使用不同的颜色，通过最外层添加clas选择器来进行覆盖，达到切换风格效果。
				我们想要实现风格切换，基本思路就是定制一套基本的样式，然后不同的风格，我们使用不同的颜色，通过最外层添加clas选择器来进行覆盖，达到切换风格效果。
				我们想要实现风格切换，基本思路就是定制一套基本的样式，然后不同的风格，我们使用不同的颜色，通过最外层添加clas选择器来进行覆盖，达到切换风格效果。
			</div>
			<div class="info">
				<div class="time">2023-02-10 03:55:23</div>
				<div class="user">
					<span>作者:</span>
					<a class="name" href="#">democheng</a>
				</div>
				<div class="category">
					<span>分类专栏:</span>
					<a href="#" class="name">Vue3</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
@import "@/assets/css/variable.less";
.list-item-v1 {
	width: 100%;
	height: 100%;
	border-bottom: 1px solid #ddd;
	display: flex;
	padding: 10px 0;
	.left {
		margin-right: 15px;
		.cover {
			width: 110px;
			height: 110px;
			border-radius: 5px;
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title {
			color: @first-color;
			font-size: 18px;
			// margin: 5px 0;
		}
		.desc {
			font-size: 14px;
			color: @text-color;
			margin: 15px 0;
			text-overflow: ellipsis;
			overflow: hidden;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			display: -webkit-box;
		}
		.info {
			display: flex;
			align-items: center;
			.time {
				font-size: 12px;
				color: #5f6471;
			}
			.user {
				margin: 0 15px;
			}
			.name {
				margin: 0 0 0 5px;
			}
			span {
				font-size: 12px;
				color: #5f6471;
			}
		}
	}
}
</style>
