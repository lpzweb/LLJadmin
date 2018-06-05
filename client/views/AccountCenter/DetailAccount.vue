<template>
  <div>
    <div class="form_wrap">
      <div class="data_wrap">
        <el-row class="row">
          <el-col :span="8" class="left">姓名：</el-col>
          <el-col :span="16" class="right">晓小小</el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="8" class="left">登录账号：</el-col>
          <el-col :span="16" class="right">admin</el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="8" class="left">所属门店：</el-col>
          <el-col :span="16" class="right">上海店</el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="8" class="left">所属部门：</el-col>
          <el-col :span="16" class="right">营销部</el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="8" class="left">联系电话：</el-col>
          <el-col :span="16" class="right">13200000000</el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="8" class="left">角色：</el-col>
          <el-col :span="16" class="right">角色</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        id: this.$route.query.id //用户列表页取回的用户id
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .form_wrap{
    margin:0 auto;
    margin-top: 30px; 
    max-width: 1000px;
    border-radius: 8px;
    border: 1px #fff solid;
    box-shadow: 0 0 25px #cac6c6;
    padding: 50px;
    .row{
      line-height: 50px;
      font-size: 15px;
      color: #333;
      .left{
        text-align: right;
      }
      .right{
        text-indent: 50px;
      }
    }
  }
</style>
