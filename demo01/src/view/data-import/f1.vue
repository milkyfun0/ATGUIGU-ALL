<template>
  <div class="app">
    <!-- 条件tag -->
    <div style="margin-bottom: 10px" v-if="conditionList.length != 0">
      <span>条件：</span>
      <el-tag
          @close="conditionClose(index)"
          style="margin-left: 10px"
          v-for="(tag, index) in conditionList"
          :key="index"
          closable
          :type="tag.prop"
      >
        {{ tag.label }} ：<span style="color: red">{{ tag.value.value1 }}</span>
        <span v-if="tag.value.value2" style="color: red"
        >- {{ tag.value.value2 }}</span
        >
      </el-tag>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border stripe>
      <template v-for="(item, index) in tableConfig">
        <el-table-column
            sortable

            :label="item.label"
            align="center"
            :prop="item.prop"
            :width="item.width"
            :filters="[]"
        >
          <template slot="header" slot-scope="scope">
            <custom-header
                v-if="customFlag"
                :column="scope.column"
                :item="item"
                :customParams="customParams"
                :labelColorList="labelColorList"
                @tableUpdate="tableUpdate"
            ></custom-header>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import customHeader from "@/view/data-import/customHeader.vue/customHeader.vue";

export default {
  name: "app",
  data() {
    return {
      customFlag: false, // 自定义筛选是否显示
      customParams: {}, //自定义筛选参数
      conditionList: [], //自定义筛选条件
      labelColorList: [], //已经在使用的筛选条件，染色用
      // table数据
      tableData: [],
      // table数据 拷贝，我们不操作原数据
      tableDataCopy: [],
      // table配置
      tableConfig: [
        {
          label: "姓名",
          prop: "name",
          width: "150px",
          conditionType: "txt", // 条件类型
        },
        {
          label: "身价",
          prop: "amount",
          width: "150px",
          conditionType: "scope", // 条件类型
        },
        {
          label: "生日",
          prop: "date",
          width: "150px",
          conditionType: "date", // 条件类型
        },
        {
          label: "所在城市",
          prop: "city",
          conditionType: "select", // 条件类型
          conditionListName: "cityList", //条件类型下拉框数据
          fuzzyQuery: false, //是否模糊查询
        },
        {
          label: "所在城市（模糊查询）",
          prop: "city2",
          conditionType: "select", // 条件类型
          conditionListName: "cityList", //条件类型下拉框数据
          fuzzyQuery: true, //是否模糊查询
        },
      ],
    };
  },
  methods: {
    getCustomData() {
      /*
        这里的数据有必要注意下：
          1.数据格式这里处理好 全部保持一致，这样customHeader就不用再处理了
          3.因为我们后面筛选的时候查找的是文字，所以这里的value始终和列表展示的值保持一致，也是文字。
          3.可以写个Promise.All，把下拉框所需要的数据都请求到 然后再打开customFlag
        */
      this.customParams = {
        //城市列表
        cityList: [
          {value: "北京市"},
          {value: "南京市"},
          {value: "上海市"},
          {value: "广州市"},
          {value: "深圳市"},
          {value: "杭州市"},
          {value: "成都市"},
        ],
        // ...
      };
      this.customFlag = true;
    },
    // 给使用筛选条件的标题加颜色
    setlabelColor() {
      this.labelColorList = [];
      this.conditionList.forEach((_item) => {
        this.labelColorList.push(_item.prop);
      });
    },
    // 自定义检索发射出来的事件
    tableUpdate(data) {
      console.log(data, "condition");
      let flag = true;
      // 筛选条件如果已经存在，就更新
      this.conditionList.forEach((item, index) => {
        if (item.prop == data.prop) {
          item.value = data.value;
          flag = false;
        }
      });
      // 如果没有就添加
      if (flag) {
        this.conditionList.push(data);
      }
      this.customSearch(); //筛选数据
    },
    // 筛选数据
    customSearch() {
      /*
        这里可以说是筛选的核心部分吧，自定义的筛选规则都在这。
        以后想改什么筛选规则就来这找
      */
      console.log(this.conditionList, "this.conditionList");
      this.setlabelColor(); //设置使用自定义检索的表头颜色
      // 如果自定义检索 为空了，就重新调用查询
      if (this.conditionList.length == 0) {
        this.search();
        return false;
      }
      const result = [];
      // 遍历列表数据
      for (let i = 0; i < this.tableDataCopy.length; i++) {
        const dataItem = this.tableDataCopy[i];
        // 遍历自定义筛选条件，符合规则就push出来
        let flag = true;
        for (let l = 0; l < this.conditionList.length; l++) {
          const item = this.conditionList[l];
          // 属性名 属性值 类型 是否模糊查询
          const {prop, value, conditionType, fuzzyQuery} = item;
          // txt类型
          if (conditionType == "txt") {
            if (dataItem[prop].indexOf(value.value1) != -1) {
              flag = true;
            } else {
              flag = false;
            }

            //范围类型
          } else if (conditionType == "scope") {
            if (dataItem[prop] >= value.value1 &&
                dataItem[prop] <= value.value2) {
              flag = true;
            } else {
              flag = false;
            }

            // 时间类型
          } else if (conditionType === "date") {
            // 转换为时间戳然后判断
            let current = new Date(dataItem[prop]).getTime();
            let value1 = new Date(value.value1).getTime();
            let value2 = new Date(value.value2).getTime();
            if (current >= value1 && current <= value2) {
              flag = true;
            } else {
              flag = false;
            }
          }
          // 下拉框类型
          else if (conditionType == "select") {
            // fuzzyQuery 为true代表模糊查询，否则为精确查询
            if (fuzzyQuery) {
              if (dataItem[prop].indexOf(value.value1) != -1) {
                flag = true;
              } else {
                flag = false;
              }
            } else {
              if (dataItem[prop] == value.value1) {
                flag = true;
              } else {
                flag = false;
              }
            }
          }

          if (flag === false) break;
        }
        if (flag) result.push(dataItem);
      }
      console.log(result, "result");
      this.tableData = result;
      // this.totalSize = result.length;

    },
    search() {
      this.tableData = [
        {
          name: "王小虎",
          amount: 100,
          date: "2018-05-02",
          city: "北京市",
          city2: "北京市",
        },
        {
          name: "张二宝",
          amount: 200,
          date: "2019-05-04",
          city: "上海市",
          city2: "上海市",
        },
        {
          name: "王二丫",
          amount: 500,
          date: "2020-05-01",
          city: "深圳市",
          city2: "深圳市",
        },
        {
          name: "胡图图",
          amount: 1000,
          date: "2021-05-03",
          city: "广州市",
          city2: "广东省广州市",
        },
        {
          name: "张小龙",
          amount: 2000,
          date: "2022-05-03",
          city: "杭州市",
          city2: "浙江省杭州市",
        },
      ];
      // copy 一份数据出来
      this.tableDataCopy = JSON.parse(JSON.stringify(this.tableData));
    },
    // 关闭条件tag
    conditionClose(index) {
      this.conditionList.splice(index, 1);
      this.customSearch(); //筛选数据
    },
  },
  mounted() {
    // 请求自定义筛选下拉框数据
    this.getCustomData();
    // 请求table数据
    this.search();
  },
  components: {
    customHeader,
  },
};
</script>
<style scoped>
</style>