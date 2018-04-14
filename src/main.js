// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Router from 'vue-router'
import createRouter from './router'
import createStore from './store/store'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Router)
const router = createRouter()
const store = createStore()
// 动态注册模块
store.registerModule('c', {
  state: {
    text: 3
  }
})
// 动态卸载模块
// store.unregisterModule('c')

// 监听你操作的值的变化的值
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('newCount:', newCount)
// })


// 订阅mutation
// store.subscribe((mutation, state) => {
//   console.log('mutation类型：', mutation.type) // 类型
//   console.log('mutation参数：', mutation.payload) // 参数
// })

// // 订阅action
// store.subscribeAction((action, state) => {
//   console.log('action类型:', action.type) // 类型
//   console.log('action参数:', action.payload) // 参数
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
