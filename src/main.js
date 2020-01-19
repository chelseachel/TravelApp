import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
