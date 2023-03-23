<template>
	<div class="top-header">
		<div class="content">
			<div class="title">
				<h2>dc-blog</h2>
			</div>
			<ul class="list">
				<li
					v-for="item in list"
					:key="item.id"
					:class="{
						active:
							(currentPath || DcCache.getCache('currentPath')) === item.path,
					}"
					@click="changeIndex(item.path)"
				>
					<span>{{ item.name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"
import DcCache from "@/utils/storage"

const { currentPath } = storeToRefs(useHomeStore())
const router = useRouter()
const list = [
	{ name: "博客", id: 1, path: "/home" },
	// { name: "分类专栏", id: 2, path: "/category" },
	// { name: "专题", id: 3, path: "/topic" },
	{ name: "成员", id: 4, path: "/user" },
	{ name: "留言板", id: 5, path: "/message" },
]

const changeIndex = (path: string) => {
	// activePath.value = path
	useHomeStore().changeCurrentPath(path)
	// console.log(path)
	// 跳转路由
	router.push(path)
}
</script>

<style scoped lang="less">
.top-header {
	width: 100%;
	height: 80px;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	box-shadow: 1px 2px 0px #ccc;
	.content {
		width: 90%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		.title {
			color: #1890ff;
			font-size: 25px;
			margin-right: 50px;
		}
		.list {
			display: flex;
			li {
				padding: 0 15px;
				cursor: pointer;
				&:hover {
					color: #c94646;
				}
				&.active {
					color: #c94646;
				}
			}
		}
	}
}
</style>
