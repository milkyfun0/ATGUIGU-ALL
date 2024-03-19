<template>

  <!--  <upload_button></upload_button>-->
  <process></process>
  <!--  <hr>-->
  <!--    <example></example>-->
  <!--  <TableExample :table-data="testData"></TableExample>-->
  <!--  <f1></f1>-->

</template>

<script lang="ts" setup>
import {getTableData} from "@/api/test-data";
import TableExample from "@/view/formal/Table.vue";
import process from "@/view/data-import/progress.vue"

const testData = getTableData()
</script>
