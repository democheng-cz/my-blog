<template>
	<div>
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
import { useBlogDetail } from "@/store/blogDetail"
import { useHomeStore } from "@/store/home"

const { blogDetail } = storeToRefs(useBlogDetail())
const router = useRouter()

const props = defineProps<{
	blogList: any[]
	blogTotal: number
}>()

console.log(props.blogList)
// 当页码改变是
const changePage = function (newPage: number) {
	// console.log(newPage)
	useHomeStore().getBlogList()
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

<style scoped lang="less"></style>
