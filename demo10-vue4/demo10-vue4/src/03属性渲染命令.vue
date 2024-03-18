<script setup>
// 属性渲染命令
// v-bind 将数据绑定到元素属性上
let imgUrl = "http://www.atguigu.com/images/index_new/logo.png"
const data = {
  logo: "http://www.atguigu.com/images/index_new/logo.png",
  name: "尚硅谷",
  URL: "http://www.atguigu.com/"
}
let title = "尚硅谷"
</script>

<template>
  <div>
    <img v-bind:src="data.logo" v-bind:title="title" v-bind:href="data.URL">

  </div>
</template>

<style scoped></style>