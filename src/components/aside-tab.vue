<template>
	<div class="aside-tab-container">
		<template v-for="item in data" :key="item.title">
			<aside-tab-header :title="item.title" />
			<template v-for="i in item.data" :key="i.categoryId">
				<aside-tab-item :item="i"></aside-tab-item>
			</template>
		</template>
	</div>
</template>

<script lang="ts" setup>
import asideTabItem from "./aside-tab-item.vue"
import asideTabHeader from "./aside-tab-header.vue"

interface PropsType {
	data: any[]
}
withDefaults(defineProps<PropsType>(), {
	data: () => [],
})
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
