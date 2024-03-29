import type { RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [
	{
		path: "/home",
		component: () => import("@/views/home/index.vue"),
	},
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/category",
		component: () => import("@/views/category/index.vue"),
	},
	{
		path: "/topic",
		component: () => import("@/views/topic/index.vue"),
	},
	{
		path: "/user",
		component: () => import("@/views/user/index.vue"),
	},
	{
		path: "/user/:id",
		component: () => import("@/views/user/index.vue"),
	},
	{
		path: "/message",
		component: () => import("@/views/message/index.vue"),
	},
	{
		path: "/blog/:id",
		component: () => import("@/views/blog-detail/index.vue"),
	},
	{
		path: "/category/:id",
		component: () => import("@/views/category/category-list.vue"),
	},
	{
		path: "/topic/:id",
		component: () => import("@/views/topic-detail/index.vue"),
	},
]

export default routes
