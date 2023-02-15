import { defineStore } from "pinia"
import { ref } from "vue"
import { reqBlogDetail } from "@/service"
export const useBlogDetail = defineStore("blogDetail", function () {
	// 博客详情
	const blogDetail: any = ref(null)

	// 通过id获取博客详情
	const getBlogDetail = async function (id: string) {
		const res: any = await reqBlogDetail(id)
		// console.log(res)
		blogDetail.value = res
	}

	return {
		getBlogDetail,
		blogDetail,
	}
})
