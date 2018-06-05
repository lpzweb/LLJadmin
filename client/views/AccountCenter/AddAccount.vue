<template>
  <div>
    <div class="form_wrap">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="员工姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" prop="role">
          <el-select v-model="form.role" placeholder="请选择所属角色" style="width: 100%">
            <el-option label="角色1" value="角色1"></el-option>
            <el-option label="角色2" value="角色2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="登录账号" prop="username" class="is-required">
          <el-input v-model="form.username" placeholder="请输入登录账号"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="所属门店" prop="store">
              <el-select v-model="form.store" placeholder="请选择所属门店" style="width: 100%">
                <el-option label="门店1" value="门店1"></el-option>
                <el-option label="门店2" value="门店2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属部门" prop="department">
              <el-select v-model="form.department" placeholder="请选择所属部门" style="width: 100%">
                <el-option label="部门1" value="部门1"></el-option>
                <el-option label="部门2" value="部门2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
 export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登陆账号'));
      } else {
        if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^&*._]{8,}$/.test(value))){
          callback(new Error('账号长度8位以上，包含数字、大	小写字母'));
        } else {
          callback()
        }
      }
    }
    var checkPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (!(/^((13[0-9])|(15[^4])|(166)|(17[0-8])|(18[0-9])|(19[8-9])|(147,145))\d{8}$/.test(value))) {
          callback(new Error('请输入正确的手机号码'));
        } else {
          callback()
        }
      }
    };
    return {
      form: {
        name: '',
        username: '',
        store: '',
        department: '',
        phone: '',
        role: ''
      },
      rules: { //vue-ElementUi 表单验证
        name: [
          { required: true, message: '请输入员工姓名', trigger: 'change' },
          { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'change' }
        ],
        role: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        store: [
          { required: true, message: '请选择所属门店', trigger: 'change' }
        ],
        department: [
          { required: true, message: '请选择所属部门', trigger: 'change' }
        ],
        username: [
          { validator: checkUsername, trigger: 'change' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(
              this.form.name,
              this.form.username,
              this.form.store,
              this.form.department,
              this.form.phone,
              this.form.role
            )
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>

  .form_wrap{
    margin: 0 auto;
    max-width: 1000px;
    border-radius: 8px;
    border: 1px #fff solid;
    box-shadow: 0 0 25px #cac6c6;
    padding: 50px 80px;
    padding-bottom: 30px;
  }
</style>