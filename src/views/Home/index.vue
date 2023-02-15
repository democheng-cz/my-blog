<template>
	<div class="home-container">
		<BlogList :blog-list="blogList" :blog-total="blogTotal" />
	</div>
</template>

<script lang="ts" setup>
import BlogList from "@/components/blog-list/index.vue"
import { storeToRefs } from "pinia"

import { useHomeStore } from "@/store/home"
const { blogTotal, blogList } = storeToRefs(useHomeStore())
useHomeStore().getAllData()
</script>

<style scoped lang="less">
.home-container {
	width: 1040px;
	box-sizing: border-box;
	padding: 10px 20px;
	background-color: #fff;
	.pagination {
		margin: 20px 0 10px 0;
	}
}
</style>
