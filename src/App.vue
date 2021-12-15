<template>
  <div id="app" ref="appRef">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import { nextTick, provide, ref, onMounted } from "vue"
export default {
  name: "App",
  setup() {
    const appRef = ref(null)
    //解决刷新当前页面的问题
    const isRouterAlive = ref(true)
    provide("reload", () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    })

    // 点击出现文字特效
    const textArr = [
      ["富强", "#FF7F00"],
      ["民主", "#00FF00"],
      ["文明", "#7093DB"],
      ["和谐", "#9932CD"],
      ["自由", "#238E23"],
      ["平等", "#32CD32"],
      ["公正", "#7F00FF"],
      ["法治", "#EAEAAE"],
      ["爱国", "#FF6EC7"],
      ["敬业", "#EAADEA"],
      ["诚信", "#38B0DE"],
      ["友善", "#CC3299"],
    ]

    const fnTextPopup = (arr, options) => {
      if (!arr || !arr.length) {
        return ""
      }
      let index = 0
      document.documentElement.addEventListener("click", (e) => {
        let x = e.pageX
        let y = e.pageY
        let eleText = document.createElement("span") // 创建一个span标签
        eleText.className = "text-popup" // 给标签添加类名
        appRef.value.appendChild(eleText)
        if (arr[index]) {
          eleText.innerHTML = "❤" + arr[index][0] + "❤"
          eleText.style.color = arr[index][1]
        } else {
          index = 0
          eleText.innerHTML = "❤" + arr[index][0] + "❤"
          eleText.style.color = arr[index][1]
        }
        // 动画结束后删除自己
        eleText.addEventListener("animationend", (e) => {
          eleText.parentNode.removeChild(eleText)
        })
        // 位置
        eleText.style.left = x - eleText.clientWidth / 2 + "px"
        eleText.style.top = y - eleText.clientHeight / 2 + "px"
        index++
      })
    }

    onMounted(() => {
      // 等页面渲染完成以后再操作dom
      fnTextPopup(textArr)
    })

    return {
      isRouterAlive,
      appRef,
    }
  },
}
</script>

<style></style>
