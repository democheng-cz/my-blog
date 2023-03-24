<template>
	<div class="aside-tab-item" @click="handleEnterDetail()">
		<div class="left">
			<img
				:src="item.avatar || item.cover || defaultImg"
				alt=""
				@error="handleError"
			/>
			<div class="name text-xs ml-2">{{ item.nick_name || item.title }}</div>
		</div>
		<div class="right" v-if="item.blogCount">{{ item.blogCount || "" }}篇</div>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"

import { useHomeStore } from "@/store/home"

import { useBlogDetail } from "@/store/blogDetail"
import defaultImg from "@/assets/images/猫和老鼠.png"

const router = useRouter()

const props = withDefaults(
	defineProps<{
		item: any
		name: string
	}>(),
	{
		item: () => ({}),
	}
)

const handleEnterDetail = () => {
	switch (props.name) {
		case "user":
			useHomeStore().saveCurrentUser([props.item])
			useHomeStore().changeCurrentPath("/user")
			router.push(`/user/${props.item.user_id}`)
			break
		case "hotBlog":
			useBlogDetail().getCurrentBlogDetail(props.item)
			useHomeStore().changeCurrentPath("/blog")
			router.push(`/blog/${props.item.blog_id}`)
	}
}

const handleError = (e: any) => {
	e.target.src = defaultImg
}
</script>

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
			object-fit: cover;
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
