import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login'
import warranty from '../views/warranty'
import certify from '../views/certify'
import check from '../views/check'
import dealers from '../views/dealers'
import main from '../views/main'

Vue.use(Router)

const routes = [
  {  //客户登陆页
    path:'/login',
    name:'login',
    component:login
  },
  {  //质保信息页
    path:'/warranty',
    name:'warranty',
    component:warranty
  },
  {  //认证入口
    path:'/certify',
    name:'certify',
    component:certify
  },
  {  //认证内容页
    path:'/check',
    name:'check',
    component:check
  },
  {  //施工店入口
    path:'/dealers',
    name:'dealers',
    component:dealers
  },
  {  //首页
    path:'/main',
    name:'main',
    component:main
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
