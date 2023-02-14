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
		<Footer />
	</div>
</template>

<script lang="ts" setup>
import TopHeader from "@/components/top-header.vue"
import asideTab from "@/components/aside-tab.vue"
import Footer from "@/components/footer.vue"
</script>

<style scoped lang="less">
.layout {
	width: 100%;
	height: 100%;
	.main {
		width: 1350px;
		margin: 0 auto;
		margin-top: 90px;
		display: flex;
		box-sizing: border-box;
		.aside {
			flex: 1;
		}
	}
}
</style>
