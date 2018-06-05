import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import attributesZh from './strings/zh.js'
import VeeValidate from 'vee-validate'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import api from './api'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)

Vue.router = router
axios.defaults.baseURL = '/api'
Vue.use(VueAxios, axios)
Vue.use(api)

axios.interceptors.request.use(
  config => {
    var token = ''
    if( !localStorage.getItem("token") ){
      //此时为空
    }else {
      token = JSON.parse(localStorage.getItem("token")).token
    }
    config.headers = {
      'Content-Type':'application/json'
    }
    if(token != ''){
     config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(err)
  }
)


Vue.use(VeeValidate, {
  locale: 'zh_CN',
  fieldsBagName: 'veefields',
  dictionary: {
    zh_CN: { attributes: attributesZh }
  }
})

// Enable devtools
Vue.config.devtools = true

sync(store, router)

const { state } = store

router.beforeEach((route, redirect, next) => {
	var token = localStorage.getItem("token")
	if ( !token && route.path != '/login' ) {
		console.log(token)
		next('/login')
	}
  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  ...App
})
// 消息提示
var warning = msg => {
  ElementUI.Message({
    message: `错误: ${msg}`,
    type: 'error'
  })
}

var logout = () => {
	this.$router.push('/login')
}

export { app, router, store }
