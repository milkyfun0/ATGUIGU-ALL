<script setup>
/**
 * 条件渲染 v-if true(当前元素渲染) v-else(自动和前面的取反操作) v-show(数据为true 则会展示到页面上否则不展示)
 */
import { reactive, ref, toRef, toRefs } from "vue"

let flag = ref(true)

</script>

<template>
  <div>
    <h1 id="ha" v-if="flag"> vue is awesome!</h1>
    <h1 id = 'ho' v-else> oh no</h1>
    <h1 id = 'ho' v-show="flag"> oh yes</h1>
    <button @click="flag = !flag">toggle</button>
  </div>

</template>

<style scoped></style>