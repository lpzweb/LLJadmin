<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import userPath from './router/fullpath'
export default {
  methods: {
  	al () {
	  if (!localStorage.getItem("token")) {
//	     this.$router.push('/login')
	  } else if (localStorage.getItem("token").token === '运维') {
          this.$router.options.routes.push(userPath.Integrals)
          this.$router.addRoutes(this.$router.options.routes)
    	} else if (localStorage.getItem("token").token === '门店'){
          this.$router.options.routes.push(userPath.SinInSet)
          this.$router.addRoutes(this.$router.options.routes)
    		}
	}
  },
  created: function() {
	this.al()
  }
}
</script>

<style lang="scss">
body {
	margin: 0px;
	padding: 0px;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 15px;
	-webkit-font-smoothing: antialiased;
}
</style>
