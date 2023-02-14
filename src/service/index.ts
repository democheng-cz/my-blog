import request from "./request"

// 获取博客列表
export const reqGetBlogList = (
	pageNo?: number,
	categoryId?: null | string,
	pageSize = 10
) =>
	request.get({
		url: "/api/view/loadBlogList",
		params: { pageSize, pageNo, categoryId },
	})

// 获取专题分类
export const reqGetCategory = () => {
	return request.get({
		url: "/api/view/loadCategory",
		params: { pageSize: 10 },
	})
}

//获取博客成员
export const reqGetUsers = () => {
	return request.get({
		url: "/api/view/loadTeamUser",
		params: { pageSize: 10 },
	})
}

// 获取专题列表
export const reqGetTopicList = () => {
	return request.get({
		url: "/api/view/loadSpecial",
		params: { pageNo: 1, pageSize: 15 },
	})
}

// 获取系统信息
export const reqGetSysInfo = () => {
	return request.get({ url: "/api/view/getSysInfo" })
}
