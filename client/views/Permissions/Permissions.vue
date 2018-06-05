<template>
  <div>
    <div class="flex flex-justify" style="margin: 20px; margin-top: 20px;">
      <div><!-- 搜索框 -->
        <el-input placeholder="请输入内容" style="width: 360px;" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div><!-- 添加按钮 -->
        <el-button type="primary" @click.native="dialogFormVisible = true">添加用户</el-button>
      </div>
    </div>
  <!-- 表格 -->
    <el-table :data="tableData4" style="width: 100%"  header-align="center" valign="center">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="权限名称" width="130" align="center"></el-table-column>
      <el-table-column prop="role" label="权限路由" width="200" align="center"></el-table-column>
      <el-table-column prop="view" label="所属视图" width="200" align="center"></el-table-column>
      <el-table-column prop="view" label="所属视图路由" width="200" align="center"></el-table-column>
      <el-table-column prop="note" label="权限备注" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template slot-scope="scope" class="operation">
          <el-button style="padding: 0;" type="text">编辑</el-button>
          <el-button style="padding: 0;" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
      <div class="flex flex-x" style="margin-top: 10px;">
        <div class="block">
          <el-pagination background :page-size="100" layout="total, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </div>
      <!--对话框模块 ---------------------------------------->
      <el-dialog title="添加权限" :visible.sync="dialogFormVisible">
				  <el-form :model="form">
				    <el-form-item label="权限名称" >
				      <el-input v-model="form.name" auto-complete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="权限路由" >
				      <el-input v-model="form.PrivilegeURL" auto-complete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="权限所属视图" >
				      <el-input v-model="form.region" auto-complete="off"></el-input>
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
    data() {
      return {
      	dialogFormVisible: false,
      	form: {
      		name: '',
      		ViewURL: ''
      	},
        input5: '',
        select: '',
        tableData4: []
      }
    },
    methods: {
      async loaddata () {
      	let rv = await (await this.$api.Privilege.get()).data
      	console.log(rv)
      }
    },
    mounted () {
      this.loaddata()
    }
  }
</script>

<style scoped lang="scss">
	.cell button{
	    padding: 7px;
	    margin: 0 1 px;
	}
</style>
