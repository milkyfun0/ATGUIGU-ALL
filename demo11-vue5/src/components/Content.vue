<script setup>
// 接受父组件参数
import { defineProps } from "vue"
defineProps({
  message: String
}
)


</script>

<template>
  <div>
    {{ message }}
  </div>

</template>

<style scoped></style>
