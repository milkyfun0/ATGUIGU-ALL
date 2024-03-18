<script setup>
import { useRouter } from "vue-router"
import { ref } from "vue"
let pagePath = ref("")
let router = useRouter()


function showDetail(id, lang) {
  // router.push(`/show/${id}/${lang}`)
  router.push(
    {
      path: `/show/${id}/${lang}`
    }
  )
}
function showDetail2(id, lang) {
  // router.push(`/show2?id=${id}&language=${lang}`)
  router.push(
    { path: '/show2', query: { id: id, language: lang } }
  )
}
</script>


<template>
  <div>
    <router-link to="/show/1/java">声明式路由传参</router-link><br>
    <button @click="showDetail(1, 'PHD')">编程式路由</button>
    <hr>
    <!-- <router-link to="/show2?id=1&language=PHD">声明式键值对传参</router-link><br> -->
    <router-link v-bind:to="{ path: '/show2', query: { id: 1, language: 'php' } }">声明式键值对传参</router-link><br>
    <button @click="showDetail2(2, 'python')">编程式键值对路由</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
