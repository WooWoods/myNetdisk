<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0" class="logo-item">
        <router-link to="/">LOGO</router-link>
    </el-menu-item>

    <div class="flex-grow" />
    <el-menu-item index="1">
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="userinfo">我的</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>添加新用户</el-dropdown-item>
          <el-dropdown-item @click="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

function logOut() {
  window.localStorage.removeItem('token');
  router.push('/login'); 
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu {
    background-color: #123876;
}

.logo-item {
    flex-basis: 200px;
}
.search-item {
    height: unset;
}
.userinfo {
  color: white;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

</style>
