<script setup>
// 引入组件
import Header from "./components/Header.vue"
import Navigator from "./components/Navigator.vue";
import Content from "./components/Content.vue";
import { ref } from "vue"


let menu = ref("")
function receiver(data) { 
  menu.value = data
}



</script>

<template>
  <div>
    {{ message }}
    <hr>
    <Header class="header"></Header>
    <Navigator @sendMenu="receiver" class="navigator"></Navigator>
    <Content class="content" v-bind:message="menu"></Content>
  </div>

</template>

<style scoped>
.header {
  height: 80px;
  border: 1px solid red;
}

.navigator {
  width: 15%;
  height: 800px;
  display: inline-block;
  border: 1px blue solid;
  float: left;
}

.content {
  width: 83%;
  height: 800px;
  display: inline-block;
  border: 1px goldenrod solid;
  float: right;
}
</style>
