<template>
	<div class="home-container">
		<template v-if="blogList.length">
			<list-item-v1
				v-for="item in blogList"
				:key="item.categoryId"
				:item="item"
				@handle-get-blog-detail="getBlogDetailByID"
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
import { useRouter } from "vue-router"
import listItemV1 from "@/components/list-item-v1.vue"
import { useHomeStore } from "@/store/home"
import { useBlogDetail } from "@/store/blogDetail"

const { blogTotal, blogList } = storeToRefs(useHomeStore())
const { blogDetail } = storeToRefs(useBlogDetail())
const router = useRouter()
useHomeStore().getBlogList()

// 当页码改变是
const changePage = function (newPage: number) {
	// console.log(newPage)
	useHomeStore().getBlogList(newPage)
}

// 通过blogID获取博客的详情
const getBlogDetailByID = function (id: string) {
	console.log(id)
	useBlogDetail().getBlogDetail(id)
	if (blogDetail) {
		router.push(`/blog/${id}`)
	}
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
