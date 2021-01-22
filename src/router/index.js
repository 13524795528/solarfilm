import Vue from 'vue'
import Router from 'vue-router'

import customLogin from '../views/customLogin'
import warranty from '../views/warranty'
import certify from '../views/certify'
import check from '../views/check'
import dealerLogin from '../views/dealerLogin'
import main from '../views/main'
import page404 from '../views/page404'

import client from '../views/main/client'
import PDI from '../views/main/PDI'
import dealerQuery from '../views/main/dealerQuery'
import clientModify from '../views/main/clientModify'
import salesData from '../views/main/salesData'
import productMap from '../views/main/productMap'
import productData from '../views/main/productData'
import dealersData from '../views/main/dealersData'
import userCtrl from '../views/main/userCtrl'

import newClient from '../views/main/client/newClient'

Vue.use(Router)

const routes = [
  {  //客户登陆页
    path:'/customLogin',
    name:'customLogin',
    component:customLogin,
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
    path:'/dealerLogin',
    name:'dealerLogin',
    component:dealerLogin,
    props: true
  },
  {  //首页
    path:'/main',
    name:'main',
    component:main,
    props: true,
    children: [
      {path:'/main/client', name:'client',component:client,children:
            [{path:'/main/client/newClient', name:'newClient',component:newClient}]
      },
      {path:'/main/PDI', name:'PDI',component:PDI},
      {path:'/main/dealerQuery', name:'dealerQuery',component:dealerQuery},
      {path:'/main/clientModify', name:'clientModify',component:clientModify},
      {path:'/main/salesData', name:'salesData',component:salesData},
      {path:'/main/productMap', name:'productMap',component:productMap},
      {path:'/main/productData', name:'productData',component:productData},
      {path:'/main/dealersData', name:'dealersData',component:dealersData},
      {path:'/main/userCtrl', name:'userCtrl',component:userCtrl},
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
