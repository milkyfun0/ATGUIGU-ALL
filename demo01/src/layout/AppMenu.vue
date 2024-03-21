<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :collapse="this.isCollapse"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon>
        <HomeFilled></HomeFilled>
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>

        </el-icon>
      </template>

    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts">
import {ref} from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
  name: "AppMenu",
  props: [],
  emits: [],
  components: [],
  data() {
    return {
      isCollapse: ref(true),

    }

  },
  methods: {
    handleOpen: (key: string, keyPath: string[]) => {
      console.log("open", key, keyPath)
    },
    handleClose: (key: string, keyPath: string[]) => {
      console.log("close", key, keyPath)
    }
  }

}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>