<template>
	<div class="layout">
		<top-header />
		<div class="main">
			<div class="content">
				<router-view></router-view>
			</div>
			<div class="aside">
				<aside-tab></aside-tab>
			</div>
		</div>
		<div class="footer"><Footer /></div>
	</div>
</template>

<script lang="ts" setup>
import TopHeader from "@/components/top-header.vue"
import asideTab from "@/components/aside-tab.vue"
import Footer from "@/components/Footer.vue"
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
		.aside {
			// height: 100%;
			flex: 1;
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
