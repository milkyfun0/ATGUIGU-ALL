<template>
  <div class="common-layout">
    <el-container>
      <el-header>

      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <AppMenu></AppMenu>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">

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
