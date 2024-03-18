<script setup>
// 向父组件发送参数
// defineEmits 用于向父组件提交数据的事件和正式提交数据
import { defineEmits } from 'vue'
// 定义一个向父组件提交数据的事件 事件名称为自定义
const emits = defineEmits(["sendMenu"])

function send(data) {
  emits("sendMenu", data)
}


</script>

<template>
  <div>
    <ul>
      <li @click="send('学员')">学员管理</li>
      <li @click="send('图书')">图书管理</li>
      <li @click="send('请假')">请假管理</li>
      <li @click="send('考试')">考试管理</li>
      <li @click="send('班级')">班级管理</li>
    </ul>
  </div>

</template>

<style scoped></style>
