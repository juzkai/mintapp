import Vue from 'vue'
import Router from 'vue-router'
import { router } from './router'

Vue.use(Router)

const route = new Router({
  routes: router
})
export default route
