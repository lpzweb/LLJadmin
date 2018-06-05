import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
//import Page4 from '../views/nav2/Page4.vue'
//import Page5 from '../views/nav2/Page5.vue'
//import Frome from '../views/nav2/Frome.vue'
//import msg from '../views/nav2/msg.vue'
//import echarts from '../views/nav2/echarts.vue'
//import card from '../views/operations/card.vue'
//import scene from '../views/operations/scene.vue'
//import TopUp from '../views/operations/TopUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // 登陆
    {name: 'login', path: '/login', component: require('../views/auth/Login'), hidden: true},
    // 主页
    {
      path: '/',
      component: Home,
      iconCls: 'fa fa-id-card-o',
      hidden: true,
      leaf: true,
      children: [
        { path: '/Statistics', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: 'Statistics' } //,meta: { auth: true }
      ]
    },
    // 修改密码
    {
      path: '/',
      component: Home,
      iconCls: 'fa fa-id-card-o',
      hidden: true,
      children: [
        { path: '/ChangePassword', component: (resolve) => require(['../views/auth/ChangePassword.vue'], resolve), name: '修改密码' }
      ]
    },
    // 门店中心
	  {
      path: '/',
      component: Home,
      iconCls: 'fa fa-bank',
      name: '门店中心',
      children: [
        { path: '/StoreList', component: (resolve) => require(['../views/store/StoreList.vue'], resolve), name: '门店列表' },
        { path: '/StoreEditor', component: (resolve) => require(['../views/store/StoreEditor.vue'], resolve), name: '创建/编辑门店', hidden: true }
      ]
    },
    // 设备
    {
      path: '/',
      component: Home,
      iconCls: 'fa fa-microchip',
      name: '设备中心',
      children: [
        { path: '/DeviceList', component: (resolve) => require(['../views/devices/DeviceList.vue'], resolve), name: '设备列表' },
        { path: '/DeviceEditor', component: (resolve) => require(['../views/devices/DeviceEditor.vue'], resolve), name: '创建/编辑设备', hidden: true }
      ]
    },
    // 抓物
    {
      path: '/',
      component: Home,
      name: '精品中心',
      iconCls: 'fa fa-github-alt',
      children: [
        { path: '/ProductList', component: (resolve) => require(['../views/products/ProductList.vue'], resolve), name: '精品列表' },
        { path: '/ProductEditor', component: (resolve) => require(['../views/products/ProductEditor.vue'], resolve), name: '创建/编辑抓物', hidden: true }
      ]
    },
    // 微信用户
    {
      path: '/',
      component: Home,
      name: '用户中心',
      iconCls: 'fa fa-address-book ',
      children: [
        { path: '/WXuserList', component: (resolve) => require(['../views/WXusers/WXuserList.vue'], resolve), name: '用户列表' },
        { path: '/WXuserEditor', component: (resolve) => require(['../views/WXusers/WXuserEditor.vue'], resolve), name: '创建/编辑用户', hidden: true }
      ]
    },
    // 卡券管理
    {
      path: '/',
      component: Home,
      name: '卡券管理',
      iconCls: 'fa fa-credit-card ',
      children: [
        { path: '/CouponList', component: (resolve) => require(['../views/Coupons/CouponList.vue'], resolve), name: '卡券列表' },
        { path: '/CouponEditor', component: (resolve) => require(['../views/Coupons/CouponEditor.vue'], resolve), name: '生成卡券', hidden: true }
      ]
    },
    // 基础数据
    {
      path: '/',
      component: Home,
      name: '数据中心',
      iconCls: 'fa fa-cubes',
      children: [
        { path: '/BasicDatas', component: (resolve) => require(['../views/Basis/BasicDatas.vue'], resolve), name: '数据详情' }
      ]
    },
    // 账户管理
    {
      path: '/',
      component: Home,
      name: '组织与账户中心',
      iconCls: 'fa fa-address-card-o',
      children: [
        { path: '/AccountCenter', component: (resolve) => require(['../views/AccountCenter/AccountCenter.vue'], resolve), name: '账户列表' },
        { path: '/AddAccount', component: (resolve) => require(['../views/AccountCenter/AddAccount.vue'], resolve), name: '添加账户', hidden: true },
        { path: '/DetailAccount', component: (resolve) => require(['../views/AccountCenter/DetailAccount.vue'], resolve), name: '查看账户', hidden: true },
        { path: '/EditAccount', component: (resolve) => require(['../views/AccountCenter/EditAccount.vue'], resolve), name: '编辑账户', hidden: true },
        { path: '/RoleAccess', component: (resolve) => require(['../views/RoleAdmin/RoleAccess.vue'], resolve), name: '角色权限分配', hidden: true },
        { path: '/RoleAdmin', component: (resolve) => require(['../views/RoleAdmin/RoleAdmin.vue'], resolve), name: '角色管理' },
        { path: '/RoleView', component: (resolve) => require(['../views/RoleAdmin/RoleView.vue'], resolve), name: '角色视图', hidden: true },
        { path: '/View', component: (resolve) => require(['../views/View/View.vue'], resolve), name: '视图管理' },
        { path: '/Permissions', component: (resolve) => require(['../views/Permissions/Permissions.vue'], resolve), name: '权限管理' },
        { path: '/Permission', component: (resolve) => require(['../views/Permissions/Permission.vue'], resolve), name: '视图权限' }
      ]
    }
    // 运维数据
//  {
//    path: '/',
//    component: Home,
//    name: '运维数据',
//    iconCls: 'fa fa-line-chart',
//    children: [
//      { path: '/card', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '卡券数据' },
//      { path: '/scene', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '精品数据' },
//      { path: '/TopUp', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '充值数据' }
//    ]
//  },
    // demo
//  {
//    path: '/',
//    component: Home,
//    name: 'demo',
//    iconCls: 'fa fa-cubes',
//    children: [
//      { path: '/page4', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '表单示例' },
//      { path: '/page5', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '表格示例' },
//      { path: '/echarts', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '图表示例' },
//      { path: '/msg', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '常用工具示例' },
//      { path: '/Frome', component: (resolve) => require(['../views/Statistics.vue'], resolve), name: '表单示例' }
//    ]
//  }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
