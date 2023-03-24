import { defineStore } from "pinia"
import { ref } from "vue"
import type { BlogItemType, CategoryItemType, TopicItemType } from "./types"
import { dcCache } from "@/utils/storage"
import {
	reqGetBlogList,
	reqGetUsers,
	reqGetHotBlogList,
	reqBlogDetail,
} from "@/service/index"

export const useHomeStore = defineStore("homeStore", () => {
	// 博客列表数据
	const blogList = ref<Array<BlogItemType>>([])
	const pageNo = ref<number>(1)
	const blogListCount = ref<number>(0)

	// 侧边栏数据(用户列表)
	const asideUserList = ref<Array<any>>([])

	// 侧边栏数据(热门文章列表)
	const asideHotBlogList = ref<Array<any>>([])

	// 专栏分类列表
	const categoryList = ref<Array<CategoryItemType>>([])

	// 当前路由路径
	const currentPath = ref<string>("")

	// 获取博客列表
	const getBlogList = async function (
		// pageNo?: number,
		category_id?: null | string
	) {
		if (
			blogListCount.value === 0 ||
			blogList.value.length < blogListCount.value
		) {
			const res: any = await reqGetBlogList(blogList.value.length, category_id)
			blogList.value.push(...res.result.data)
			blogListCount.value = res.result.total
			// console.log(res.result.data)
		}
	}

	// 获取热门blog
	const getHotBlogList = async function () {
		const res: any = await reqGetHotBlogList()
		asideHotBlogList.value = res.result.data.splice(0, 5)
		dcCache.setCache("asideHotBlogList", asideHotBlogList.value)
	}

	// 获取所有的用户
	const getUser = async function () {
		const res: any = await reqGetUsers()
		if (res.status === 200) {
			asideUserList.value = res.result.data
			dcCache.setCache("asideUserList", asideUserList.value)
		}
	}

	// 获取所有数据
	const getAllData = async function () {
		await getBlogList()
		await getUser()
		await getHotBlogList()
	}

	// 保存并修改currentPath
	const changeCurrentPath = function (path: string) {
		currentPath.value = path
		dcCache.setCache("currentPath", path)
	}

	// 持久化当前需要展示的blog
	const saveCurrentBlogInfo = function (blogInfo: any) {
		dcCache.setCache("currentBlog", blogInfo)
	}

	// 持久化当前需要展示的user
	const saveCurrentUser = function (user: any) {
		dcCache.setCache("currentUser", user)
	}

	return {
		getBlogList,
		blogList,
		categoryList,
		asideUserList,
		getAllData,
		currentPath,
		changeCurrentPath,
		getHotBlogList,
		asideHotBlogList,
		saveCurrentBlogInfo,
		saveCurrentUser,
		blogListCount,
		getUser,
	}
})
