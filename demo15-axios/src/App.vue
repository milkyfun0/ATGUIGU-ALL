<script setup>
import axios from 'axios';
import instance from './axios.js';
import { ref, reactive } from 'vue'

let message = reactive({
  "code": 1,
  "content": ""
})

function getLoveWrd() {
  return instance.get(
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
