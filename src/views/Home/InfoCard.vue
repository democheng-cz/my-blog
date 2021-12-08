<template>
  <div id="info-container">
    <div class="card">
      <h1>我的名片</h1>
      <div class="info">
        <p>网名：Jerry</p>
        <p>职业：Web前端工程师</p>
        <p>电话：XXX</p>
        <p>Email：XXX</p>
      </div>
      <div class="link-more">
        <a class="talk" title="给我留言"><i class="iconfont icon-xinxi"></i></a>
        <a class="address" title="联系地址"
          ><i class="iconfont icon-home"></i
        ></a>
        <a class="heart" title="关注我"
          ><i class="iconfont icon-a-lujing350"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="less">
#info-container {
  margin: 30px 0 0 20px;
  background: url("../../assets/images/quote-bg.png") no-repeat top right;
  border-radius: 8px;
  padding-left: 10px;
  box-sizing: border-box;
  width: 350px;
  height: 250px;
  color: #999;
  background-color: #fff;
  box-shadow: -5px 5px 20px #ccc;
  h1 {
    margin-top: 20px;
    font-size: 20px;
  }
  .info {
    margin-left: 40px;
    p {
      line-height: 27px;
      margin: 0;
    }
  }
  .link-more {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    a {
      width: 50px;
      height: 50px;
      justify-content: space-between;
      color: #ccc;
      border-radius: 50%;
      box-shadow: 20px 20px 20px rgba(255, 255, 255, 0.3);
      text-align: center;
      line-height: 50px;
      box-shadow: -5px 5px 10px #ccc;
      .iconfont {
        font-size: 25px;
      }
    }
  }
}
</style>
