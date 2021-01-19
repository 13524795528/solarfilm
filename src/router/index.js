import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login'
import warranty from '../views/warranty'
import certify from '../views/certify'
import check from '../views/check'
import dealerlogin from '../views/dealerlogin'
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
    path:'/dealerlogin',
    name:'dealerlogin',
    component:dealerlogin,
    props: true
  },
  {  //首页
    path:'/main',
    name:'main',
    component:main,
    props: true,
    children: [
      {path:'/main/client/:id', name:'client',component:client},
      {path:'/main/PDI', name:'PDI',component:PDI, props:true}
    ]
  },
  {  //重定向
    path:'/gomain',
    redirect:'/main'
  },
  {  //404页面
    path:'*',
    component:page404,
  }
]

//修改原始push函数以解决重定向问题
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch((err) => err)
// }

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
