// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(MintUI)

window.mainEntry = function (obj) {
  console.log(JSON.stringify(obj))
}

// 绑定原生方法到vue上
Vue.prototype.webView = window.WebViewApp

// 页面返回全局方法
Vue.prototype.back = function () {
  router.back()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
