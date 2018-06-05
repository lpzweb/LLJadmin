<template>
<div class="flex flex-UpwentoDo" style="min-height: 100%; width: 100%;">
  <div class="top">
    <div><h1>LLJ 夹机占运营平台</h1></div>
  </div>
  <div class="centre flex flex-x flex-y">
    <div class="login_box flex flex-justify">
      <div class="box_left flex flex-UpwentoDo">
        <div class="angle"><!-- 登录框右上角阴影 --></div>
        <div class="poster"><!-- 海报图片 背景图片 --></div>
      </div>
      <div class="box_right">
        <el-form :model="ruleForm2" status-icon :rules="rules3" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
          <h2 class="login_title"> </h2>
          <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码" @keyup.native.enter="login"></el-input>
          </el-form-item>
          <el-form-item prop="checkCode">
          	<div class="flex flex-justify">
          		<el-input type="password" v-model="ruleForm2.checkCode" auto-complete="off" placeholder="验证码" @keyup.native.enter="login"></el-input>
            	<identify :identifyCode="identifyCode" @click.native="createCode" style='margin-left: 10px;'></identify>
          	</div>
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
          <el-form-item style="width:100%; padding-top: 50px;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="submitForm('ruleForm2')" :loading="logining">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <div class="foot"></div>
</div>
</template>

<script>
	import md5 from 'js-md5'
	import userPath from '../../router/fullpath'
	import Identify from './identify.vue'
	import RoutingMatching from '../../until/until'
	import '../../assets/flex.css'
	import ElementUI from 'element-ui'
  export default {
  	components: {
  		Identify
  	},
    data () {
    	var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        } else if (value.toLowerCase( ) !== this.identifyCode.toLowerCase( )) {
          callback(new Error('验证码有误!'))
          this.createCode()
        } else {
          callback()
        }
      }
    	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback()
        }
      }
    	var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback()
        }
      }
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: '',
          checkCode: ''
        },
        rules3: {
        	checkCode: [
            { validator: validateCode, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validateUser, trigger: 'blur' }
          ]
        },
        checked: true,
        identifyCode: '',
        yw: ['SinInSet', 'SinInSets', 'store'],
        md: ['SinInSet','devices', 'products']
      }
    },
    methods: {
    	login () {
    		this.rules(this.ruleForm2.account)
    		this.$router.push('/Statistics')
    	},
    	rules (username) {
    		if (username === '运维') {
    			console.log(RoutingMatching(this.yw))
    			localStorage.setItem("token", '运维')
    			this.$router.options.routes.push(userPath.Integrals)
          this.$router.addRoutes(this.$router.options.routes)
    		} else if (username === '门店'){
    			localStorage.setItem("token", '门店')
          this.$router.options.routes.push(userPath.SinInSet)
          this.$router.addRoutes(this.$router.options.routes)
    		} else {
    			return null
    		}
    	},
    	submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            return false;
          }
        })
      },
//   async login () {
//    	let data = { username: this.ruleForm2.account, password: md5(this.ruleForm2.checkPass) }
//    	let rv = await (await this.$api.account.login(data)).data
//    	console.log(rv)
//    	if (rv.statuscode === 0) {
//    		this.$router.push('/Statistics')
//    		localStorage.setItem("token", JSON.stringify(rv))
////	        this.$router.options.routes.push(userPath.SinInSet)
////	        this.$router.addRoutes(this.$router.options.routes)
//    	}else {
//    		ElementUI.Message({
//				    message: `错误: ${rv.resultmsg}`,
//				    type: 'error'
//				  })
//    	}
//    },
      createCode() {
    		this.identifyCode = ''
    		var codeLength = 4;
    		var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的 
    		for (var i = 0; i < codeLength; i++) {
		        var charIndex = Math.floor(Math.random() * 36);
		        this.identifyCode += selectChar[charIndex];
		    }
    	}
   },
   mounted () {
      this.createCode()
      localStorage.clear()
    }
  }

</script>

<style scoped>
*{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif !important;
}
.centre{
  position: absolute;
  top: 100px;
  bottom: 80px;
  width: 100%;
  left: 0;
  overflow: auto;

  background: rgb(64,150,238);
  background: -moz-linear-gradient(-45deg,  rgba(64,150,238,1) 0%, rgba(64,150,238,1) 50%, rgba(102,177,255,1) 50%, rgba(102,177,255,1) 100%);
  background: -webkit-linear-gradient(-45deg,  rgba(64,150,238,1) 0%,rgba(64,150,238,1) 50%,rgba(102,177,255,1) 50%,rgba(102,177,255,1) 100%);
  background: linear-gradient(135deg,  rgba(64,150,238,1) 0%,rgba(64,150,238,1) 50%,rgba(102,177,255,1) 50%,rgba(102,177,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4096ee', endColorstr='#66b1ff',GradientType=1 );
}
.top{
  width: 100%;
  height: 100px;
  background: #fff;
  color: #333;
}
.top > div{
  width: 70%;
  margin: 0 auto;
}
.top h1{
  font-size: 35px;
  line-height: 100px;
  margin: 0;
}
.login_box{
  width: 1100px;
  height: 470px;
  background: #fff;
  background: rgba(255, 255, 255, 0);
}
.box_left{
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0);
}
.poster{
  width: 100%;
  height: 455px;
  background: #409EFF;
  background: url('../../assets/12dong.jpg') no-repeat;
  background-size: 768px 455px;
}
.box_right{
  width: 450px;
  height: 100%;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
}
.login_title{
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #409EFF;
  margin: 0;
  padding-bottom: 50px;
}
.angle{
  width: 20px;
  height: 20px;
  background:linear-gradient(to right bottom,transparent 50%,rgba(0,0,0,.2) 0)
  no-repeat 100% 0 / 3em 3em;
  position: relative;
  right: -100%;
  margin-left: -20px;
}
.foot{
  width: 100%;
  height: 80px;
  background: #333;
  position: fixed;
  bottom: 0px;
}
.code{
	width: 60% !important;
}
</style>
