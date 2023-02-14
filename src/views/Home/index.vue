<template>
	<div class="home-container">
		<template v-if="blogList.length">
			<list-item-v1
				v-for="item in blogList"
				:key="item.categoryId"
				:item="item"
			></list-item-v1>
		</template>
		<div class="pagination">
			<el-pagination
				:total="blogTotal + 10"
				layout="prev, pager, next"
				@current-change="changePage"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import listItemV1 from "@/components/list-item-v1.vue"
import { useHomeStore } from "@/store/home"
const { blogTotal, blogList } = storeToRefs(useHomeStore())
useHomeStore().getBlogList()

// 当页码改变是
const changePage = function (newPage: number) {
	// console.log(newPage)
	useHomeStore().getBlogList(newPage)
}
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
