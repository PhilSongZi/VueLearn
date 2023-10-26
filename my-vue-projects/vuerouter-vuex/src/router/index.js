import Vue from 'vue'
// 1.引入 VueRouter
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoView from '../views/VideoView.vue'
import VideoInfo1 from '../views/video/VideoInfo1.vue'
import VideoInfo2 from '../views/video/VideoInfo2.vue'

// 2.使用 VueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // 动态路由
    path: '/video/:id',
    name: 'video',
    component: VideoView,
    // 嵌套路由
    children: [
      { path: 'info1', name: 'video-info1', component: VideoInfo1 },
      { path: 'info2', name: 'video-info2', component: VideoInfo2 }
    ],
    props: true
  }
]

// 3.通过 VueRouter 创建 router 实例
const router = new VueRouter({
  // 默认 hash 模式，url 中带 # 号。兼容性好。history 模式需要额外配置服务器，否则刷新页面会出现 404。
  mode: 'history',
  base: process.env.BASE_URL,
  // 路由配置
  routes
})

// 导航守卫
// 全局前置守卫。前置守卫可以做一些登录验证，权限验证等操作
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach 路由触发了')
//   next()
// })

export default router
