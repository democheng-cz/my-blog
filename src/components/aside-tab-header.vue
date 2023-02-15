<template>
	<div class="header">
		<div class="name">{{ title }}</div>
		<div class="more">更多>></div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<style scoped lang="less">
@import "@/assets/css/variable.less";
.header {
	height: 40px;
	padding: 0 10px;
	align-items: center;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ddd;
	.more {
		font-size: 12px;
		color: @first-color;
	}
}
</style>
