<template>
  <!--  <el-text class="mx-1">条件 {{": "}}</el-text>-->
  <div style="margin-bottom: 10px" v-if="dynamicTags.length !=0">
    <el-text tag="b"> 条件:</el-text>
    <el-tag v-for="tag in dynamicTags"
            :key="tag.id"
            :size="'default'"
            :hit="true"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
            style="margin-left: 10px"
            effect="dark"
            round
    >
      {{ tag.getInfo() }}
    </el-tag>
  </div>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="500" border stripe highlight-current-row
              @header-click="headClick"
              @selection-change="handleSelectionChange"
              @sort-change="sortOnChange"
    >
      <el-table-column
          v-for="[p,f] in props"
          :prop="p"
          :label="p"
          :fixed="f"
          :width="150"
          :align="'center'"
          :sortable="'custom'"
          :min-width="100"
      >
        <template #header>
          <newnew v-if="click_value==p" :column="p" :column_filter_type="'scope'"
                  :select_items="select_item" @condition-update="conditionUpdate"></newnew>
        </template>
      </el-table-column>
      <el-table-column label="Info" width="150" :align="'center'">
        <template #default="scope">
          <el-button type="primary" size="small" @click="more_about(scope.$index)"
          >ShowMore
          </el-button
          >
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55" :fixed="'right'"/>
    </el-table>
    <el-pagination
        style="margin-top : 10px; text-align:center"
        v-model:current-page="currentPage3"
        v-model:page-size="pageSize3"
        :small=true
        :background=true
        layout="total, prev, pager, next, jumper"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import {get_filter_type, legal_judge, zip} from '../../api/utils'
import {nextTick, reactive, ref} from 'vue'
import {ElMessage, ElMessageBox, ElInput} from 'element-plus'
import type {Action} from 'element-plus'
import {getTableData, getTableData2, getTableProps} from "../../api/test-data"
import customHeader from "./customHeader.vue";
import newnew from "./TableFilter.vue"

const filter_type = get_filter_type()
let click_value = ref("")
let pageSize3 = ref(20)
let currentPage3 = ref(1)


function handleSizeChange(value) {
  // 页面大小改变
  console.log("handleSizeChange " + value)
}

function handleCurrentChange(value) {
  // 当前页码改变
  console.log("handleCurrentChange " + value)
}

function log() {
  console.log("stop")
}


const row_labels = getTableProps()
const tableData = getTableData2()
const fixed = Array(row_labels.length)
fixed[0] = true
for (let i = 1; i < row_labels.length; i++) {
  fixed[i] = false
}
const props = zip(row_labels, fixed)

class Tag {
  static tag_flag = 0;
  id: number;
  column: string
  column_filter_type: string
  condition: {
    value_start: string
    value_end: string
  }

  constructor({column, column_filter_type, condition}) {
    this.id = Tag.tag_flag++
    this.column = column;
    this.column_filter_type = column_filter_type;
    this.condition = condition;
  }

  getInfo() {
    if (this.column_filter_type === filter_type['text']) {
      return `${this.column}：包含 \"${this.condition.value_start}\"`
    }
    if (this.column_filter_type === filter_type['scope']) {
      return `${this.column}：${this.condition.value_start} - ${this.condition.value_end}`
    }
    if (this.column_filter_type === filter_type['date']) {
      return `${this.column}：${this.condition.value_start} - ${this.condition.value_end}`
    }
    if (this.column_filter_type === filter_type['select']) {
      return `${this.column}：${this.condition.value_start}`
    }
    return `error ${this.column}：undefined`
  }
}

const inputValue = ref('')
const dynamicTags: Tag[] = reactive([])
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()
const select_item = [[0, '0'], [1, '1']]
const handleClose = (tag) => {
  dynamicTags.splice(dynamicTags.indexOf(tag), 1)
  console.log(`delete tag: ${tag}`)
}

function headClick(column, event) {
  console.log(`handClick ${column.label}`)
  click_value.value = column.label
}

function handleSelectionChange(value) {
  console.log("handleSelectionChange" + value)
}


function conditionUpdate(data) {
  /**
   * @param data {column, column_filter_type, condition}
   * des: 用户传来筛选条件来更新表格
   */
  let {column, column_filter_type, condition} = data
  dynamicTags.push(new Tag(data))
  console.log(dynamicTags.length)
  console.log("conditionUpdate " + data)
}

function more_about(row: any) {
  console.log("more_about ", row)
  ElMessageBox.alert('this is more information', 'Info', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      // ElMessage({
      //   type: 'info',
      //   message: `action: ${action}`,
      // })
    },
  })
}

function sortOnChange({column, prop, order}) {
  console.log(`等待后端响应 column.label:${column.label} prop:${prop} order:${order}`);
  // this.$emit('show')
  return tableData
}
</script>
