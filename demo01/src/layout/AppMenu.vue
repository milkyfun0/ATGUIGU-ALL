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
          <Menu/>
        </el-icon>
        <span>数据导入</span>
      </template>
      <el-menu-item index="2-1">文本采集</el-menu-item>
      <el-menu-item index="2-2">结构化数据</el-menu-item>
      <el-menu-item index="2-2">管理员数据导入</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <Grid/>
        </el-icon>
        <span>数据分析</span>
      </template>
      <el-menu-item index="3-1">知识图谱</el-menu-item>
      <el-menu-item index="3-2">数据统计</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon>
        <Grid/>
      </el-icon>
      <template #title>故障诊断</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon>
        <Histogram/>
      </el-icon>
      <template #title>故障预测</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon>
        <Promotion/>
      </el-icon>
      <template #title>案例分析</template>
    </el-menu-item>
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
  props: ["isCollapse"],
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