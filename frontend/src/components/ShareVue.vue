<template>
  <el-table :data="tableData" height="1000" style="width: 100%">
    <el-table-column width="100">
        <div>
            <el-checkbox size="large" />
        </div>
    </el-table-column>
    <el-table-column width="150" #default="scope">
        <div style="font-size: 20px">
           <el-icon color="#eac253" v-if="scope.row.type === 'dir'"><Folder /></el-icon>
           <el-icon color="#eac253" v-else><Files /></el-icon>
        </div>
    </el-table-column>
    <el-table-column prop="itemname" label="Name"/>
    <el-table-column prop="mtime" label="Date" width="220" />
    <el-table-column prop="size" label="Size" width="300" />
    <el-table-column width="100" #default="scope">
        <div style="font-size: 20px">
            <el-button color="#409EFC" @click="downloadFile(scope.row.itemname)">
                <el-icon><Download /></el-icon> 
            </el-button>
        </div>
    </el-table-column>
  </el-table>
    <DialogVue :showDialog="DialogVisible" :shareToken="shareToken" @dialogStatus="handleStatus"/>
</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import DialogVue from './DialogVue.vue'
import Request from '../api/request'

const route = useRoute()
const router = useRouter()

const is_login = false
const is_anonymouse = true
const DialogVisible = ref(false)

function changeDialogStatus() {
    DialogVisible.value = true
    // console.log(DialogVisible.value)
}

//function handleStatus() {
//    DialogVisible.value = false
//}

const shareToken = ref()

function shareFile(target) {
  let data = {'target': target}
  var form_obj = JSON.parse(JSON.stringify(data));
  Request.post('/files/share', data).then(res => {
    shareToken.value = res.token
  })
}

const handleStatus = (e: any): void => {
//   console.log('in parent compoennt, e=', e)
    DialogVisible.value = false
}

function downloadFile(fileName) {
  var url = 'http://218.108.220.230:8888/sysapi/files/download' + '?filename=' + fileName + '&token=' + token.value
  Request.get(url)
  console.log(url)
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  link.click();
}
/*
function downloadFile(fileName) {
  var url = 'http://10.2.0.7:8888/files/download' + '?filename=' + fileName + '&token=' + token.value;

  // 使用axios发起GET请求
  axios.get(url, { responseType: 'blob' }) // 设置responseType为'blob'，以处理文件下载
    .then(response => {
      // 处理下载逻辑，例如创建blob对象，使用URL.createObjectURL生成下载链接
      // ...

      // 创建a标签进行下载
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      link.click();
    })
    .catch(error => {
      if (error.response && error.response.status === 403) {
        // 后端返回403，进行重定向到403页面或其他处理
        router.push('/403'); // 使用Vue Router进行重定向
      } else {
        // 其他错误处理
        console.error('An error occurred:', error.message);
      }
    });
  }
*/


const token = ref()
const tableData = ref([])
onMounted(() => {
  token.value = route.query.token
  var url = '/sysapi/files/share' + '?token=' + token.value;

  Request.get(url).then(res => {
    tableData.value = res.data;
  })
})
</script>
