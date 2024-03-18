<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue'

let message = reactive({
  "code": 1,
  "content": ""
})

function getLoveWrd() {
  // 发送get请求的方法
  // axios.get(url)
  // axios.get(url {请求的其他信息})
  // axios.get(url, {params:{键值对参数},header:{设置一些特殊的请求头})
  // return axios.get("https://api.uomg.com/api/rand.qinghua")
  return axios.get(
    "https://api.uomg.com/api/rand.qinghua", {
    params: {
      format: "json",
      username: "zhangsan",
      userpwd: "lisi"
    }
  }
  )
}

async function getLoveMessage() {
  let { data } = await getLoveWrd()
  Object.assign(message, data)
}





</script>

<template>
  <div>
    <h1 v-text="message.content"></h1>
    <button @click="getLoveMessage()"> 边</button>
  </div>
</template>

<style scoped></style>
