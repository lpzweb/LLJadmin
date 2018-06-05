<template>
    <div class="chart-container">
        <el-row :gutter="20" class="card_wrap"> <!-- 头部卡片 -->
            <el-col :span="6">
              <div class="card flex flex-y flex-justify" style=" background: #ef6c6c;">
                <i class="fa fa-jpy card_icon"></i>
                <div class="flex flex-UpwentoDo">
                  <span class="card_des">充值总额</span>
                  <span class="card_mun">14,409,900</span>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="card flex flex-y flex-justify" style="background: #23c6c8;">
                <i class="fa fa-shopping-cart card_icon"></i>
                <div class="flex flex-UpwentoDo">
                  <span class="card_des">充值总额</span>
                  <span class="card_mun">19,980</span>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="card flex flex-y flex-justify">
                <i class="fa fa-ticket card_icon"></i>
                <div class="flex flex-UpwentoDo">
                  <span class="card_des">充值总额</span>
                  <span class="card_mun">95,005</span>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="card flex flex-y flex-justify" style="background: #f8ac59;">
                <i class="fa fa-paper-plane card_icon"></i>
                <div class="flex flex-UpwentoDo">
                  <span class="card_des">充值总额</span>
                  <span class="card_mun">802,234</span>
                </div>
              </div>
            </el-col>
        </el-row>
        <el-row>
          <el-col style="padding: 0 10px;" :span="15"> <!-- 折线图·本周情况 -->
            <div class="panel" id="lineChartWeek"></div>
          </el-col>
          <el-col style="padding: 0 10px;" :span="9" ><!-- 雷达图 -->
            <div class="panel" id="radarmap"></div>
          </el-col>
        </el-row>
        <el-row>

          <el-col style="padding: 0 10px;" :span="15"> <!-- 最新消息 -->
            <div class="panel">
              <p class="newBanner">最新消息</p>
              <el-table :data="tableData" width="100%" :show-header=false>
                <el-table-column align="center" width="140">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.newsTitle }}</span>
                  </template>
                </el-table-column>
                <el-table-column align="right" width="200">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col style="padding: 0 10px;" :span="9">
            <div class="panel" id="pie-1"></div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import '../assets/flex.css'

  export default {
    data () {
      return {
        lineChartWeek: null,
        histogramTopUp: null,
         tableData: [{
          date: '2016-05-02',
          newsTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          address: '上海市普陀区金沙江路 1518'
        }, {
          date: '2016-05-04',
          newsTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          address: '上海市普陀区金沙江路 1517'
        }, {
          date: '2016-05-01',
          newsTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          address: '上海市普陀区金沙江路 1519'
        }, {
          date: '2016-05-03',
          newsTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          address: '上海市普陀区金沙江路 1516'
        }, {
          date: '2016-05-03',
          newsTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          address: '上海市普陀区金沙江路 1516'
        }]
      }
    },
    methods: {
      drawLineChartWeek () {
        this.lineChartWeek = echarts.init(document.getElementById('lineChartWeek'))
        this.lineChartWeek.setOption({
          color:['#f56c6c', '#20a0ff'],
          title: {
            text: '本周情况'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['抓取次数', '掉落次数']
          },
          toolbox: {
            feature: {
              // saveAsImage: {}  //下载按钮
            }
          },
          grid: {
            left: '2%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap : false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type : 'value'
          }],
          series: [
            {
              name:'掉落次数',
              type:'line',
              stack: '总量',
              areaStyle: { normal: {} },
              data:[320, 332, 301, 334, 390, 330, 320],
            },
            {
              name:'抓取次数',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: { normal: {} },
              data:[900, 932, 901, 934, 1290, 1330, 920]
            }
          ]
        })
      },

      darwPieOne () {  //饼状图· 1
        this.PieOne = echarts.init(document.getElementById('pie-1'))
        this.PieOne.setOption({
          title : {
            text: '某站点用户访问来源',
            x:'center'
          },
          // color:[],
          tooltip : {
            trigger: 'item',
            // formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      },
      drawRadarMap () {
        this.RadarMap = echarts.init(document.getElementById('radarmap'))
        this.RadarMap.setOption({
          title: {
            text: '基础雷达图'
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            containLabel: true
          },
          radar: {
            // shape: 'circle',
            name: {
               textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '销售（sales）', max: 6500},
              { name: '管理（Administration）', max: 16000},
              { name: '信息技术（Information Techology）', max: 30000},
              { name: '客服（Customer Support）', max: 38000},
              { name: '研发（Development）', max: 52000},
              { name: '市场（Marketing）', max: 25000}
            ]
          },
          series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data : [
                  {
                      value : [4300, 10000, 28000, 35000, 50000, 19000],
                      name : '预算分配（Allocated Budget）'
                  },
                   {
                      value : [5000, 14000, 28000, 31000, 42000, 21000],
                      name : '实际开销（Actual Spending）'
                  }
              ]
          }]
        })
      },
      drawCharts () {
        this.drawLineChartWeek()
        this.darwPieOne()
        this.drawRadarMap()
      }
    },
    mounted: function () {
      this.drawCharts()
    },
    updated: function () {
      this.drawCharts()
    }
  }
</script>
<style scoped>
  .card_wrap{
    margin-bottom: 30px;
  }
  .card{
    overflow: hidden;
    color: #fff;
    height: 90px;
    border-radius: 5px;
    box-shadow: 0 0 25px #cac6c6;
    background: #23b7e5;
    padding: 0 30px;
    margin: 0 15px;
    text-align: right;
  }
  .card_icon{ font-size: 50px; }
  .card_mun{
    font-size: 30px;
    font-weight: 600;
  }
  .panel{
    margin: 5px;
    border-radius: 10px;
    width:100%;
    min-height:350px;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
  }
  .newBanner{
    font-family: 'Microsoft YaHei';
    color: #333;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px 10px;
    margin-bottom: ;
  }
</style>