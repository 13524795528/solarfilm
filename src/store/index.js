import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './user.js'

// const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
//   user:{
//     usercode:''
//   }
// };

export default new Vuex.Store({
  // state: {
  // },
  // getters:{
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    user
  }
})
