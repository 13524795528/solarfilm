import Vue from 'vue'
import Router from 'vue-router'

import warranty from '../views/warranty'
import certify from '../views/certify'
import login from '../views/login'
import mainPage from '../views/mainPage'
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
import changePassword from '../views/main/changePassword'

Vue.use(Router)

const routes = [
  {  //质保信息查询页
    path:'/warranty',
    name:'warranty',
    component:warranty
  },
  {  //认证入口
    path:'/certify',
    name:'certify',
    component:certify
  },
  {  //施工店入口
    path:'/login',
    name:'login',
    component:login
  },
  {  //首页
    path:'/',
    name:'mainPage',
    component:mainPage,
    children: [
      {path:'/client', name:'client',component:client},
      {path:'/PDI', name:'PDI',component:PDI},
      {path:'/dealerQuery', name:'dealerQuery',component:dealerQuery},
      {path:'/clientModify', name:'clientModify',component:clientModify},
      {path:'/salesData', name:'salesData',component:salesData},
      {path:'/productMap', name:'productMap',component:productMap},
      {path:'/productData', name:'productData',component:productData},
      {path:'/dealersData', name:'dealersData',component:dealersData},
      {path:'/userCtrl', name:'userCtrl',component:userCtrl},
      {path:'/changePassword', name:'changePassword',component:changePassword},
    ]
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
