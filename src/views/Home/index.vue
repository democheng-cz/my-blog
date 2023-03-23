<template>
	<div class="home-container">
		<BlogList :blog-list="blogList" />
	</div>
</template>

<script lang="ts" setup>
import { watch } from "vue"
import BlogList from "@/components/blog-list/index.vue"
import { storeToRefs } from "pinia"

import { useHomeStore } from "@/store/home"
const { blogList } = storeToRefs(useHomeStore())

watch(
	() => blogList,
	() => {
		console.log()
		console.log("first")
		useHomeStore().getAllData()
	},
	{
		immediate: true,
	}
)
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
