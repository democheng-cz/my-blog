<template>
  <div @mouseenter="clearTimer" @mouseleave="replayTimer">
    <div class="wrap">
      <div class="img_list" ref="imgRef">
        <img
          alt=""
          :style="{ width: width, height: height }"
          v-for="(img, index) in imgs"
          :key="index"
          :src="img"
        />
      </div>
    </div>
    <Transition name="fade">
      <div class="control" v-if="show">
        <!-- 上一页 -->
        <div class="pre" @click="toggle(-1, 1000)">
          <i class="iconfont icon-arrow1"></i>
        </div>
        <!-- 下一页 -->
        <div class="next" @click="toggle(1, 1000)">
          <i class="iconfont icon-arrow"></i>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref } from 'vue'
export default {
  props:{
    width:{
      type:String,
      default:"800px"
    },
    height:{
      type:String,
      default:"350px"
    }
  },
  setup(props){
    //  定义当前显示的图片下标
    const imgIndex = ref(0)
    const imgs = ref([])
    const imgRef = ref(null)
    const show = ref(false)
    const timer1 = ref()
    let last = 0
    const width = props.width.split("p")[0]
    imgs.value = ["http://html.cdsenyang.cn/1/demo2548/images/3.jpg","http://html.cdsenyang.cn/1/demo2548/images/1.jpg","http://html.cdsenyang.cn/1/demo2548/images/2.jpg"]

    const toggle = (step,delay)=>{

      // 函数防抖 : 只会执行最后一次,在定时器规定时间后执行
      // return function(){
      //   clearTimeout(timer1.value)
      //   timer1.value = setTimeout(() => {
      //     dome(step)
      //   }, 500);
      // }()

      // 函数节流 : 在一定时间内执行一次,可以是第一次,也可以是最后一次
      return function(){
        let time = Date.now()
        if(time-last>delay){
          dome(step)
          last = time
        }
      }()
    }

    // 切页操作
    function dome (step){

      let newIndex = imgIndex.value + step
      // console.log(newIndex* width);
      if(imgRef.value.style.transition){
        imgRef.value.style.transition = "1s"
      }
      if(newIndex>imgs.value.length -1){
        let timer
        imgIndex.value = 0
        imgs.value.push(imgs.value[0])
        imgRef.value.style.left = -(imgs.value.length-1) * width +"px"
        if(timer){
          clearTimeout(timer)
        }
        setTimeout(() => {
          imgRef.value.style.transition = "none"
          imgRef.value.style.left = 0
          imgs.value.pop()
        }, 1000);
      }else if(newIndex<0){
        let timer
        imgIndex.value = imgs.value.length-1
        imgs.value.unshift(imgs.value[imgs.value.length-1])
        imgRef.value.style.left = "0px"
        if(timer){
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          imgRef.value.style.left = -(imgs.value.length-2) * width +"px"
          imgRef.value.style.transition = "none"
          imgs.value.shift()
        }, 1000);
      }else{
        imgIndex.value = newIndex
        imgRef.value.style.left = -imgIndex.value * width +"px"
      }
    }

    // 自动切换
    let timer = setInterval(() => {
        toggle(1)
      }, 3000)

   // 当鼠标移入时,取消定时器,显示控制按钮
    const clearTimer = ()=>{
      clearInterval(timer)
      show.value = true
    }

    // // 当鼠标移出时,启动定时器
    const replayTimer = ()=>{
      timer = setInterval(() => {
        toggle(1)
      }, 1500)
      show.value = false
    }

    return {
      imgIndex,
      toggle,
      imgs,
      clearTimer,
      replayTimer,
      show,
      imgRef,
    }
  }

}
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  position: relative;
  overflow: hidden;
  .img_list {
    width: 100%;
    position: relative;
    left: 0;
    transition: all 1s;
    display: flex;
    img {
      background-size: cover;
      flex-shrink: 0;
    }
    .show {
      opacity: 1;
    }
  }
}
.control {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s inherit;
  z-index: 999;
  div {
    width: 60;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(-50%);
    .iconfont {
      font-size: 24px;
      color: #fff;
      line-height: 60px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// .fade {
//   animation: fade 1s;
//   opacity: 1;
// }
// @keyframes fade {
//   0% {
//     opacity: 0;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 1;
//   }
// }
</style>
