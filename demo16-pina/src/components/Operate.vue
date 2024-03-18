<script setup>
// 导入pina定义的数据
import { definePerson } from '../store/store';
let person = definePerson()

</script>

<template>
  <div>
    <h1>用于更改pinia数据</h1>
    名字：<input type="text" v-model="person.username"><br>
    年龄：<input type="text" v-model="person.age"><br>
    爱好：
    吃饭<input type="checkbox" value="吃饭" v-model="person.hobbies">
    睡觉<input type="checkbox" value="睡觉" v-model="person.hobbies">
    打豆豆<input type="checkbox" value="打豆豆" v-model="person.hobbies">
    唱歌<input type="checkbox" value="唱歌" v-model="person.hobbies">
    跳舞<input type="checkbox" value="跳舞" v-model="person.hobbies">
    <hr>
    <button @click="person.doubleAge()">年龄加倍 </button><br>
    <button @click="person.$reset()">年龄重置</button>
    <button @click="person.$patch({ username: '奥特曼', age: 20, hobbies: ['奥特曼', '打怪兽'] })">年龄重置</button>
    <h1>展示pina</h1>
    展示person {{ person }}
  </div>
</template>

<style scoped></style>
