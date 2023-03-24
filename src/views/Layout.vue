<template>
	<div class="layout1">
		<top-header />
		<div class="main min-h-full" ref="wrapperRef">
			<div class="content pb-10 bg-white mb-10">
				<router-view></router-view>
			</div>
			<div class="aside lg:hidden pl-4 pr-4">
				<!-- 博客用户 -->
				<aside-tab
					v-if="asideUserList?.length"
					name="user"
					:data="asideUserList"
					title="博客用户"
				></aside-tab>
				<!-- 热门文章 -->
				<aside-tab
					v-if="asideHotBlogList?.length"
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
import TopHeader from "@/components/top-header.vue"
import asideTab from "@/components/aside-tab.vue"
import Footer from "@/components/Footer.vue"
import { useAsideData } from "@/hooks"

const { asideHotBlogList, asideUserList, getAllData } = useAsideData()

getAllData()
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
