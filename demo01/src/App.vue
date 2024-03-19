<template>

  <!--  <upload_button></upload_button>-->
  <!--  <process></process>-->
  <!--  <hr>-->
<!--    <example></example>-->
  <TableExample :table-data="testData"></TableExample>
  <!--  <f1></f1>-->

</template>

<script lang="ts" setup>
import upload_button from "@/view/data-import/upload_button.vue"
import process from "@/view/data-import/progress.vue"
import example from '@/view/data-import/example.vue'
import f1 from '@/view/data-import/f1.vue'
import {getTableData} from "@/api/test-data";
import TableExample from "@/view/data-import/Table.vue";

const testData = getTableData()
</script>
