<template>
  <div id="div1" v-if="!$route.meta.useFrame">
  <!-- <Login v-if="$route.path==='/login'"></Login> -->
    <router-view></router-view>
  </div>

  <div id="div1" v-if="$route.meta.useFrame">
    <div class="common-layout">
      <el-container>
        <el-header>
          <HeaderNav />
        </el-header>
        <el-container>
          <el-aside width="200px">
              <SideNav />
          </el-aside>
          <el-main>
              <!-- <button @click="showPath">showPath</button> -->
              <div v-if="$route.name === 'share'">
                <ShareVue />
              </div>
              <div v-else>
                <TableVue />
              </div>
              <!-- <router-view></router-view> -->
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SideNav from './SideNav.vue'
import HeaderNav from './HeaderNav.vue'
import TableVue from './TableVue.vue'
import ShareVue from './ShareVue.vue'
// import Login from '../login/Login.vue'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  // console.log(route.query.token)
})
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
