import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const defaultTitle = '多页面模版之一'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle
  next()
})

export default router
