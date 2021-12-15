<template>
  <div class="container">
    <div class="card">
      <p>
        <span>现在是{{ time.curTime }}, 星期{{ numChar[time.today] }}.</span>
        <br />
        <span v-if="time.today < 5 && time.today > 0"
          >在上班的同时,不要忘了摸鱼喔~~,对自己好一点~</span
        >
        <span v-else>结束了一周的工作,要好好休息放松喔,祝您周末愉快!!</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reactive, ref} from 'vue'
export default {
  setup(){
    const time = reactive({
      curTime:'',
      today:'',
      month:'',
      year:''
    })
    const numChar = ["天",'一',"二","三","四","五","六"]

    let date = new Date()
    // 获取当前是一周中的第几天
    time.today = date.getDay()
    // 获取当前月份
    time.month = date.getMonth()+1
    // 获取当前年份
    time.year = date.getFullYear()
    let now_time = date.toLocaleString().split('/')
    now_time.map((item,index)=> {
      if(index >=2) time.curTime += item
      else time.curTime += item+"-"
      }
    )
    return{
      time,
      numChar
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 310px;
  height: 150px;
  background-color: #fff;
  margin: 30px 0 0 30px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 6px;
  .card {
    p {
      color: #00ffff;
    }
  }
}
</style>
