<template>
	<div
		class="footer-container w-full bg-blue-400 pb-2 pt-2 flex justify-center items-center flex-col text-gray-300"
	>
		<div class="info">
			<span>©2021-2023 www.wuhancoder.com All rights reserved. </span>
			<a href="https://beian.miit.gov.cn/" class="text-gray-300"
				>鄂ICP备13017512号-3</a
			>
		</div>
		<div class="beian">
			<img src="@/assets/images/beian.png" alt="" />
			<a
				href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502000890"
				class="text-gray-300"
			>
				鄂公网安备 42011502000890号
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.footer-container {
	width: 100%;
	font-size: 12px;
	// color: #939393;
	a {
		font-size: 14px;
	}
}
</style>
