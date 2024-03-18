<script setup>
</script>

<template>
    <div>
        <router-link to="/home">home页</router-link><br>
        <router-link to="/login">login</router-link><br>
        <hr>
        <!-- 该标签会被替换为具体的.vue -->
        <!-- 一般就一个router-view几乎可以满足99%的业务要求 -->
        <!-- 一个视图上可以同时存在多个router-view,每个人都可以设置专门展示那个组件 -->
        <router-view></router-view>
    </div>

</template>

<style scoped></style>
