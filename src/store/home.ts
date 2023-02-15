import { defineStore } from "pinia"
import { ref } from "vue"

import dcCache from "@/utils/storage"
import {
	reqGetBlogList,
	// reqGetSysInfo,
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

	// 当前选中的专栏分类
	const currentCategory: any = ref(null)

	// 当前路由路径
	const currentPath = ref<string>("")

	// 获取博客列表
	const getBlogList = async function (
		// pageNo?: number,
		categoryId?: null | string
	) {
		const res: any = await reqGetBlogList(pageNo.value, categoryId)
		blogList.value = new Array(10).fill(res.list[0])
		// blogList.value = res.list
		blogTotal.value = res.totalCount
		dcCache.setCache("blogList", blogList.value)
		dcCache.setCache("blogTotal", blogTotal.value)
	}

	// 获取专栏分类列表
	const getCategoryList = async function () {
		const resCategory: any = await reqGetCategory()
		// console.log(resCategory)
		categoryList.value = new Array(10).fill(resCategory[0])
		getAllAsideData(categoryList.value)
		dcCache.setCache("categoryList", categoryList.value)
		// dcCache.setCache("blogTotal", blogTotal.value)
	}

	// 获取专题列表
	const getTopicList = async function () {
		// 获取专题列表
		const resTopic: any = await reqGetTopicList()
		// console.log(resTopic)
		topicList.value = new Array(10).fill(resTopic.list[0])
	}

	// 获取所有数据
	const getAllData = async function () {
		await getBlogList()
		await getCategoryList()
		await getTopicList()
		// asideData
		getAllAsideData(categoryList.value, topicList.value)
	}

	const getAllAsideData = function (
		categoryList: any[],
		topicList?: any,
		userList?: any
	) {
		// console.log("first")
		asideData.value = []
		if (categoryList) {
			asideData.value.push({
				title: "专栏分类",
				data: categoryList.slice(0, 5),
			})
		}
		if (userList) {
			asideData.value.push({ title: "博客成员", data: userList.slice(0, 5) })
		}
		if (topicList) {
			asideData.value.push({ title: "专题", data: topicList.slice(0, 5) })
		}
		dcCache.setCache("asideData", asideData.value)
	}

	// 修改当前页数
	const changePageNo = function (newPage: number) {
		pageNo.value = newPage
		getBlogList()
	}

	// 修改currentCategory
	const changeCurrentCategory = async function (item: any) {
		currentCategory.value = item
		// console.log(item)
		// console.log(item.categoryId)
		dcCache.setCache("currentCategory", currentCategory.value)
		await getBlogList(item.categoryId)
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
		getCategoryList,
		getTopicList,
		getAllData,
		changeCurrentCategory,
		currentCategory,
		currentPath,
	}
})
