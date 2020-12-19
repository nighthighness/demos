import Vue from 'vue'
import VueRouter from 'vue-router'

// axios mockjs 请求 获取 挂载
import Home from '../views/Home.vue'

// 提交数据 给 vuex
import User from '../views/User.vue'
// 从 vuex 中 获取数据 
import About from '../views/About.vue'

// better-scroll例子
import BScroll from '../views/BScroll'

// vuex例子
import VxDemo from '../components/VxDemo'

// 前端缓存
import SetStorage from '../components/Storage/SetStorage'
import GetStorage from '../components/Storage/GetStorage'

// pages
import Pages from '../components/Pages/Pages'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/bscroll',
    name:'bscroll',
    component: BScroll
  },
  {
    path:'/pages',
    name:'pages',
    component: Pages
  },
  // vuex
  {
    path:'/vxdemo',
    name:'Vxdemo',
    component: VxDemo
  },
  {
    path:'/setstorage',
    name:'setstorage',
    component: SetStorage
  },
  {
    path:'/getstorage',
    name:'getstorage',
    component: GetStorage
  },
	{
		path: '/carouse',
		name: 'Carouse',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Carouse.vue')
	}
]

const router = new VueRouter({
  routes,
  mode:'history'  // history 模式
  
})


export default router
