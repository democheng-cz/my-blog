<template>
	<div>
		<template v-if="blogList.length">
			<list-item-v1
				v-for="item in blogList"
				:key="item.categoryId"
				:item="item"
				@handle-get-blog-detail="getBlogDetailByID(item)"
			></list-item-v1>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import listItemV1 from "@/components/list-item-v1.vue"
import { useBlogDetail } from "@/store/blogDetail"
import { useHomeStore } from "@/store/home"

const router = useRouter()

const props = defineProps<{
	blogList: any[]
}>()

// 通过blogID获取博客的详情
const getBlogDetailByID = function (item: any) {
	useBlogDetail().getCurrentBlogDetail(item)
	useHomeStore().changeCurrentPath("/blog")
	router.push(`/blog/${item.blog_id}`)
}
</script>

<style scoped lang="less"></style>
