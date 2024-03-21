<template>
  <AppMenu></AppMenu>
</template>

<script lang="ts" setup>
import {getTableData} from "@/api/test-data";
import TableExample from "@/view/data-import/Table.vue";
import UpLoad from "@/view/formal/UpLoad.vue";
import {ref} from "vue";
import TableFilter from "@/view/data-import/TableFilter.vue";
import AppLayout from "@/layout/AppLayout.vue"
import {defineComponent} from "vue";
import Part11 from "@/view/formal/Part1-1.vue";
import AppMenu from "@/layout/AppMenu.vue";
</script>
