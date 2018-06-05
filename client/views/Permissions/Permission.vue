<template>
	<div class="wrap">
		<el-collapse v-model="activeNames" @change="handleChange" accordion>
		  <el-collapse-item  v-for = "(view,index) in views" :title = "view.name + '：  ' + view.ViewURL"  :name="index">
		    <div class="card_wrap">
		    	<div class="icon">
		    		<i class="el-icon-edit"></i>&nbsp;&nbsp;
		    		<i class="el-icon-delete"></i>
		    	</div>
				<el-row :gutter="12">
				  <el-col :span="7" v-for = "child in view.childs" class = 'card_list'>
				    <el-card shadow="hover">
				      {{child.ViewName}}：&nbsp;&nbsp;{{child.ViewURL}}
				      <div class="icon">
				        <i class="el-icon-edit"></i>&nbsp;&nbsp;
				    	<i class="el-icon-delete"></i>
				      </div>
				    </el-card>
				  </el-col>
				  <el-col :span="7" class = 'card_list' @click.native="dialogFormPermission = true;transformPermission(index)">
				  	<div class="dialog">
				  		<i class="el-icon-circle-plus-outline dialog_icon"></i>
				  	</div>
				  </el-col>
				</el-row>
			</div>
		  </el-collapse-item>
		  <el-col :span="23" class = 'card_list' @click.native="dialogFormview = true">
			  <div style="box-shadow: 0 10px 25px #cac6c6; margin: 0 auto; background: white;border: 0;" class="dialog">
				<i class="el-icon-circle-plus-outline dialog_icon"></i>
			  </div>
		  </el-col>
		</el-collapse>
		<!--添加子路由-------------------------------->
		<el-dialog title="添加视图" :visible.sync="dialogFormview">
		  <el-form :model="Permissionform">
		    <el-form-item label="视图名称" >
		      <el-input v-model="Permissionform.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="视图路由" >
		      <el-input v-model="Permissionform.PrivilegeURL" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormview = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormview = false" @click.native = add >确 定</el-button>
		  </div>
		</el-dialog>
		<!--添加视图路由-------------------------------->
		<el-dialog title="添加权限" :visible.sync="dialogFormPermission">
			<el-form :model="viewform">
			    <el-form-item label="权限名称" >
			      <el-input v-model="viewform.name" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="权限路由" >
			      <el-input v-model="viewform.ViewURL" auto-complete="off"></el-input>
			    </el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormPermission = false">取 消</el-button>
			    <el-button type="primary" @click="dialogFormPermission = false" @click.native = add >确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	dialogFormPermission:false,
      	Permissionform: {
      		name: '',
      		PrivilegeURL: ''
      	},
      	dialogFormview: false,
      	viewform: {
      		name: '',
      		ViewURL: ''
      	},
        activeNames: [],
        views: [ 
          { 
          	name: '门店中心',
          	ViewURL:1,
          	childs: [
          	  {
          	  	ViewName: '编辑门店',
                ViewURL: '/1/a'
          	  },
          	  {
          	  	ViewName: '查看门店',
                ViewURL: '/1/b'
          	  }
          	]
          }
        ]
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      transformPermission (viewID) {
      	console.log(viewID)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
  	margin-top: 20px;
  	padding: 20px;
  	box-shadow: 0 10px 25px #cac6c6;
  	div.el-collapse-item__header{
  		font-weight: 600 ;
  	}
  	.icon {
  		float: right;
  		font-size: 20px;
  		line-height: 30px;
  		padding-right: 20px ;
  	}
  	.dialog {
  		padding: 10px 30px;
  		width: 40px;
  		height: 40px;
  		border: 1px solid #EBEEF5;
  		.dialog_icon {
  			font-size: 40px;
  			color: #909399;
  		}
  	}
  }
</style>
