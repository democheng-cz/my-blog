import { defineStore } from "pinia"
import { ref } from "vue"
import { reqBlogDetail } from "@/service"
import DcCache from "@/utils/storage"
export const useBlogDetail = defineStore("blogDetail", function () {
	// 博客详情
	const currentBlogDetail: any = ref<any>(null)

	// 通过id获取博客详情
	const getCurrentBlogDetail = async function (blog: any) {
		try {
			currentBlogDetail.value = blog
			DcCache.setCache("currentBlogDetail", blog)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		getCurrentBlogDetail,
		currentBlogDetail,
	}
})
