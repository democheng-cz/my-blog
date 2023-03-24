<template>
	<div class="list-item-v1">
		<div class="left">
			<img
				class="cover"
				:src="item.cover || defaultImg"
				alt=""
				@error="handleError"
			/>
		</div>
		<div class="right">
			<div class="title" @click="getBlogDetail(item.blogId)">
				{{ item.title }}
			</div>
			<div class="desc">
				{{ item.desc }}
			</div>
			<div class="info flex">
				<!-- <div class="time flex items-center"> -->
				<!-- <span>{{ timeFormat(item.update_time) }}</span> -->
				<!-- </div> -->
				<div class="text-xs flex items-center align-middle">
					{{ timeFormat(item.update_time) }}
				</div>
				<div class="user flex items-center">
					<span>作者:</span>
					<span class="name" href="#">{{ item.user_name || "佚名" }}</span>
				</div>
				<div class="category flex items-center">
					<span>分类专栏:</span>
					<span class="name">{{ item.categoryName }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { timeFormat } from "@/utils/timeFormat"
import defaultImg from "@/assets/images/猫和老鼠.png"
import { handleError } from "vue"
const props = withDefaults(
	defineProps<{
		item: any
	}>(),
	{
		item: () => ({}),
	}
)

const handleError = (e: any) => {
	e.target.src = defaultImg
}

const emit = defineEmits(["handleGetBlogDetail"])

const getBlogDetail = function (blogId: string) {
	emit("handleGetBlogDetail", blogId)
}
</script>

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
			object-fit: cover;
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
			cursor: pointer;
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
			color: #5f6471;
			.time {
				height: 100%;
				font-size: 12px;
				color: #5f6471;
			}
			.user {
				margin: 0 15px;
			}
			.name {
				margin: 0 0 0 5px;
				color: #1890ff;
				font-size: 14px;
			}
			span {
				font-size: 12px;
				color: #5f6471;
			}
		}
	}
}
</style>
