<script setup>
/*
v-*** vue的表示 
v-html
v-text
  1.依赖标签，在开始标签中使用

*/
let msg = "hello vue3"
// 支持模板字符串
let haha = "haha"
let msg2 = `hello ${haha}`
let msgFont = "<font color='blue'>你好</font>"
</script>

<template>
  <div>
    <h1 v-text="msg"></h1>
    <h1 v-text="msg2"></h1>
    <h1 v-text="`你好 ${haha}`"></h1>
    <h1 v-text="1 + 2"></h1>
    <h1 v-text="msg.split(' ')"></h1><br>
    <h1 v-html="msgFont"></h1>

  </div>
</template>

<style scoped></style>