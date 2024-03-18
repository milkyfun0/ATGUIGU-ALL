<script setup>

import { ref } from "vue"
import { useRouter } from 'vue-router'
let router = useRouter()
let username = ref("")
let password = ref("")
function loginIn() {
    if (username.value === 'root' && password.value === '123456') {
        // 路由跳转到 /home 
        // 将用户名保存在浏览器上 sensionStorage  localStorage
        window.sessionStorage.setItem("username", username.value)
        router.push("/home")

    } else {
        alert("密码账号错误")
    }
}
</script>

<template>
    <div>
        <h1>Home</h1>
        账号：<input type="text" v-model="username"><br>
        密码：<input type="text" v-model="password"><br>
        <button @click="loginIn()">登录</button>
    </div>
</template>

<style scoped></style>
