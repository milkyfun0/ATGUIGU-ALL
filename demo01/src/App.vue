<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="aside" width="auto">
        <AppMenu :is-collapse="isCollapse"></AppMenu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-icon @click="expandMenu" v-if="!isCollapse" size="large">
            <Fold/>
          </el-icon>
          <el-icon @click="foldMenu" v-else>
            <Expand/>
          </el-icon>
        </el-header>
        <el-main class="main">
          <router-view ></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
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
.container {
  height: 100%
}
</style>