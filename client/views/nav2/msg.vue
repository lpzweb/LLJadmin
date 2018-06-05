<template>
	<div>
	  <el-button :plain="true" @click="open2">成功</el-button>
	  <el-button :plain="true" @click="open3">警告</el-button>
	  <el-button :plain="true" @click="open">消息</el-button>
	  <el-button :plain="true" @click="open4">错误</el-button>
	  <hr />
		  <el-alert
		    title="成功提示的文案"
		    type="success"
		    description="文字说明文字说明文字说明文字说明文字说明文字说明"
		    show-icon>
		  </el-alert>
		  <hr />
		  <el-alert
		    title="消息提示的文案"
		    type="info"
		    description="文字说明文字说明文字说明文字说明文字说明文字说明"
		    show-icon>
		  </el-alert>
		  <hr />
		  <el-alert
		    title="警告提示的文案"
		    type="warning"
		    description="文字说明文字说明文字说明文字说明文字说明文字说明"
		    show-icon>
		  </el-alert>
		  <hr />
		  <el-alert
		    title="错误提示的文案"
		    type="error"
		    description="文字说明文字说明文字说明文字说明文字说明文字说明"
		    show-icon>
		  </el-alert>
		  <hr />
		<el-row>
		  <el-button>默认按钮</el-button>
		  <el-button type="primary">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
		</el-row>
		<hr />
		<el-row>
		  <el-button plain>朴素按钮</el-button>
		  <el-button type="primary" plain>主要按钮</el-button>
		  <el-button type="success" plain>成功按钮</el-button>
		  <el-button type="info" plain>信息按钮</el-button>
		  <el-button type="warning" plain>警告按钮</el-button>
		  <el-button type="danger" plain>危险按钮</el-button>
		</el-row>
		<hr />
		<el-row>
		  <el-button round>圆角按钮</el-button>
		  <el-button type="primary" round>主要按钮</el-button>
		  <el-button type="success" round>成功按钮</el-button>
		  <el-button type="info" round>信息按钮</el-button>
		  <el-button type="warning" round>警告按钮</el-button>
		  <el-button type="danger" round>危险按钮</el-button>
		</el-row>
		<hr />
		<el-row>
		  <el-button icon="el-icon-search" circle></el-button>
		  <el-button type="primary" icon="el-icon-edit" circle></el-button>
		  <el-button type="success" icon="el-icon-check" circle></el-button>
		  <el-button type="info" icon="el-icon-message" circle></el-button>
		  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
		  <el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
	</div>
</template>

<script>
  export default {
    methods: {
      open () {
        this.$message('这是一条消息提示')
      },
      open2 () {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },

      open3 () {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },

      open4 () {
        this.$message.error('错了哦，这是一条错误消息')
      }
    }
  }
</script>
