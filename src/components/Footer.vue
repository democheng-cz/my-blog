<template>
	<div class="footer-container">
		<div class="info">
			<span>©2021-2023 www.wuhancoder.com All rights reserved. </span>
			<a href="https://beian.miit.gov.cn/">鄂ICP备13017512号-3</a>
		</div>
		<div class="beian">
			<img src="@/assets/images/beian.png" alt="" />
			<a
				href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502000890"
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
	height: 100%;
	// background-color: skyblue;
	// margin-top: -50px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	font-size: 12px;
	color: #939393;
	a {
		font-size: 14px;
		color: #939393;
	}
}
</style>
