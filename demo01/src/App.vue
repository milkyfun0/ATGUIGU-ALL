<template>
  <el-container class="homeContainer">
    <el-aside class="aside">
      <AppMenu :is-collapse="isCollapse"></AppMenu>
    </el-aside>
    <el-container>
      <el-header class="head">
        <el-row>
          <el-col :span="2">
            <el-icon @click="expandMenu" v-if="!isCollapse" size="large">
              <Fold/>
            </el-icon>
            <el-icon @click="foldMenu" v-else>
              <Expand/>
            </el-icon>
          </el-col>
          <el-col :span="20">
            通讯导航装备系统
          </el-col>
          <el-col :span="2">
            <Head></Head>
          </el-col>

        </el-row>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {getTableData} from "@/api/test-data";
import TableExample from "@/view/data-import/Table.vue";
import UpLoad from "@/components/formal/UpLoad.vue";
import {ref} from "vue";
import TableFilter from "@/view/data-import/TableFilter.vue";
import AppLayout from "@/layout/AppLayout.vue"
import {defineComponent} from "vue";
import Part11 from "@/components/formal/Part1-1.vue";
import Head from "@/layout/head/Head.vue";
import AppMenu from "@/layout/side_bar/Menu.vue";

let isCollapse = ref(false)

function expandMenu() {
  isCollapse.value = true
}

function foldMenu() {
  isCollapse.value = false
}
</script>
<style>
.homeContainer {
  height: 100vh;
}

.aside {
  //background: antiquewhite;
  width: auto;
  //height: 100vh;
}
.head{
  background: aqua;
  height: auto;
}
.main{
  background: bisque;
}
</style>