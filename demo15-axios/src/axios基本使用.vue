<script setup>
import axios from "axios"
function getMess() {
  // 使用axios发送请求获取土味情话
  // axio({设置请求参数}) 参数：1.url 2. 请求方式 3.请求参数 json
  let promise = axios({
    method: "get",
    url: "https://api.uomg.com/api/rand.qinghua?format=json",
    data: {
      // 如果是get 则data中的数据会不会放入url中，使用params会放到url中
      // 如果请求的是post，并且使用data 中的数据会 以json形式放入请求体
    },
    params: {
      // 都以键值对放到请求体中

    }
  })
  promise.then(
    function (response) {
      /**
       * data: 服务端响应的数据
       * status:响应状态码
       * statusText:响应状态描述 OK
       * headers所有响应头
       * config 本次请求的配置信息
       * request 本次请求发送的XMLHttpRequest信息
       * 
       */
      console.log(response)
      console.log(response.data.code)
      console.log(response.data.content)
    }
  ).catch(
    function () {

    }
  )
}


</script>

<template>
  <div>
    <button @click="getMess()"> 边</button>
  </div>
</template>

<style scoped></style>
