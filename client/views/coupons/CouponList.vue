<template>
  <div>
  	<!--工具模块----------------->
  	  <el-col :span="24" class="tool">
		<el-button type="primary" size="medium"  @click="addStore">新增门店</el-button>
		<el-button type="primary" size="medium" @click.native="toggle">筛选</el-button>
		<el-button type="primary" size="medium" @click="centerDialogVisible = true">筛选</el-button>
	  </el-col>
	  <!--筛选框------------------------>
	  <el-dialog title="填写筛选信息" :visible.sync="centerDialogVisible" width="30%" center>
		  <span>
		  	<el-select v-model="value4" clearable placeholder="请选择">
	          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
	        </el-select>
	      <el-select v-model="value4" clearable placeholder="请选择">
	        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
	      </el-select>
	      <el-input v-model="input" placeholder="请输入内容" style="width: 300px;">
		  	<el-button slot="append" icon="el-icon-search"></el-button>
		  </el-input>
		  </span>
	  </el-dialog>
	  <!--弹出筛选框------------------------------------------>
      <el-col :span="24" class="screening" v-show="flag">
		  <el-select v-model="value4" clearable placeholder="请选择">
	        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
	      </el-select>
	      <el-select v-model="value4" clearable placeholder="请选择">
	        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
	      </el-select>
	      <el-input v-model="input" placeholder="请输入内容" style="width: 300px;float: right;">
		  	<el-button slot="append" icon="el-icon-search"></el-button>
		  </el-input>
      </el-col>
      <!--表格数据--------------------------------->
	  <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
	    <el-table-column type="index" width="50"> </el-table-column>
	    <el-table-column property="id" label="卡券兑换码"> </el-table-column>
	    <el-table-column property="type.name" label="卡券兑换情况"> </el-table-column>
	    <el-table-column property="region" label="卡券标题"> </el-table-column>
	    <el-table-column property="name" label="卡券金额/啵啵币"> </el-table-column>
	    <el-table-column property="address" label="卡券使用时间/S"> </el-table-column>
	    <el-table-column property="contact" label="基数"> </el-table-column>
	    <el-table-column property="phone" label="卡券生成时间"> </el-table-column>
	    <el-table-column property="devicesCount" label="卡券有效期"> </el-table-column>
	    <el-table-column property="devicesCount" label="使用门店"> </el-table-column>
	    <el-table-column property="devicesCount" label="卡券持有人"> </el-table-column>
	    <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="small" @click="addStore">编辑</el-button>
          <el-button type="danger" size="small" @click="">删除</el-button>
        </template>
		  </el-table-column>
	  </el-table>
	  <!--分页工具-->
	  <div class="block">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage4"
	      :page-sizes="[100, 200, 300, 400]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="400">
	    </el-pagination>
	  </div>
  </div>
</template>

<script>
// import { getvalue } from '../../until/until'

  export default {
    data () {
      return {
        tableData: [],
        options: [],
        value4: '',
        currentRow: null,
        flag: true,
        input: '',
        centerDialogVisible: false,
        currentPage4: 3
      }
    },

    methods: {
      toggle () {
        this.flag = !this.flag
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      addStore () {
        this.$router.push('/CouponEditor')
      },
      async loadData (page) {
        if (page) {
          this.params.page = page
        }
        let data = Object.assign({}, this.params)
        if (this.value4) {
          data.storeType = this.value4
        }
        let rv = await (await this.$api.stores.get(data)).data
        this.tableData = rv.stores
        this.pagination = rv.pagination
      }
    },

    async mounted () {
      let resp = await (await this.$api.stores.types()).data
      var l = resp.storeTypes.length
      for (var i = 0; i < l; i++) {
        this.options.push({value: '', label: ''})
        this.options[i].value = resp.storeTypes[i].id
        this.options[i].label = resp.storeTypes[i].name
      }
      this.loadData(this.value4, this.options)
    }
  }
</script>

<style>
	.tool{
		padding-bottom: 10px;
	}
	.screening{
		padding: 0 0 10PX 0;
	}
	.block{
		float: right;
	}
</style>
