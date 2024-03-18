<template>
  <h3>历史文本导入</h3>

  <el-upload
      v-model:file-list="fileList"
      ref="uploadRef"
      class="upload-demo"
      action="#"
      multiple
      :limit="5"
      :auto-upload="false"
      :on-preview="handlePreview"
      :before-upload="handBeforeUpload"
      :on-exceed="handleExceed"
      :on-success="handSuccess"
      :on-error="handError"
      :on-change="handOnChange"
      :before-remove="beforeRemove"
      :on-remove="handleRemove"
      :http-request="uploadHttpRequest"

  >
    <!--    <el-button type="primary">Click to upload</el-button>-->
    <span>
    <el-button v-if="upload_switch==0" size="small">点击选择文件</el-button>
    <el-button v-else disabled size="small">点击选择文件</el-button>
    <el-button v-if="upload_switch==0" @click.stop @click="uploadAllFiles" size="small">全部上传</el-button>
    <el-button v-else disabled size="small">全部上传</el-button>
    </span>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>

  <h3>预处理</h3>

  <div class="demo-progress">
    <div style="align-items:center; ">
      <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="part1"
          status="success"
          show-text
      >
        <el-text truncated class="font-style">数据清洗({{ part1 }}%)</el-text>
      </el-progress>
      <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="part2"
          status="success"
          show-text
      >
        <el-text truncated class="font-style">特征提取({{ part2 }}%)</el-text>
      </el-progress>
      <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="part3"
          status="success"
          show-text
      >
        <el-text truncated class="font-style">数据分类({{ part3 }}%)</el-text>
      </el-progress>

      <el-button type="primary" @click="start" v-if="button_switch==1">开始</el-button>
      <el-button type="primary" @click="start" disabled v-else>开始</el-button>
      <el-button type="primary" @click="cancel" v-if="button_switch==2">取消</el-button>
      <el-button type="primary" @click="cancel" v-else disabled>取消</el-button>
    </div>
  </div>
</template>


<script lang="ts" setup>
import {computed, ref} from 'vue'
import {Minus, Plus} from '@element-plus/icons-vue'
import {getRandomArray} from "../../api/utils"
import {ElMessage, ElMessageBox, UploadFile, UploadFiles, UploadInstance, UploadRawFile} from 'element-plus'


import type {UploadProps, UploadUserFile} from 'element-plus'

const fileList = ref<UploadUserFile[]>([])
const part1 = ref<number>(0)
const part2 = ref<number>(0)
const part3 = ref<number>(0)
const duration = computed(() => Math.floor(part1.value / 10))

const part1_1 = getRandomArray(20, 99, 1)
const part2_1 = getRandomArray(20, 99, 1)
const part3_1 = getRandomArray(20, 99, 1)
let page_judge = true
let button_switch = ref<number>(0)
let upload_switch = ref<number>(0)

/**
 *
 * uploadFiles: [UploadRawFile]
 *
 */
const uploadRef = ref<UploadInstance>()

function uploadAllFiles() {
  uploadRef.value!.submit()
}

function uploadHttpRequest(data) {
  button_switch.value = 1
  console.log("uploadHttpRequest " + data)
}


const handOnChange: UploadProps["onChange"] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
  if (uploadFile in uploadFiles) {
    console.log("--------------")
  }
  // 不能上传相同的文件
  console.log("onChange " + uploadFile.url)

}
const handSuccess: UploadProps['onSuccess'] = (response) => {
  console.log('success：' + response)
  button_switch.value = 1
}
const handError: UploadProps["onError"] = (error, files, uploadFiles) => {
  console.log("error")

}
const handBeforeUpload: UploadProps["beforeUpload"] = (rawFile: UploadRawFile) => {
  // 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。
  console.log("beforeUpload " + "uid" + rawFile.uid + "webkitRelativePath " + rawFile.webkitRelativePath)
  console.log("lastModified" + rawFile.lastModified)
  // return
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  //点击文件列表中已上传的文件时的钩子
  console.log("handlePreview:" + uploadFile.name)
  return true
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
      `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + uploadFiles.length
      } totally`
  )
}
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  if (uploadFiles.length == 0) {
    button_switch.value = 0;
  }
  console.log("onRemove " + file)
  console.log("onRemove " + uploadFiles)
}
const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  // 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。
  // if (!(uploadFile in uploadFiles)) {
  //   return true
  // }
  return ElMessageBox.confirm(
      `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
      () => {
        console.log("beforeRemove")
        // if (uploadFiles.length == 0) {
        //   button_switch.value = 0;
        // }else {
        //   console.log(uploadFiles.length)
        // }
        return true
      },
      () => false
  )
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function control(process, array) {
  for (let i = 0; i < array.length; i++) {
    await sleep(75);
    process.value = array[i];
    if (page_judge == false) {
      process.value = 0
      return null
    }
  }
  process.value = 100
}

async function start() {
  page_judge = true
  button_switch.value = 2
  upload_switch.value = 1
  if (page_judge) {
    await control(part1, part1_1);
    await control(part2, part2_1);
    await control(part3, part3_1);
    page_judge = false;
  }
}

function cancel() {
  page_judge = false
  part1.value = 0
  part2.value = 0
  part3.value = 0
  upload_switch.value = 0
  button_switch.value = 0
  fileList.value = []
}


</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}

.font-style {
  font-weight: bold;
  color: #2c3e50;
}
</style>


