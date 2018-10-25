<template>
    <div class='root'>
        <!-- floorOne -->
        <div>
  <div class='head'>
      <span>新增学员</span>
    </div>
    <div class='floor floor1'>
      <div class='floortitle'>基本信息</div>
      <div class='container'>
        <!-- 控制第一层输入框/选择框等宽度的容器 -->
        <div class='widthCon'>
          <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
          <formtool v-for='(content,key) in floorOneRender' :key='key' :item='content' @keyValue='getKeyValue'></formtool>
        </div>
      </div>
    </div>
























        </div>
        <!-- floorTwo -->
        <div></div>
        <!-- floorThree -->
        <div></div>
        <!-- floorFour -->
        <div></div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
.head {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  width: 1000px;
  text-align: center;
  font-size: 20px;
  height: 100px;
}
.head span {
  display: block;
  padding-top: 50px;
}
.floor {
  margin-left: 50px;
  margin-bottom: 15px;
}
.floortitle {
  width: 110px;
  height: 36px;
  background: #9ac3e3;
  color: #fff;
  line-height: 36px;
  text-align: center;
}
.container {
  width: 1000px;
  border: 1px solid rgba(230, 240, 249, 1);
  padding-top: 30px;
  background-color: rgba(255, 255, 255, 1);
}
.clear:after {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>