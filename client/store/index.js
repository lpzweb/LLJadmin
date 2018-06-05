import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
    rules: [
      {DEVICELIST: false},
      {
        path: '/',
	    component: '',
	    iconCls: 'fa fa-cubes',
	    leaf: true,
	    children: [
		  { path: '/SinInSet', component: '', name: '签到管理' }
	    ]
	  }
    ]
}

const mutations = {
    TOGGLE(state) {
        state.rules.DEVICELIST = false
    }
}

const store = new Vuex.Store({
  modules: {
    app
  },
  state,
  actions,
  getters,
  mutations
})

export default store
