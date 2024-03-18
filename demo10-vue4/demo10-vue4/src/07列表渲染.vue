
<script setup>
/**
 * v-for 列表渲染
 */
import { reactive, ref, toRef, toRefs } from "vue"
let items = reactive([{
  id: "item1",
  message: "薯片"
}, {
  id: "item2",
  message: "可乐"
}, {
  id: "item3",
  message: "炸鸡"
}]
)


</script>

<template>
  <div>
    <h1>购物车</h1>
    <hr>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="item.id">{{ index }}+{{ item.message }}</li>
    </ul>
  </div>
</template>

<style scoped></style>