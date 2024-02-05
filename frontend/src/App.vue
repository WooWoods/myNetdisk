<template>
  <div id="div1" v-if="!$route.meta.useFrame">
  <!-- <Login v-if="$route.path==='/login'"></Login> -->
    <router-view></router-view>
  </div>

  <div id="div1" v-if="$route.meta.useFrame">
    <router-view></router-view>
  </div>

</template>

<script setup lang="ts">

// import Login from './login/Login.vue'
/*
import {onMounted} from 'vue'
const demo = () => {
    window.addEventListener('beforeunload', () => {
        alert('页面关闭')
        localStorage.removeItem('token')
    })
}

onMounted(() => {
    demo()
})
*/

</script>

<style scoped>
/*
html,body,#app {
    height: 100%;
}
*/

#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}

.el-header {
    padding: 0px;
}
</style>
