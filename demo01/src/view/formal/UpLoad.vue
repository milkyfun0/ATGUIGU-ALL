<template>
  <h3>历史文本导入</h3>
  <el-upload
      v-model:file-list="this.fileList"
      ref="uploadRef"
      class="upload-demo"
      action="#"
      multiple
      :limit="5"
      :auto-upload="false"
      :on-preview="this.handlePreview"
      :before-upload="this.handBeforeUpload"
      :on-exceed="this.handleExceed"
      :on-success="this.handSuccess"
      :on-error="this.handError"
      :on-change="this.handOnChange"
      :before-remove="this.beforeRemove"
      :on-remove="this.handleRemove"
      :http-request="this.uploadHttpRequest"
  >
    <!--    <el-button type="primary">Click to upload</el-button>-->
    <span>
    <el-button v-if="this.upload_switch===0" size="small">点击选择文件</el-button>
    <el-button v-else disabled size="small">点击选择文件</el-button>
    <el-button v-if="this.upload_switch===0" @click.stop @click="uploadAllFiles" size="small">全部上传</el-button>
    <el-button v-else disabled size="small">全部上传</el-button>
    </span>
    <template #tip>
      <div class="el-upload__tip">
        {{ this.getInfoText() }}
      </div>
    </template>
  </el-upload>
  <h3>预处理</h3>

  <div class="demo-progress">
    <div style="align-items:center; ">
      <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="this.process_value_1"
          status="success"
          show-text
      >
        <el-text truncated class="font-style">数据清洗({{ this.process_value_1 }}%)</el-text>
      </el-progress>
      <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="this.process_value_2"
          status="success"
          show-text
      >
        <el-text truncated class="font-style">特征提取({{ this.process_value_2 }}%)</el-text>
      </el-progress>
      <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage=" this.process_value_3"
          status="success"
          show-text
      >
        <el-text truncated class="font-style">数据分类({{ this.process_value_3 }}%)</el-text>
      </el-progress>

      <el-button type="primary" @click="start" v-if="this.button_switch===1">开始</el-button>
      <el-button type="primary" @click="start" disabled v-else>开始</el-button>
      <el-button type="primary" @click="cancel" v-if="this.button_switch===2">取消</el-button>
      <el-button type="primary" @click="cancel" v-else disabled>取消</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import {ref} from "vue";
import {UploadFile, UploadProps, UploadUserFile} from "element-plus";
import {ElMessage, ElMessageBox, UploadFiles, UploadInstance, UploadRawFile} from "element-plus";
import {getRandomArray} from "@/api/utils.js";

export default {
  name: "UpLoad",
  props: ["accept_suffix", "max_file_size"],
  emits: [],
  data() {
    return {
      uploadRef: ref<UploadInstance>(), // 上传行为
      fileList: ref<UploadUserFile[]>([]), // 上传队列

      process_value_1: ref<number>(0), // 第一个进度条进度 ts ref在进行参数传递时会以number形式传入，需要使用reactive
      process_value_2: ref<number>(0), // 第二个进度条进度
      process_value_3: ref<number>(0), // 第三个进度条进度
      page_judge: true,
      button_switch: ref<number>(0),
      upload_switch: ref<number>(0),
      process_1_array: getRandomArray(20, 99, 1),
      process_2_array: getRandomArray(20, 99, 1),
      process_3_array: getRandomArray(20, 99, 1),

    }
  },
  methods: {
    getInfoText() {
      /**
       * 上传时的文字提醒
       */
      let info = "格式：" + this.accept_suffix[0];
      for (let i = 1; i < this.accept_suffix.length; i++) {
        info += '/' + this.accept_suffix[i]
      }
      info += '；大小：小于' + this.max_file_size + " MB"
      return info
    },

    uploadAllFiles() {
      /**
       * 提交所有文件
       */
      console.log(this.uploadRef)
      this.$refs.uploadRef.submit()
    },
    handlePreview(uploadFile: UploadFile) {
      //点击文件列表中已上传的文件时的钩子
      console.log("handlePreview:" + uploadFile.name)
      return true
    },
    handBeforeUpload(rawFile: UploadRawFile) {
      // 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。
      console.log("beforeUpload " + "name" + rawFile.name + "webkitRelativePath " + rawFile.webkitRelativePath)
      return true
      // return
    },
    handleExceed(files, uploadFiles) {
      ElMessage.warning(
          `The limit is ${this.max_file_size}, you selected ${files.length} files this time, add up to ${
              files.length + uploadFiles.length
          } totally`
      )
    },
    handSuccess(response) {
      console.log('success：' + response)
      ElMessage({
        type: 'success',
        duration: 2000,
        message: '上传成功',
      })
      this.button_switch = 1
    },
    handError(error, files, uploadFiles) {
      ElMessage({
        type: 'error',
        duration: 2000,
        message: '上传失败',
      })
      console.log("error")

    },
    handOnChange(uploadFile: UploadFile, uploadFiles: UploadFiles) {
      /**
       * 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
       * 经过的检查，
       */

      if (uploadFile.status === "ready") {
        console.log(uploadFile.name)
        let count = 0
        for (let i = 0; i < uploadFiles.length; i++) {
          if (uploadFile.name === uploadFiles[i].name) {
            count++
          }
        }
        if (count === 2) {
          uploadFiles.pop()
          ElMessage({
            type: 'warning',
            duration: 2000,
            message: '不要上传相同的文件',
          })
        }

        count = 0
        for (let i = 0; i < this.accept_suffix.length; i++) {
          if (uploadFile.name.indexOf(this.accept_suffix[i]) !== -1) {
            count++
          }
        }
        if (count !== 1) {
          uploadFiles.pop()
          ElMessage({
            type: 'warning',
            duration: 2000,
            message: '不支持该类型文件',
          })
        }

        if (uploadFile.size / 1024 / 1024 > this.max_file_size) {
          uploadFiles.pop()
          ElMessage({
            type: 'warning',
            duration: 2000,
            message: '文件超过规定大小',
          })
        }
      }
    },
    handleRemove(file: UploadFile, uploadFiles: UploadFiles) {
      if (uploadFiles.length === 0) {
        this.button_switch = 0;
      }
      console.log("onRemove " + file)
      console.log("onRemove " + uploadFiles)
    },
    beforeRemove(uploadFile, uploadFiles) {
      return ElMessageBox.confirm(
          `是否删除文件: ${uploadFile.name} ?`
      ).then(
          () => {
            return true
          },
          () => false
      )
    },
    uploadHttpRequest(data) {
      /**
       * 提交按钮后的响应
       */
      this.button_switch = 1
      console.log("uploadHttpRequest " + data)
      for (let i = 0; i < this.fileList.length; i++) {
        this.fileList.pop()
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    ,
    async control({process, array}) {
      for (let i = 0; i < array.length; i++) {
        await this.sleep(75);
        process = array[i];
        console.log(this.process_value_1)
        if (this.page_judge === false) {
          process = 0
          return null
        }
      }
      process = 100
    },
    async start() {
      this.page_judge = true
      this.button_switch = 2
      this.upload_switch = 1
      if (this.page_judge) {
        await this.control({process: this.process_value_1, array: this.process_1_array});
        await this.control({process: this.process_value_2, array: this.process_2_array});
        await this.control({process: this.process_value_3, array: this.process_3_array});
        this.page_judge = false;
      }
    },
    cancel() {
      this.page_judge = false
      this.process_value_1 = 0
      this.process_value_2 = 0
      this.process_value_3 = 0
      this.upload_switch = 0
      this.button_switch = 0
    }

  }
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