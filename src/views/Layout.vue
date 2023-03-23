<template>
	<div class="layout1">
		<top-header />
		<div class="main min-h-full">
			<div class="content pb-10 bg-white mb-10">
				<router-view></router-view>
			</div>
			<div class="aside lg:hidden pl-4 pr-4">
				<!-- 博客用户 -->
				<aside-tab
					v-if="asideUserList.length"
					name="user"
					:data="asideUserList"
					title="博客用户"
				></aside-tab>
				<!-- 热门文章 -->
				<aside-tab
					v-if="asideHotBlogList.length"
					name="hotBlog"
					:data="asideHotBlogList"
					title="热门文章"
				></aside-tab>
			</div>
		</div>
		<div class="footer"><Footer /></div>
	</div>
</template>

<script lang="ts" setup>
import { watchEffect, computed, watch } from "vue"
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"
import DcCache from "@/utils/storage"

import TopHeader from "@/components/top-header.vue"
import asideTab from "@/components/aside-tab.vue"
import Footer from "@/components/Footer.vue"

import { useAsideData } from "@/hooks"

// const { asideUserList, asideHotBlogList } = storeToRefs(useHomeStore())

const { asideHotBlogList, asideUserList } = useAsideData()
// const asideDataComputed = computed(() => {
// 	return { asideUserList, asideHotBlogList }
// })

// watch(
// 	() => asideDataComputed.value,
// 	newVal => {
// 		if (
// 			!newVal.asideHotBlogList.value?.length ||
// 			!newVal.asideUserList.value?.length
// 		) {
// 			console.log("first")
// 			newVal.asideHotBlogList.value = DcCache.getCache("asideHotBlogList")
// 			newVal.asideUserList.value = DcCache.getCache("asideUserList")
// 		}
// 		console.log(newVal.asideHotBlogList.value)
// 	},
// 	{
// 		deep: true,
// 		immediate: true,
// 	}
// )
</script>

<style scoped lang="less">
.layout1 {
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 100px;
	.main {
		width: 90%;
		min-height: 50%;
		margin: 0 auto;
		display: flex;
		flex: 1;
		.content {
			flex: 4;
		}
		.aside {
			flex: 1;
		}
	}
	.footer {
		width: 100%;
		margin-top: auto;
	}
}
</style>
