<script setup>
import { useRoute } from 'vue-router';
import { ref, onUpdated } from 'vue';
/*
这个是用来接收参数的
route.param
route.
*/
let route = useRoute()
let ID = ref(0)
let lang = ref("")

onUpdated(() => {
  ID.value = route.params.id
  lang.value = route.params.language

})

</script>


<template>
  <div>
    <h1>Show Detail 接受路径参数</h1>
    ID-{{ ID }},-----Lang-{{ lang }}
  </div>
</template>

<style scoped></style>
