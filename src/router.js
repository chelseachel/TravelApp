
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router
import Home from '@/pages/home/Home' 
import City from '@/pages/city/City' 
import Detail from '@/pages/detail/Detail' 
 
Vue.use(Router) //使用vue-router
 
export default new Router({
  routes: [{
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/city",
    name: "City",
    component: City
  }, {
    path: "/detail/:id", // 动态路由
    name: "Detail",
    component: Detail
  }]
})
