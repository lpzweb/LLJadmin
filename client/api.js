import Vue from 'vue'

// https://github.com/mzabriskie/axios/issues/894
/**
 * create vue-resource's resource like object
 *
 * Default Actions
 *   get: {method: 'GET'}
 *   save: {method: 'POST'}
 *   query: {method: 'GET'}
 *   update: {method: 'PUT'}
 *   delete: {method: 'DELETE'}
 *
 * @param path the resource path
 * @param http axios instance
 * @param actions custom actions
 * @returns the resource object
 */
function resource (path, http, actions) {
  let obj = {
    get: id => http.get(path + '/' + id),
    save: obj => http.post(path, obj),
    query: params => http.get(path, {params}),
    update: (id, obj) => http.put(path + '/' + id, obj),
    delete: id => http.delete(path + '/' + id)
  }
  return Object.assign(obj, actions)
}

export default {
  install: () => {
    let http = Vue.axios
    const api = {
      account: resource('/getUserList', http, {
        changePassword: obj => http.post('/changeAdminUserPassword', obj),
        login: obj => http.post('/userLogin', obj),
        create: obj => http.post('/createAdminUser', obj),
        get: obj => http.get('/adminUserList'),
        update: obj => http.post('/updateAdminUserInfo', obj),
        delete: obj => http.post('/delAdminUser', obj)
      }),
      role: resource('/getRoleList', http, {
        create: obj => http.post('/createRole', obj),
        get: obj => http.get('/getRoleList'),
        update: obj => http.post('/updateRole', obj),
        delete: obj => http.post('/delRole', obj)
      }),
      Privilege: resource('/getPrivilegeList', http, {
        create: obj => http.post('/createPrivilege', obj),
        get: obj => http.get('/getPrivilegeList'),
        update: obj => http.post('/updatePrivilege', obj),
        delete: obj => http.post('/delPrivilege', obj)
      }),
      stores: resource('/getStoreList', http, {
        get: params => http.post('/getStoreList', params),
        types: () => http.get('/getStoreTypes'),
        info: params => http.post('/getStoreInfo', params),
        save: obj => http.post('/createStore', obj),
        update: obj => http.post('/editStore', obj),
        deleting: obj => http.post('/deleteStore', obj)
      }),
      qiniu: resource('/getQiniuUploadToken', http, {
        token: () => http.post('/getQiniuUploadToken')
      }),
      coupons: resource('/getTicketList', http, {
        get: params => http.post('/getTicketList', params),
        save: obj => http.post('/createTicket', obj)
      }),
      // 
      AccountCenter: resource('/getRoleList', http, {
        get: params => http.post('/getRoleList', params),
        editor: obj => http.post('/updateRole', obj),
        add: obj => http.post('/createRole', obj),
        del: obj => http.post('/delRole', obj),
      })
    }

    Vue.api = api
    Vue.prototype.$api = api
  }
}
