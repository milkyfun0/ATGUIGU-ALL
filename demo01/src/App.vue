<template>

  <!--  <upload_button></upload_button>-->
  <process></process>
  <hr>
  <UpLoad :accept_suffix=" ['.text', '.csv', '.jpg']" :max_file_size="100"></UpLoad>
  <!--  <hr>-->
  <!--    <example></example>-->
  <!--  <TableExample :table-data="testData"></TableExample>-->
  <!--  <f1></f1>-->

</template>

<script lang="ts" setup>
import upload_button from "@/view/data-import/upload_button.vue"
import process from "@/view/data-import/progress.vue"
import example from '@/view/data-import/example.vue'
import {getTableData} from "@/api/test-data";
import TableExample from "@/view/data-import/Table.vue";
import UpLoad from "@/view/formal/UpLoad.vue";

const testData = getTableData()
</script>
