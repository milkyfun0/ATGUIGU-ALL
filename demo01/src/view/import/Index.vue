<template>

  <!--  <upload_button></upload_button>-->
  <div style="margin-left: 30px">
    <UpLoad
        ref="UpLoadModule"
        :accept_suffix="this.type"
        :max_file_size="10"
        :limit_file_number="2"
        @load-over="this.loadOver"
        @load-reset="this.loadReset"
    ></UpLoad>
  </div>
  <div style="margin-left: 20px;margin-top: 10px">
    <TableExample
        v-if="this.loadOverFlag"
        :table-data="this.testData"
    ></TableExample>
  </div>
  <div style="text-align: left;margin-top: 10px">
    <el-button v-if="this.loadOverFlag" type="primary" size="large" style="margin-left: 30%; margin-top: 10px"
               @click="this.submitCommit">提交审核
    </el-button>
  </div>

  <!--  <f1></f1>-->

</template>

<script lang="ts">
import {getTableData} from "@/api/test-data";
import TableExample from "@/view/data-import/Table.vue";
import UpLoad from "@/components/formal/UpLoad.vue";
import {ref} from "vue";
import TableFilter from "@/view/data-import/TableFilter.vue";


export default {
  name: "part1-1",
  props: [],
  emits: [],
  data() {
    return {
      loadOverFlag: ref<boolean>(false),
      testData: getTableData(),
      type: ['.text', '.csv', '.jpg']
    }
  },
  components: {
    'UpLoad': UpLoad,
    'TableExample': TableExample
  },
  methods: {
    loadOver() {
      this.loadOverFlag = true
    },
    loadReset() {
      this.loadOverFlag = false
    },
    submitCommit() {
      this.$refs.UpLoadModule.cancel()
      this.loadOverFlag = false
    }
  }

}
</script>
