<script setup>
/*
插值表达式{{数据名字/函数}} 不依赖标签
*/

//定义一些常见的数据
let msg = "hello vue3"
let getMsg = () => {
  return "hello vue3 message"
}
let age = 19
let bee = "蜜 蜂"
let carts = [
  { name: "薯片", price: 6, number: 10 }, { name: "可乐", price: 3, number: 10 }
]
function cpmpute() {
  let count = 0;
  for (let index in carts) {
    count += carts[index].price * carts[index].number
  }
  return count
}


</script>

<template>
  <div>
    <!-- 绑定 -->
    <h1>{{ msg }}</h1>
    <h1>{{ getMsg() }}</h1><br>
    <h1>{{ 1 + 3 }}</h1><br>
    <!-- 支持对象调用一些API -->
    <h1>{{bee.split(" ").reverse()}}</h1>
  </div>

</template>

<style scoped></style>