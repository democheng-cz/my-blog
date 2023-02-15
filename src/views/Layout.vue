<template>
	<div class="layout">
		<top-header />
		<div class="main">
			<div class="content">
				<router-view></router-view>
			</div>
			<div
				class="aside"
				v-if="route.path === '/home' || /^\/category\/\d+/.test(route.path)"
			>
				<aside-tab :data="asideData"></aside-tab>
			</div>
		</div>
		<div class="footer"><Footer /></div>
	</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"

import TopHeader from "@/components/top-header.vue"
import asideTab from "@/components/aside-tab.vue"
import Footer from "@/components/Footer.vue"

const { asideData } = storeToRefs(useHomeStore())
const route = useRoute()

// const rex = /^\/category\/\d+/
// console.log(rex.test("/home"))
// console.log(rex.test("/category/1"))
// console.log(route.path)
</script>

<style scoped lang="less">
.layout {
	width: 100%;
	height: auto;
	min-height: 87%;
	// box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding-top: 90px;

	.main {
		width: 1350px;
		// height: 100%;
		// min-height: 70%;
		margin: 0 auto;
		display: flex;
		// box-sizing: border-box;
		flex: 1;
		.content {
			// width: 100%;
			// width: 1040px;
			flex: 1;
		}
		.aside {
			// height: 100%;
			// flex: 1;
			width: 310px;
		}
	}
	.footer {
		width: 100%;
		height: 60px;
		margin-top: 20px;
		// margin-bottom: 100px;
	}
}
</style>
