import { defineStore } from "pinia"
import { ref } from "vue"

import {
	reqGetBlogList,
	reqGetSysInfo,
	reqGetCategory,
	reqGetTopicList,
} from "@/service/index"
export const useHomeStore = defineStore("homeStore", () => {
	// 博客列表数据
	const blogList = ref<Array<any>>([])
	// 博客列表总数据
	const blogTotal = ref<number>(0)

	const pageNo = ref<number>(1)

	// 侧边栏数据
	const asideData = ref<Array<any>>([])

	// 专栏分类列表
	const categoryList = ref<Array<any>>([])

	// 专题列表
	const topicList = ref<Array<any>>([])
	// 获取博客列表
	const getBlogList = async function (
		pageNo?: number,
		// pageSize: number,
		categoryId?: null | string
	) {
		const res: any = await reqGetBlogList(pageNo, categoryId)
		blogList.value = new Array(10).fill(res.list[0])
		// blogList.value = res.list
		blogTotal.value = res.totalCount

		// 获取专栏分类列表
		const resCategory: any = await reqGetCategory()
		// console.log(resCategory)
		categoryList.value = new Array(10).fill(resCategory[0])

		// 获取专题列表
		const resTopic: any = await reqGetTopicList()
		console.log(resTopic)
		topicList.value = new Array(10).fill(resTopic.list[0])
		// asideData
		getAllAsideData(categoryList.value, topicList.value)
	}

	const getAllAsideData = function (
		categoryList: any[],
		topicList?: any,
		userList?: any
	) {
		if (categoryList) {
			asideData.value.push({ title: "专栏分类", data: categoryList })
			console.log("first")
			console.log(topicList)
		}
		if (userList) {
			asideData.value.push({ title: "博客成员", data: userList })
		}
		if (topicList) {
			console.log("first333")
			asideData.value.push({ title: "专题", data: topicList })
		}
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
		categoryList,
		topicList,
		getAllAsideData,
		asideData,
	}
})
