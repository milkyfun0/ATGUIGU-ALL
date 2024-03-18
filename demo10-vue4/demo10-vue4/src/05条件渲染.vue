<script setup>
/**
 * 普通=>响应式
 * 1. ref 单个数据 script .value   template不需要value
 * 2. reactive 更适合对象
 *    在script和template都一样
 */
import { reactive, ref, toRef, toRefs } from "vue"

let counter = ref(1)
function fun1() {
  counter.value++
}
let person = reactive({
  name: -1,
  age: 10
})
function fun2() {
  person.age++;
}
let p_age = toRef(person, 'age')
function fun3() {
  p_age.value++;
}

let { name, age } = toRefs(person)
// toRef函数 将reative 响应式数据中的某个属性转换为ref
// toRefs函数 将reative 响应式数据中的某些属性转换为ref
</script>

<template>
  <div>
    <button v-on:click="fun1()">+</button>{{ counter }} <br>
    <button v-on:click="fun1()">+</button>{{ person.age }}
    <hr>
    <button v-on:click="fun2()">+</button>{{ person.age }}
    <hr>
    <button v-on:click="fun3()">+</button>{{ p_age }}
  </div>
</template>

<style scoped></style>