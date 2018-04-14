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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
