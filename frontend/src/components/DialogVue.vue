<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="分享文件"
    width="30%"
    :show-close="false"
    align-center
  >
    <el-row>
      <el-col :span="8">
        <span>有效時間:</span>
      </el-col>
      <el-col :span="16">
        <el-input-number v-model="num" :min="1" :max="30" />
      </el-col>
    </el-row>
    <el-row class="demo-radius">
      <el-col :span="24">
        <el-card shadow="hover"> {{ shareUrl }} </el-card>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="changeDialogStatus">取消</el-button>
        <el-button type="primary" @click="changeDialogStatus(), copyText(shareUrl)">
          复制
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
// import { useTransitionFallthroughEmits } from 'element-plus';
import { ref, watch, toRef, inject } from 'vue'
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus';

const centerDialogVisible = ref(false)

const props = defineProps({
    showDialog: Boolean,
    shareToken: String
})
const showDialogRef = toRef(props, 'showDialog')
watch(showDialogRef, (newval) => {
    console.log(newval)
    centerDialogVisible.value = newval
})

function concatenateUrl(token) {
  // 使用字符串拼接将token添加到baseUrl后面
  var url = '218.108.220.230:5173/share' + '?token=' + token;
  return url;
}

const shareUrl = ref()
const shareTokenRef = toRef(props, 'shareToken')
watch(shareTokenRef, (newval) => {
    console.log(newval)
    shareUrl.value = concatenateUrl(newval)
})

const emit = defineEmits(['dialogStatus'])
function changeDialogStatus() {
    centerDialogVisible.value = false
    emit('dialogStatus', centerDialogVisible.value)
}

const num = ref(30)

const { toClipboard } = useClipboard()
const copyText = async (info) => {
  try {
    await toClipboard(info)
    ElMessage.success('复制成功')
  } catch (e) {
    ElMessage.warning('您的浏览器不支持复制：', e)
  }
}

</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
