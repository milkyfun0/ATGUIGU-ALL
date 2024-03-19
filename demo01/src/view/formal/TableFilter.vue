<template>
  <div @click.stop style="display: inline-block ">
    <el-popover
        placement="bottom"
        title="查询条件"
        trigger="hover"
        width="300"
        :visible=open_flag
        ref="popoverRef"
    >
      <template #reference>
        <span @click="open_flag=true">{{ column }}</span>
      </template>
      <!--        text 文本简略搜索-->
      <div v-if="column_filter_type === filter_type['text']">
        <el-input style="width: 200px"
                  v-model="this.condition.value_start"
                  placeholder="请输入查询内容"
        >
        </el-input>
      </div>
      <!-- scope 范围 数值类型-->
      <div v-else-if="column_filter_type === filter_type['scope']">
        <el-input
            style="width: 120px"
            v-model="this.condition.value_start"
            placeholder="条件1"
        ></el-input>
        -
        <el-input
            style="width: 120px"
            v-model.trim="condition.value_end"
            placeholder="条件2"
        ></el-input>
      </div>
      <!-- date 日期-->
      <div v-else-if="column_filter_type === filter_type['date']">
        <el-date-picker
            style="width: 120px; margin-top: 10px;margin-right: 10px"
            v-model="condition.value_start"
            type="date"
            clearable
            placeholder="开始时间"
            value-format="YYYY-MM-DD"
        ></el-date-picker>
        <el-date-picker
            style="width: 120px; margin-top: 10px;"
            v-model="condition.value_end"
            type="date"
            clearable
            placeholder="结束时间"
            value-format="YYYY-MM-DD"
        ></el-date-picker>
      </div>
      <!-- select 选择框-->
      <div v-else-if="column_filter_type===filter_type['select']">
        <el-select
            v-model="condition.value_start"
            placeholder="请选择"
            style="width: 100%"
            clearable
        >
          <el-option
              v-for="value in select_items"
              :key="value"
              :label="value"
              :value="value"
          >
          </el-option>
        </el-select>
      </div>
      <div v-else>
        <el-text type="warning" tag="b">此数据类型暂不支持查询</el-text>
      </div>
      <br>
      <div style="text-align: right; margin-left: 20px">
        <el-button text @click="open_flag=false">cancel</el-button>
        <el-button type="primary" @click="confirm">confirm</el-button>
      </div>

    </el-popover>
  </div>
</template>
<script>
import {reactive, ref} from "vue";
import {get_filter_type, legal_judge} from "@/api/utils.ts";

export default {
  name: "TableFilter",
  props: ["column", "column_filter_type", "select_items"],
  emits: ['conditionUpdate'], // 这里声明
  data() {
    return {
      open_flag: ref(true),
      condition: {
        value_start: "",
        value_end: ""
      },
      filter_type: get_filter_type()
    }
  },
  methods: {
    confirm() {
      this.open_flag = false
      if (this.column_filter_type === this.filter_type['text']) {
        if (!legal_judge('text', this.condition)) {
          return this.$message.warning("请正确筛选条件");
        }
      } else if (this.column_filter_type === this.filter_type['scope']) {
        if (!legal_judge('scope', this.condition)) {
          return this.$message.warning("请正确筛选条件");
        }
      } else if (this.column_filter_type === this.filter_type['date']) {
        if (!legal_judge('date', this.condition)) {
          return this.$message.warning("请正确筛选条件");
        }
      } else if (this.column_filter_type === this.filter_type['select']) {
        if (!legal_judge('select', this.condition)) {
          return this.$message.warning("请正确筛选条件");
        }
      } else {
        return null
      }
      this.$emit("conditionUpdate", {
        column: this.column,
        column_filter_type: this.column_filter_type,
        condition: {
          value_start: this.condition.value_start,
          value_end: this.condition.value_end
        }
      })
      this.condition.value_start = ''
      this.condition.value_end = ''
    },
  }
}
</script>
