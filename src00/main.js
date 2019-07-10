// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue.js
import Vue from 'vue'
// 引入App.vue的组件
import App from './App'
// 引入vue-router的路由
import router from './router'
// 关闭vue配置提示信息
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>'
})
