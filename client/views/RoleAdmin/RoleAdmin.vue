<template>
  <div>
    <div class="flex flex-justify" style="margin: 20px;">
      <div><!-- 搜索框 -->
        <el-input placeholder="请输入内容" style="width: 360px;" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  <!-- 表格 -->
    <el-table :data="tableData4" style="width: 100%"  header-align="center" valign="center">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="name" label="角色名" width="130" align="center"></el-table-column>
      <el-table-column prop="store" label="角色备注" width="200" align="center"></el-table-column>
      <el-table-column prop="store" label="用户列表" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template slot-scope="scope" class="operation">
          <el-button style="padding: 0;" type="text" @click="RoleView()">视图</el-button>
          <el-button style="padding: 0;" type="text" @click="RoleAccess()">权限</el-button>
          <el-button style="padding: 0; color: #F56C6C;" type="text">禁用</el-button>
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
      RoleView(){ //路由跳转 -> 角色视图
        this.$router.push('/RoleView')
      },
      EditAccount(data){ //跳转编辑页
        this.$router.push({ path:'/EditAccount', query:{id:data.sequence} })
        console.log(data.sequence) //element的表格组件 通过scope.row传递本行参数
      },
      RoleAccess(){//跳转用户权限页 RoleAccess.vue
        // this.$router.push({ path:'/RoleAccess', query:{id:data.sequence} })
        this.$router.push('/RoleAccess')
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
