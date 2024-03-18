<script setup>

</script>

<template>
  <div>
    <h1>start</h1>
    <router-link to="/home">home页</router-link><br>
    <router-link to="/update">update页</router-link><br>
    <router-link to="/add">add页</router-link><br>
    <router-link to="/list">list页</router-link><br>
    <hr>
    <!-- 该标签会被替换为具体的.vue -->
    <!-- 一般就一个router-view几乎可以满足99%的业务要求 -->
    <!-- 一个视图上可以同时存在多个router-view,每个人都可以设置专门展示那个组件 -->
    <router-view></router-view>
    <hr>
    <router-view name="homeView"></router-view>
    <hr>
    <router-view name="updateView"></router-view>
    <hr>
    <router-view name="addView"></router-view>
    <hr>
    <router-view name="listView"></router-view>
    <h1>end</h1>
  </div>
</template>

<style scoped></style>
