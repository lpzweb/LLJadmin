<template>
  <div class="concent">
    <div class="block">
      <button class="button is-primary" @click="handleDownload">
             导出Excel
      </button>
    </div>
    <div class="filters">
      开始时间：<input type="datetime-local" v-model="timeStart" value="" style="border: 1px solid skyblue;"/>
      结束时间：<input type="datetime-local" v-model="timeEnd" value="" />
      <button class="button is-primary" @click="loadData" style="width: px;height: 35px;">
             查寻
      </button>
    </div>
    <div class="summary">
    	<table border="0">
    		<tr>
    		  <th>充值人数<span style="font-size: 12px;color: #929292;font-weight: 400;">(人)</span></th>
    		  <th>新用户数<span style="font-size: 12px;color: #929292;font-weight: 400;">(人)</span></th>
    		</tr>
    		<tr>
    		  <td>{{rechargeMan}}</td>
    		  <td>{{newMan}}</td>
    		</tr>
    	</table>
    </div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
	    <el-table-column property="id" label="充值档次"> </el-table-column>
	    <el-table-column property="type.name" label="充值次数"> </el-table-column>
	    <el-table-column property="region" label="充值总额/RMB"> </el-table-column>
	  </el-table>
    <!--<table class="table">
      <thead>
      <tr>
        <th>充值档次/RMB</th>
        <th>充值次数</th>
        <th>充值总额/RMB</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product,index) in products">
        <td>{{ product.Price }}</td>
        <td>{{ product.RechargeRecord }}</td>
        <td>{{ product.TotalAmont }}</td>
      </tr>
      </tbody>
    </table>-->
  </div>
</template>

<style scoped lang="scss">
.summary{
  width: 100%;
  height:110px;
  background: white;
  margin-bottom:20px;
  padding: 20px 20px 20px 40px;
  table{
    text-align: center;
    tr{
      th{
        color: #5E5E5E;
        font-size: 15px;
        line-height: 40px;
      }
    }
  }
}
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
        products: null,
        rechargeMan: null,
        newMan: null
      }
    },

    methods: {
      async loadData () {
        let data = {
          timeStart: (new Date(this.timeStart)).toISOString(),
          timeEnd: (new Date(this.timeEnd)).toISOString()
        }
        let rv = await (await this.$api.operations.get(data)).data
        for (var i = 0; i < rv.datas.length; i++) {
          rv.datas[i].TotalAmont = rv.datas[i].Price * rv.datas[i].RechargeRecord
        }
        console.log(rv.datas.TotalAmont)
        this.products = rv.datas
        this.rechargeMan = rv.rechargeMan
        this.newMan = rv.newMan
      },
      handleDownload () {
        import('../../vendor/Export2Excel').then(excel => {
          const tHeader = ['充值档次/RMB', '充值次数', '充值总额/RMB']
          const filterVal = ['Price', 'RechargeRecord', 'TotalAmont']
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
