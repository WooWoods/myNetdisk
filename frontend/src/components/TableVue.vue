<template>
  <el-text v-if="pathList.length > 1" class="mx-1" size="large">
    <el-link type="primary" @click="lastStage">返回上一层</el-link>
  </el-text>
  <el-table :data="tableData" height="1000" style="width: 100%">
    <el-table-column width="100">
        <div>
            <el-checkbox size="large" />
        </div>
    </el-table-column>
    <el-table-column width="150" #default="scope">
        <div style="font-size: 20px">
           <el-icon color="#79bbff" v-if="scope.row.type === 'dir'"><Folder /></el-icon>
           <el-icon color="#79bbff" v-else><Files /></el-icon>
        </div>
    </el-table-column>
    <el-table-column prop="itemname" label="Name" #default="scope">
      <div v-if="scope.row.type === 'dir'">
        <el-link @click="freshData(scope.row.itemname)">{{ scope.row.itemname }}</el-link>
      </div>
    </el-table-column>
    <el-table-column prop="mtime" label="Date" width="220" />
    <el-table-column prop="size" label="Size" width="300" />
    <el-table-column width="100" #default="scope">
        <div style="font-size: 20px">
            <el-button type="primary" @click="changeDialogStatus">
                <el-icon><Share @click="shareFile(scope.row.itemname)"/></el-icon>
            </el-button>
        </div>
    </el-table-column>
  </el-table>
    <DialogVue :showDialog="DialogVisible" :shareToken="shareToken" @dialogStatus="handleStatus"/>
</template>

<script lang="ts" setup>
import { ref, reactive, provide } from 'vue'
import { onMounted } from 'vue'
import DialogVue from './DialogVue.vue'
import Request from '../api/request'

const DialogVisible = ref(false)

function changeDialogStatus() {
    DialogVisible.value = true
    // console.log(DialogVisible.value)
}

//function handleStatus() {
//    DialogVisible.value = false
//}
function joinPath(...parts) {
  // 递归处理数组元素
  const flattenArray = (arr) =>
    arr.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...flattenArray(item));
      } else {
        result.push(item);
      }
      return result;
    }, []);

  const flattenedParts = flattenArray(parts);

  return flattenedParts.join('/');
}

const shareToken = ref()

function shareFile(target) {
  var fullPath = joinPath(pathList.value, target)
  console.log(fullPath)

  let data = {'target': fullPath}
  var form_obj = JSON.parse(JSON.stringify(data));
  Request.post('/files/share', data).then(res => {
    shareToken.value = res.token
  })
}

const handleStatus = (e: any): void => {
//   console.log('in parent compoennt, e=', e)
    DialogVisible.value = false
}

const tableData = ref([])
onMounted(() => {
  Request.get('/files/index').then(res => {
    tableData.value = res.data;
    pathList.value.push('/')
  })
})

function freshData(target) {
  if (target === null || target.trim() === "") {
    var path = joinPath(pathList.value)
  } else {
    var path = joinPath(pathList.value, target)
    pathList.value.push(target)
  }
  console.log(path)

  var url = '/files/index?path=' + path
  console.log(url)
  Request.get(url).then(res => {
    tableData.value = res.data;
    console.log(pathList.value)
  })
}

const pathList = ref([])
provide('sharedPathList', pathList)

function lastStage() {
  pathList.value.pop()
  // var path = pathList.value[pathList.value.length-1]
  freshData("")
}

</script>


<style scoped>
.fresh {
  cursor: pointer; /* 光标变成手指 */
  color: blue; /* 默认颜色 */
  background-color: white; /* 默认背景色 */

  &:hover {
    color: blue; /* hover 时颜色 */
    background-color: lightgray; /* hover 时背景色 */
  }
}
</style>