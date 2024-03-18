<script setup>
import { useRouter } from 'vue-router';
let username = window.sessionStorage.getItem("username")
const router = useRouter()
function logout() {
    window.sessionStorage.removeItem("username")
    router.push("/login")
}

</script>

<template>
    <div>
        <h1>Home页面</h1>
        <h3>欢迎{{ username }}登录</h3>
        <hr>
        <button @click="logout()">退出登录</button>
    </div>
</template>

<style scoped></style>
