<script setup>
import {ref, reactive} from "vue"
// import HelloWorld from './components/HelloWorld.vue'
  // export default{
  //   setup(){
      let counter = ref(1)

      /*
      响应式： 数据变化时 vue 根据数据变化实时更新
      非响应式 数据变化不更新

      vue2 数据不做处理，默认响应式
      vue3 默认非响应式 ref/reactive 需要处理
          ref reactive  需要导入
          ref在操作时，script标签中，操作ref的响应式数据需要通过.value的形式
                      template标签中，不需要使用value属性
      */

      function countIn(){
        counter.value++
      }
      function countDes(){
        counter.value--
      }
      function ShowCounter(){
        alert(counter)
      }

      // return {
      //   counter,
      //   countIn,
      //   countDes,
      //   ShowCounter
      // }
    // }
  // }



</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div>  
    <button @click="countIn()">+</button>
    <span v-text="counter"></span>
    <button @click="countDes()">-</button>
    <button @click="ShowCounter()">ShowCounter</button>
  </div>

</template>
<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
