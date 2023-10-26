import Vue from 'vue'
// 1.引入 Vuex
import Vuex from 'vuex'
// 组装拆分出去的模块
import a from './modules/a'
import b from './modules/b'

// 2.使用 Vuex
Vue.use(Vuex)

// 3.创建 store 实例
export default new Vuex.Store({
  state () {
    return {
      loginStatus: '用户已经登录',
      count: 0
    }
  },
  // 相当于计算属性（具有缓存性），用于对 state 中的数据进行加工处理
  getters: {
    len (state) {
      console.log('getters len 执行了')
      return state.loginStatus.length
    }
  },
  // 出于可维护性的考虑，改数据的操作都放在 mutations 中
  mutations: {
    changeCount (state, num) {
      state.count += num
      console.log('mutations changeCount 执行了，count的值是：', state.count)
    }
  },
  // actions 用于处理异步任务
  actions: {
    // 因为所有修改都是在 mutations 中进行的，所以只能是用 commit 的方式去触发 mutations 中的方法，相当于加一层包装
    delayChangeCount (store, num) {
      setTimeout(() => {
        store.commit('changeCount', num)
      }, 3000)
    }
  },
  // 不同的功能有不同的全局处理，可以将不同的功能拆分包装成不同的模块.
  // 模块本身不含vuex的实例，只是包含 state、mutations、actions、getters
  modules: {
    a,
    b
  }
})
