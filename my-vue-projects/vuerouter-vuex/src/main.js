import Vue from 'vue'
import App from './App.vue'
// 导入 router 和 store
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// 将 router 和 store 挂载到 Vue 实例上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
