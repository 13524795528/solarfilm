import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'

import router from "./router";
import store from './store'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.axios = axios

//路由跳转前，判断是否已登陆
router.beforeEach((to,from,next) => {
  let islogin = sessionStorage.getItem('isLogin');
  //认证和查询页面不受此限制
  if (to.path == '/certify' | to.path == '/warranty'){
    next();
  }else {
    //退出前注销
    if (to.path == '/logout') {
      sessionStorage.clear();
      next({path: 'dealerLogin'});
      //已登陆则返回主页
    } else if (to.path == '/login') {
      if (islogin != null) {
        next({path: '/'})
      }
      //未登录则跳转登陆页
    } else if (islogin == null) {
      next({path: '/login'})
    }
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')