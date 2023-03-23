<template>
	<div class="list-item-v1">
		<div class="left">
			<img class="cover" :src="item.cover" alt="" />
		</div>
		<div class="right">
			<div class="title" @click="getBlogDetail(item.blogId)">
				{{ item.title }}
			</div>
			<div class="desc">
				{{ item.desc }}
			</div>
			<div class="info">
				<div class="time">{{ timeFormat(item.update_time) }}</div>
				<div class="user">
					<span>作者:</span>
					<a class="name" href="#">{{ item.user_name || "佚名" }}</a>
				</div>
				<div class="category">
					<span>分类专栏:</span>
					<a href="#" class="name">{{ item.categoryName }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { timeFormat } from "@/utils/timeFormat"
const props = withDefaults(
	defineProps<{
		item: any
	}>(),
	{
		item: () => ({}),
	}
)

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
