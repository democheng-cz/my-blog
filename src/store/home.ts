import { defineStore } from "pinia"
import { ref } from "vue"

import { reqGetBlogList, reqGetSysInfo } from "@/service/index"
export const useHomeStore = defineStore("homeStore", () => {
	const blogList = ref<Array<any>>([])
	const blogTotal = ref<number>(0)
	const pageNo = ref<number>(1)

	// 获取博客列表
	const getBlogList = async function (
		pageNo?: number,
		// pageSize: number,
		categoryId?: null | string
	) {
		const res: any = await reqGetBlogList(pageNo, categoryId)
		blogList.value = new Array(5).fill(res.list[0])
		// blogList.value = res.list
		// console.log(new Array(10).fill(res.list[0]))
		blogTotal.value = res.totalCount
		console.log(res)
	}

	// 修改当前页数
	const changePageNo = function (newPage: number) {
		// pageNo.value = newPage
		getBlogList(newPage)
	}

	return {
		getBlogList,
		blogList,
		blogTotal,
		changePageNo,
	}
})
