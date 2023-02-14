import { defineStore } from "pinia"
import { ref } from "vue"

import { reqGetBlogList, reqGetSysInfo } from "@/service/index"
export const useHomeStore = defineStore("homeStore", () => {
	const blogList = ref<Array<any>>([])

	const getBlogList = async function () {
		const res = await reqGetBlogList()
		console.log(res)
	}

	return {
		getBlogList,
	}
})
