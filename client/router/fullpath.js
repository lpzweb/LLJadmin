export default {
	// 签到配置
	SinInSet:{
		path: '/',
		component: (resolve) => require(['../views/Home.vue'], resolve),
	    iconCls: 'fa fa-cubes',
	    leaf: true,
	    children: [
	      { path: '/SinInSet', component: (resolve) => require(['../views/sinIn/SinInSet.vue'], resolve), name: '签到管理' }
	    ]
	},
	// 签到配置改
	SinInSets: [
		{
			path: '/',
			component: (resolve) => require(['../views/Home.vue'], resolve),
		    iconCls: 'fa fa-cubes',
		    leaf: true,
		    children: [
		      { path: '/SinInSet', component: (resolve) => require(['../views/sinIn/SinInSet.vue'], resolve), name: 'KJLHASIUDH' }
		    ]
		},
		{
			path: '/',
			component: (resolve) => require(['../views/Home.vue'], resolve),
		    iconCls: 'fa fa-cubes',
		    leaf: true,
		    children: [
		      { path: '/SinInSet', component: (resolve) => require(['../views/sinIn/SinInSet.vue'], resolve), name: '哈哈哈' }
		    ]
		}
    ],
    // 积分 管理
    Integrals: {
      path: '/',
      component: (resolve) => require(['../views/Home.vue'], resolve),
      name: '积分商城',
      iconCls: 'fa fa-database',
      children: [
        { path: '/IntegralList', component: (resolve) => require(['../views/Integrals/IntegralList.vue'], resolve), name: '兑换列表' },
        { path: '/IntegralEditor', component: (resolve) => require(['../views/Integrals/IntegralEditor.vue'], resolve), name: '积分商城', hidden: true }
      ]
    },
    // 充值数据
    TopUp: {
      path: '/',
      component: (resolve) => require(['../views/Home.vue'], resolve),
      name: '充值数据',
      iconCls: 'fa fa-cubes',
      children: [
        { path: '/TopUpDatas', component: (resolve) => require(['../views/TopUp/TopUpDatas.vue'], resolve), name: '数据详情' }
      ]
    },
    // ConsumptionDatas
    Consumption: {
      path: '/',
      component: (resolve) => require(['../views/Home.vue'], resolve),
      name: '消费数据',
      iconCls: 'fa fa-cubes',
      children: [
        { path: '/ConsumptionDatas', component: (resolve) => require(['../views/Consumption/ConsumptionDatas.vue'], resolve), name: '数据详情' }
      ]
    }
}