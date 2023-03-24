import request from "./request"

// 获取博客列表
export const reqGetBlogList = (
	count: number,
	category_id?: null | string,
	pageSize = 10
) =>
	request.get({
		url: "/blog",
		params: { pageSize, category_id, count },
	})

// 获取热门blog
export const reqGetHotBlogList = (pageSize = 10) =>
	request.get({
		url: "/hotblog",
		params: { pageSize },
	})

//获取博客成员
export const reqGetUsers = () => {
	return request.get({
		url: "/user",
		params: { pageSize: 10 },
	})
}

// 获取博客详情
export const reqBlogDetail = (blog_id: string) => {
	return request.get({ url: "/blog/detail/:blog_id", params: { blog_id } })
}
