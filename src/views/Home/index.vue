<template>
	<div class="home-container" ref="wrapperRef">
		<BlogList :blog-list="blogList" />
		<loading-v2 v-if="isLoading" />
	</div>
</template>

<script lang="ts" setup>
import { watch, onUnmounted } from "vue"
import BlogList from "@/components/blog-list/index.vue"
import { storeToRefs } from "pinia"

import { useLazyLoad } from "@/hooks"
import { useHomeStore } from "@/store/home"
import LoadingV2 from "@/components/loading-v1.vue"
const { blogList } = storeToRefs(useHomeStore())

const { wrapperRef, isView, isLoading, cancelListener } = useLazyLoad(
	useHomeStore().getBlogList
)
isView()
watch(
	() => blogList,
	() => {
		useHomeStore().getBlogList()
	},
	{
		immediate: true,
	}
)

// 取消事件监听
onUnmounted(() => {
	cancelListener()
})
</script>

<style scoped lang="less">
.home-container {
	width: 68.4211vw;
	box-sizing: border-box;
	padding: 10px 20px;
	background-color: #fff;
	.pagination {
		margin: 20px 0 10px 0;
	}
}
</style>
