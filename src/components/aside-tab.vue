<template>
	<div class="aside-tab-container">
		<template v-for="i in 3" :key="i">
			<aside-tab-header />
			<aside-tab-item></aside-tab-item>
		</template>
	</div>
</template>

<script lang="ts" setup>
import asideTabItem from "./aside-tab-item.vue"
import asideTabHeader from "./aside-tab-header.vue"
</script>

<style scoped lang="less">
.aside-tab-container {
	height: 100%;
	background-color: #fff;
	margin-left: 10px;
	padding: 0 10px;
	overflow: hidden;
}
</style>
