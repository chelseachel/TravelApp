
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router
import Home from '@/pages/home/Home' 
import City from '@/pages/city/City' 
import Detail from '@/pages/detail/Detail' 
 
Vue.use(Router) //使用vue-router
 
export default new Router({
  // mode: 'history',
  routes: [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      lastPosition: true
    }
  }, {
    path: "/city",
    name: "City",
    component: City,
    meta: {
      lastPosition: true
    }
  }, {
    path: "/detail/:id", // 动态路由
    name: "Detail",
    component: Detail
  }],

  scrollBehavior (to, from, savedPosition) {
    // savedPosition当且仅当history模式下popstate导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.lastPosition) {
        from.meta.savedPosition = document.documentElement.scrollTop

      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
