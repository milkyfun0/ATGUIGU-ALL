<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="aside">
        <AppLayout/>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
          Main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import AppMenu from "@/layout/AppMenu.vue";

export default {
  name: "AppLayout",
  props: [],
  emits: [],
  components: [],
  data() {

  },
  methods: {}

}
</script>
<style scoped lang="css">


</style>
