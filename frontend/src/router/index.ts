import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../login/Login.vue'),
      meta: {title: "登录", icon: "Setting", useFrame: false, needLogin: false}
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        path: {
          type: String,
          required: false,
        },
      },
      meta: {title: "主页", icon: "Setting", useFrame: true, needLogin: true}
    },
    {
      path: '/share',
      name: 'share',
      component: HomeView,
      props: {
        token: {
          type: String,
          required: true,
        },
      },
      meta: {title: "分享", icon: "Setting", useFrame: true, needLogin: false}
    },
    {
      path: '/403',
      name: '403',
      component: () => import('../statesPages/403.vue'),
      meta: {title: "403", icon: "Setting", useFrame: true, needLogin: false}
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../statesPages/404.vue'),
      meta: {title: "404", icon: "Setting", useFrame: true, needLogin: false}
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
    }
  ]
})

router.beforeEach((to,from,next) =>{
  let token = localStorage.getItem('token')
  // if(to.name!=='login' && !token) {
  if (to.name == '403') {
    next('/403')
  }
  if(to.name!=='login' && to.meta.needLogin) {
    if (!token) {
      next({name:'login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
