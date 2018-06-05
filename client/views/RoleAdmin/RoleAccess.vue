<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane label="门店中心" name="store">
	    	<el-checkbox :indeterminate="model.store.isIndeterminate" v-model="model.store.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
		    <el-checkbox-group v-model="model.store.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
		      <el-checkbox v-for="loop in model.store.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
		    </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="设备中心" name="device">
	    	<el-checkbox :indeterminate="model.device.isIndeterminate" v-model="model.device.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
		    <el-checkbox-group v-model="model.device.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
		      <el-checkbox v-for="loop in model.device.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
		    </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="景品中心" name="product">
	    	<el-checkbox :indeterminate="model.product.isIndeterminate" v-model="model.product.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
		    <el-checkbox-group v-model="model.product.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
		      <el-checkbox v-for="loop in model.product.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
		    </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="IP中心" name="IPcenter">
		    <el-checkbox :indeterminate="model.IPcenter.isIndeterminate" v-model="model.IPcenter.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
			  <el-checkbox-group v-model="model.IPcenter.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
			    <el-checkbox v-for="loop in model.IPcenter.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
			  </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="用户中心" name="user">
	    	<el-checkbox :indeterminate="model.user.isIndeterminate" v-model="model.user.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
		    <el-checkbox-group v-model="model.user.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
		      <el-checkbox v-for="loop in model.user.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
		    </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="卡券中心" name="coupons">
		    <el-checkbox :indeterminate="model.coupons.isIndeterminate" v-model="model.coupons.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
			  <el-checkbox-group v-model="model.coupons.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
			    <el-checkbox v-for="loop in model.coupons.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
			  </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="数据中心" name="data">
		    <el-checkbox :indeterminate="model.data.isIndeterminate" v-model="model.data.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
			  <el-checkbox-group v-model="model.data.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
			    <el-checkbox v-for="loop in model.data.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
			  </el-checkbox-group>
	    </el-tab-pane>
	    <el-tab-pane label="组织与账户管理中心" name="account">
		    <el-checkbox :indeterminate="model.account.isIndeterminate" v-model="model.account.checkAll" @change="handleCheckAllChange">全选：</el-checkbox>
			  <el-checkbox-group v-model="model.account.checkedCities" @change="handleCheckedCitiesChange" style="display:inline-block; margin-left: 30px;">
			    <el-checkbox v-for="loop in model.account.cities" :label="loop.value" :key="loop.value">{{loop.name}}</el-checkbox>
			  </el-checkbox-group>
	    </el-tab-pane>
	  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      	activeName: 'store',
      	model: {
      		store: {  //门店中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        device: {  //设备中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        product: {  //景品中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        IPcenter: {  //IP中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        user: {  //账户中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        coupons: {  //账户中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        data: {  //账户中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        account: {  //账户中心权限
	          checkAll: false, //全选
	          isIndeterminate: false, //全选样式
	          checkedCities: [], //已选(value);
	          cities: [ //待选
	            { name: '增加', value: 'add' },
	            { name: '删除', value: 'del' },
	            { name: '编辑', value: 'edit' },
	            { name: '查看', value: 'check' }
	          ]
	        },
	        temporary: {}
      	}
      }
    },
    methods: {
    	handleClick (tab) {
        for (var key in this.model) {
        	if ( key === tab.name ) {
        		this.model.temporary = this.model[key]
        	}
        }
      },
      handleCheckAllChange(val) { //全选操作
        let arr = [];
        for(let i in this.model.temporary.cities){ arr.push(this.model.temporary.cities[i].value) }
        this.model.temporary.checkedCities = val ? arr : []
        this.model.temporary.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) { //选择操作(change)
        console.log(value)
        let checkedCount = value.length
        this.model.temporary.checkAll = checkedCount === this.model.temporary.cities.length
        this.model.temporary.isIndeterminate = checkedCount > 0 && checkedCount < this.model.temporary.cities.length
      }
    },
    mounted () {
      this.model.temporary = this.model.store
    }
  }
</script>
<style>

</style>
