<template>
  <div>
    <div class="flex flex-justify" style="margin: 20px; margin-top: 20px;">
      <div><!-- 搜索框 -->
        <el-input placeholder="请输入内容" style="width: 360px;" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="text" @click="searchdialog.Dialog = true"> 高级搜索</el-button>
      </div>
      <div><!-- 添加按钮 -->
        <el-button type="primary" @click="addAccount">添加用户</el-button>
      </div>
    </div>
  <!-- 表格 -->
    <el-table :data="tableData4" style="width: 100%"  header-align="center" valign="center" stripe>
      <el-table-column prop="sequence" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="username" label="登录账号" align="center"></el-table-column>
      <el-table-column prop="store" label="所属门店" align="center"></el-table-column>
      <el-table-column prop="department" label="所属部门" align="center"></el-table-column>
      <el-table-column prop="phone" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="role" label="角色" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template slot-scope="scope" class="operation">
            <!-- <el-button style="padding: 0;" type="text" @click="DetailAccount(scope.row)">查看</el-button>
            <el-button style="padding: 0;" type="text" @click="EditAccount(scope.row)">编辑</el-button>
            <el-button style="padding: 0; color: #F56C6C;" type="text">禁用</el-button>
            <el-button style="padding: 0;" type="text">删除</el-button> -->
            <el-button style="margin:0;" size="mini" type="primary" @click="DetailAccount(scope.row)">查看</el-button>
            <el-button style="margin:0;" size="mini" type="primary" @click="EditAccount(scope.row)">编辑</el-button>
            <el-button style="margin:0;" size="mini" type="danger">禁用</el-button>
            <el-button style="margin:0;" size="mini" type="warning">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
      <div class="flex flex-x" style="margin-top: 10px;">
        <div class="block">
          <el-pagination background
          :page-size="100"
          layout="total, prev, pager, next, jumper"
          :total="400">
          </el-pagination>
        </div>
      </div>
  <!-- 高级搜索模态框 -->
    <el-dialog title="高级搜索" :visible.sync="searchdialog.Dialog">
      <el-form ref="searchdialog" :model="searchdialog" label-width="80px">

        <el-form-item label="时间：">
          <el-date-picker
            v-model="pickerOptions.time"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="center"
            style="width:80%">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="城市：">
          <el-checkbox v-model="searchdialog.city1" label="北京" border size="medium"></el-checkbox>
          <el-checkbox v-model="searchdialog.city2" label="上海" border size="medium"></el-checkbox>
          <el-checkbox v-model="searchdialog.city3" label="广州" border size="medium"></el-checkbox>
          <el-checkbox v-model="searchdialog.city4" label="深圳" border size="medium"></el-checkbox>
          <el-checkbox v-model="searchdialog.city5" label="苏州" border size="medium"></el-checkbox>
          <el-checkbox v-model="searchdialog.city6" label="海外" border size="medium"></el-checkbox>
        </el-form-item>
      <el-form-item label="类型：">
        <template>
          <el-radio v-model="searchdialog.type" label="1">商店</el-radio>
          <el-radio v-model="searchdialog.type" label="2">街店</el-radio>
        </template>
      </el-form-item>
      </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="consoleFromData">搜索</el-button>
          <el-button @click="searchdialog.Dialog = false;">取消</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchdialog: {
          startTime: '',
          endTime: '',
          type: [],
          resource: '',
          region: '',
          type:'',
          city1: '',
          city2: '',
          city3: '',
          city4: '',
          city5: '',
          city6: '',
          Dialog: false,
        },
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近半年',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一年',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);
            }
          }],
          time: '',
        },
        input5: '',
        select: '',
        tableData4: [{
          sequence: 1,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 2,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 3,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 4,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 5,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 6,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 7,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 8,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 9,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 10,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 11,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 12,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 13,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 14,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 15,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 16,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 17,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 18,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 19,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        },{
          sequence: 20,
          name: '王小虎',
          username: 'adminroot',
          store: '上海',
          department: '管理部门',
          phone:'13200000088',
          role: '角色1'
        }]
      }
    },
    methods: {
      consoleFromData () {
        console.log(this.searchdialog,this.pickerOptions.time[0], this.pickerOptions.time[1])
      },
      addAccount(){
        console.log(123)
        //路由跳转
        this.$router.push('/AddAccount')
      },
      EditAccount(data){ //跳转编辑页
        this.$router.push({ path:'/EditAccount', query:{id:data.sequence} })
        console.log(data.sequence) //element的表格组件 通过scope.row传递本行参数
      },
      DetailAccount(data){//跳转详情页
        this.$router.push({ path:'/DetailAccount', query:{id:data.sequence} })
      }
    }
  }
</script>

<style scoped lang="scss">
.cell button{
    padding: 7px;
    margin: 0 1 px;
}

</style>
