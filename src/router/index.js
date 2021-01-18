import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login'
import warranty from '../views/warranty'
import certify from '../views/certify'
import check from '../views/check'
import dealers from '../views/dealers'
import main from '../views/main'
import page404 from '../views/page404'

import client from '../views/main/client'
import PDI from '../views/main/PDI'


Vue.use(Router)

const routes = [
  {  //客户登陆页
    path:'/login',
    name:'login',
    component:login,
    props: true
  },
  {  //质保信息页
    path:'/warranty',
    name:'warranty',
    component:warranty,
    props: true
  },
  {  //认证入口
    path:'/certify',
    name:'certify',
    component:certify,
    props: true
  },
  {  //认证内容页
    path:'/check',
    name:'check',
    component:check,
    props: true
  },
  {  //施工店入口
    path:'/dealers',
    name:'dealers',
    component:dealers,
    props: true
  },
  {  //首页
    path:'/main/:usercode',
    name:'main',
    component:main,
    props: true,
    children: [
      {path:'/main/client/:id', name:'client',component:client},
      {path:'/main/PDI', name:'PDI',component:PDI, props:true}
    ]
  },
  {  //重定向
    path:'/gomain/:usercode',
    redirect:'/main/:usercode'
  },
  {  //404页面
    path:'*',
    component:page404,
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
