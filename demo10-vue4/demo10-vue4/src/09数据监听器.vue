<script setup>
import { reactive, ref, watch, watchEffect } from 'vue'

let fullname = ref("")
let firstname = ref("22")
let lastname = reactive({ name: "33" })
// // ref
// watch(firstname, (newValue, oldValue) => {
//   console.log(`${oldValue}=>${newValue}`)
//   firstname.value = newValue
//   fullname.value = firstname.value + lastname.name
// })
// // reactive
// // watch(() => { return lastname.name }, (newValue, oldValue) => {
// //   lastname.name = newValue
// //   fullname.value = firstname.value + lastname.name
// // })
// watch(() => { return lastname }, () => {
//   fullname.value = firstname.value + lastname.name
// }, { deep: true, immediate: true })
// 全部监听 
watchEffect(() => {
  fullname.value = firstname.value + lastname.name
})


</script>

<template>
  <div>
    姓氏<input type="text" v-model="firstname"><br>
    名字<input type="text" v-model="lastname.name"><br>
    全名{{ fullname }}
  </div>
</template>

<style scoped></style>