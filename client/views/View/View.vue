<template>
<div>
	<div class="card_wrap">
		<el-row :gutter="12">
		  <el-col :span="8" v-for = "name in view" class = 'card_list'>
		    <el-card shadow="hover">
		      {{name.name}}&nbsp;&nbsp;/&nbsp;&nbsp;{{name.ViewURL}}
		    </el-card>
		  </el-col>
		  <el-col :span="8" class = 'card_list' @click.native="dialogFormVisible = true" >
		  	<div style="padding: 10px 30px;width: 40px;height: 40px;border: 1px solid #EBEEF5;">
		  		<i class="el-icon-circle-plus-outline" style="font-size: 40px;color: #909399;"></i>
		  	</div>
		  </el-col>
		</el-row>
	</div>
		<el-dialog title="添加视图" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="视图名称" >
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="视图路由" >
		      <el-input v-model="form.ViewURL" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false" @click.native = add >确 定</el-button>
		  </div>
		</el-dialog>
</div>
</template>
<script>
  export default {
    data(){
      return{
      	dialogFormVisible: false,
      	form: {
      		name: '',
      		ViewURL: ''
      	},
        view: [ 
          { name: '门店中心', ViewURL:1 },
          { name: '设备中心', ViewURL:2 },
          { name: '景品中心', ViewURL:3 },
          { name: 'IP中心', ViewURL:4 },
          { name: '用户中心', ViewURL:5 },
          { name: '卡券中心', ViewURL:6 },
          { name: '数据中心', ViewURL:7 },
          { name: '组织与账户中心', ViewURL:8 }
        ]
      }
    },
    methods: {
    	loddate () {
    		
    	},
    	add () {
    		this.view.push({name: this.form.name, ViewURL: this.form.ViewURL })
    		this.form.ViewURL = ''
    		this.form.name = ''
    	}
    }
  }
</script>

<style scoped lang="scss">
  .card_wrap{
  	margin-top: 20px;
  	.card_list{
	  	padding: 10px 10px;
	  }
  }
</style>
