<template>
  <div>
    <div class="flex flex-justify" style="margin: 20px;">
      <div><!-- 搜索框 -->
        <el-input placeholder="请输入内容" style="width: 360px;" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="text" @click="searchdialog.Dialog = true"> 高级搜索</el-button>
      </div>
      <div><!-- 添加按钮 -->
        <el-button type="primary">添加商铺</el-button>
      </div>
    </div>
  <!-- 表格 -->
    <el-table :data="tableData4" style="width: 100%" max-height="500" header-align="center" valign="center">
      <el-table-column prop="date" label="日期" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="province" label="省份" width="120" align="center"></el-table-column>
      <el-table-column prop="city" label="市区" width="120" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-edit"></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
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
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      consoleFromData () {
        console.log(this.searchdialog,this.pickerOptions.time[0], this.pickerOptions.time[1])
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
