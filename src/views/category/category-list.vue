<template>
	<div class="category-list-container">
		<div class="top">
			<category-item
				:item="currentCategory || DcCache.getCache('currentCategory')"
				:has-border="false"
				width="100%"
			/>
		</div>
		<div class="content">
			<blog-list
				:blog-list="blogList.length ? blogList : DcCache.getCache('blogList')"
				:blog-total="blogTotal || DcCache.getCache('blogTotal')"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BlogList from "@/components/blog-list/index.vue"
import categoryItem from "@/components/category-item.vue"
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"
import DcCache from "@/utils/storage"

const { currentCategory, blogList, blogTotal, categoryList } = storeToRefs(
	useHomeStore()
)
// useHomeStore().getAllAsideData()
// categoryList.value.length || useHomeStore().blogList()
</script>

<style scoped lang="less">
.category-list-container {
	width: 100%;
	.top {
		width: 100%;
		background-color: #fff;
		margin-bottom: 20px;
	}
	.content {
		padding: 10px 20px;
		background: #fff;
	}
}
</style>
