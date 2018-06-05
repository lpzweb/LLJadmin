<template>
  <div>
    <div class="block">
      <button class="button is-primary" @click="handleDownload">
             导出Excel
      </button>
    </div>
    <div class="filters">
      开始时间：<input type="datetime-local" v-model="timeStart" value="" />
      结束时间：<input type="datetime-local" v-model="timeEnd" value="" />
      <button class="button is-primary" @click="loadData" style="width: px;height: 35px;">
             查寻
      </button>
    </div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
	    <el-table-column type="index" width="50"> </el-table-column>
	    <el-table-column property="id" label="设备名称"> </el-table-column>
	    <el-table-column property="type.name" label="抓物名称"> </el-table-column>
	    <el-table-column property="region" label="出物成本价"> </el-table-column>
	    <el-table-column property="name" label="出物数量"> </el-table-column>
	    <el-table-column property="address" label="抓物名称"> </el-table-column>
	    <el-table-column property="contact" label="剩余数量"> </el-table-column>
	    <el-table-column property="phone" label="出物零售价"> </el-table-column>
	    <el-table-column property="devicesCount" label="启动币数/啵啵币"> </el-table-column>
	    <el-table-column property="devicesCount" label="启动币数/人民币"> </el-table-column>
	    <el-table-column property="devicesCount" label="启动次数"> </el-table-column>
	    <el-table-column property="devicesCount" label="抓物总收入/RMB"> </el-table-column>
	    <el-table-column property="devicesCount" label="抓物总收入/啵啵币"> </el-table-column>
	  </el-table>
    <!--<table class="table">
      <thead>
      <tr>
        <th>抓物序号</th>
        <th>设备名称</th>
        <th>抓物名称</th>
        <th>出物成本价</th>        
        <th>出物数量</th>
        <th>出物零售价</th>
        <th>启动币数/啵啵币</th>
        <th>启动币数/人民币</th>
        <th>启动次数</th>
        <th>抓物总收入/RMB</th>
        <th>抓物总收入/啵啵币</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product,index) in products">
        <td>{{ index+1 }}</td>
        <td>{{ product.DeviceName }}</td>
        <td>{{ product.ProductName }}</td>
        <td>{{ product.ProductCost }}</td>
        <td>{{ product.ProductCount }}</td>
        <td>{{ product.ProductPrice }}</td>
        <td>{{ product.PriceThreshold}}</td>
        <td>{{ product.RmbThreshold }}</td>
        <td>{{ product.LaunchTime }}</td>
        <td>{{ product.ProductAmount }}</td>
        <td>{{ product.TotalCoin }}</td>
      </tr>
      </tbody>
    </table>-->
  </div>
</template>

<style scoped lang="scss">
  .filters {
    padding-bottom: 20px;
    input {
      min-height: 40px;
      width: 300px;
      margin-right: 10px;
    }

    button {
      margin-left: 10px;
      margin-top: 4px;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        timeStart: null,
        timeEnd: null,
        products: null
      }
    },

    methods: {
      async loadData () {
        let data = {
          timeStart: (new Date(this.timeStart)).toISOString(),
          timeEnd: (new Date(this.timeEnd)).toISOString()
        }
        let rv = await (await this.$api.operations.getcard(data)).data
        this.products = rv.Datas
        console.log(this.products)
      },
      handleDownload () {
        import('../../vendor/Export2Excel').then(excel => {
          const tHeader = ['抓物序号', '设备名称', '抓物名称', '出物成本价', '出物数量', '出物零售价',
            '启动币数/啵啵币', '启动币数/人民币', '启动次数', '抓物总收入/RMB', '抓物总收入/啵啵币']
          const filterVal = ['index', 'DeviceName', 'ProductName', 'ProductCost', 'ProductCount',
            'ProductPrice', 'PriceThreshold', 'RmbThreshold', 'LaunchTime', 'ProductAmount', 'TotalCoin']
          const list = this.products
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel(tHeader, data, this.filename)
        })
      },
      formatJson (filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      }
    },
    async mounted () {
    }
  }
</script>
