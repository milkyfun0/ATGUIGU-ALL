<template>
  <div style="margin-bottom: 10px" v-if="this.dynamicTags.length !=0">
    <el-text tag="b">{{ "条件：" }}</el-text>
    <el-tag v-for="tag in this.dynamicTags"
            :key="tag.id"
            :size="'large'"
            :hit="true"
            closable
            :disable-transitions="false"
            @close="this.handleClose(tag)"
            style="margin: 3px"
            effect="plain"
    >
      {{ tag.column }} ：<span style="color: red">{{ tag.condition.value_start }}</span>
      <span v-if="tag.condition.value_end" style="color: red"
      >- {{ tag.condition.value_end }}</span>
    </el-tag>
  </div>
  <div>
    <el-table :data="tableData['data']" style="width: 100%" max-height="500" border stripe highlight-current-row
              @header-click="this.headClick"
              @selection-change="this.handleSelectionChange"
              @sort-change="this.sortOnChange"
    >
      <el-table-column
          v-for="{column_id,column_prop,column_value,column_filter_type,fixed,select_items} in this.tableData['data_info']"
          :prop="column_prop"
          :label="column_value"
          :fixed="fixed"
          :width="150"
          :align="'center'"
          :sortable="false"
          :min-width="100"
      >
        <template #header>
          <select_popover v-if="click_value==column_value" :column="column_value"
                          :column_filter_type="column_filter_type"
                          :select_items="select_items" @condition-update="conditionUpdate"></select_popover>
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
        style="margin-top : 10px;margin-left: 20px; text-align:center"
        v-model:current-page="this.page_id"
        v-model:page-size="this.page_size"
        :small=true
        :background=true
        layout="total, prev, pager, next, jumper"
        :total="this.page_total"
        @current-change="this.handleCurrentChange"
    />
  </div>
</template>
<script lang="ts">
import {get_filter_type} from "@/api/utils";
import {reactive, ref} from "vue";
import {type Action, ElMessageBox} from "element-plus";
import TableFilter from "@/view/data-import/TableFilter.vue";


class Tag {
  static tag_flag = 0;
  id: number;
  column: string
  column_filter_type: string
  condition: {
    value_start: string
    value_end: string
  }
  filter_type: object

  constructor({column, column_filter_type, condition}, filter_type) {
    this.id = Tag.tag_flag++
    this.column = column;
    this.column_filter_type = column_filter_type;
    this.condition = condition;
    this.filter_type = filter_type
  }

  getInfo() {
    if (this.column_filter_type === this.filter_type['text']) {
      return `${this.column}:\"${this.condition.value_start}\"`
    }
    if (this.column_filter_type === this.filter_type['scope']) {
      return `${this.column}:${this.condition.value_start} - ${this.condition.value_end}`
    }
    if (this.column_filter_type === this.filter_type['date']) {
      return `${this.column}:${this.condition.value_start} - ${this.condition.value_end}`
    }
    if (this.column_filter_type === this.filter_type['select']) {
      return `${this.column}:${this.condition.value_start}`
    }
    return `error ${this.column}：undefined`
  }
}


function handleCurrentChange(value) {
  // 当前页码改变
  console.log("handleCurrentChange " + value)
}

export default {
  name: 'TableExample',
  props: ["tableData"],
  emits: [],
  data() {
    return {
      filter_type: get_filter_type(),
      click_value: ref(""),// 用户点击时的column_value, 不是column_props
      dynamicTags: reactive([]),
      page_id: ref(this.tableData.page.page_id),
      page_size: ref(this.tableData.page.page_size),
      page_total: ref(this.tableData.page.page_total)
    }
  },
  components: {
    'select_popover': TableFilter
  },
  methods: {
    conditionUpdate(data) {
      /**
       * @param data {column, column_filter_type, condition}
       * des: 用户传来筛选条件来更新表格
       *
       * 后后端发送更新表格请求还没有实现
       */
      let {column, column_filter_type, condition} = data
      this.dynamicTags.push(new Tag(data, this.filter_type))
      console.log("conditionUpdate " + data)
    },
    handleClose(tag: Tag) {
      /**
       * 当标签被删除时需要触发表格更行
       * 更新功能现在还没有写！！！！
       */
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      console.log(`delete tag: ${tag}`)
      // 向后端发送请求

    },
    headClick(column: any, event: Event) {
      /**
       * 点击表的行头时发生的操作，及让组件select_popover显示
       */
      this.click_value = column.label
    },
    sortOnChange({column, prop, order}) {
      /**
       * 当用户点击表格的默认排序时，发生的事件
       */
      console.log(`sortOnChange 等待后端响应 column.label:${column.label} prop:${prop} order:${order}`);
      return this.tableData
    },
    handleSelectionChange(newSelection: Array<any>) {
      /**
       * @param:value Array
       * 当用户对表格的后面进行选中时，返回的行数
       */
      console.log("handleSelectionChange" + newSelection)
    },
    handleCurrentChange(currentRow: any, oldCurrentRow: any) {
      /**
       * 当前页码改变
       * 需要进行数据的更新，还没写
       */
      console.log("handleCurrentChange " + currentRow + "->" + oldCurrentRow)
    },
    more_about(row: any) {
      /**
       * 点击某行的showMore按钮，这里也需要向后端请求数据
       */
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
  }
}
</script>
<style scoped>

</style>
