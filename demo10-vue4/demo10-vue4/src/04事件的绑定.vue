<script setup>
// 事件渲染命令 
// v-on:事件名="函数名()", 也可以简写为@事件名
// 原生事件名是on***, onclick
// v-on: 不需要加on
let fun1 = function () {
  alert("hi")
}
let counter = ref(1)
function fun2() {
  counter.value++
}
function fun3(event) {
  let conf = confirm("是否")
  if (!conf) {
    event.preventDefault()
  }
  // alert("点击了")
}
function fun4() {
  alert("点")
}
</script>

<template>
  <div>
    <button v-on:click="fun1()">11111</button>
    <!-- 内联事件处理器 -->
    <button v-on:click="fun2()" v-text="counter"></button>
    <button v-on:click="counter.value++" v-text="counter"></button>
    <!-- 事件的修饰符 .once 事件只绑定一次 prevent 修饰符阻止组件的默认行为 -->
    <button v-on:click.once="counter.value++" v-text="counter"></button>
    <a href="http://www.atguigu.com/" v-on:click="fun3($event)"></a>
    <a href="http://www.atguigu.com/" v-on:click.prevent="fun4()"></a>


  </div>
</template>

<style scoped></style>