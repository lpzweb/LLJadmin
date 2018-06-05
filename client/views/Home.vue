<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'" @click.native = "toStatistics">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="10" class="logo" :class="collapsed?'logo-width':'logo-collapse-width'" style="border: none;" @click.native = "toStatistics">
				{{collapsed?sysName:''}}
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native.prevent="changePassword">修改密码</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo open" @open="handleopen" @close="handleclose" @select="handleselect"
					router v-show="!collapsed" id='open'>
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
  export default {
    data () {
      return {
        sysName: 'LLJ夹机占',
        collapsed: false,
        sysUserName: '',
        sysUserAvatar: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      toStatistics () {
      	this.$router.push('/Statistics')
      },
      onSubmit () {
        console.log('submit!')
      },
      handleopen () {
        console.log('handleopen')
      },
      handleclose () {
        console.log('handleclose')
      },
      handleselect: function (a, b) {
      },
      open4 () {
        this.$message.error('错了哦，这是一条错误消息')
      },
// 退出登录
      logout () {
      	window.location.reload()
        this.$router.push('/login')
        localStorage.clear()
        console.log('清除了')
      },
// 修改密码
      changePassword () {
        this.$router.push('/ChangePassword')
      },
// 折叠导航栏s
      collapse: function () {
        this.collapsed = !this.collapsed
        document.getElementById('open').style.width = 200 + 'px'
        document.getElementById('open').style.overflowX = 'hidden'
        document.getElementById('open').style.overflowY = 'auto'
      },
      showMenu (i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
      }
    },
    mounted () {
//    var username = JSON.parse(localStorage.getItem("token")).username
//    this.sysUserName = username ? username : 'marting'
      this.sysUserName = 'marting'
      this.sysUserAvatar = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527225898092&di=6236d1ce6efd506010b06b4f81eb1b98&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019b1155688c3100000127165eec95.jpg%401280w_1l_2o_100sh.png'
    }
  }
</script>

<style scoped lang="scss">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			box-shadow: 0 0 25px #4765A5;
			height: 60px;
			line-height: 60px;
			background: #0084B1;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				font-style: oblique;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgb(0, 132, 177);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:200px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				i::before{
					color: #36b0d8;
					margin-right:5px ;
				}
				box-shadow: 0 0 25px #cac6c6;
				flex:0 0 200px;
				width: 200px;
				.el-menu{
					background: white;
					width: 200px;
					height: 100%;
					.el-menu-item{
					  font-weight: 400;
					}
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 200px;
				width: 200px;
				.el-menu{
                    overflow-x: hidden;
                    overflow-y: scroll;
                }
                .el-menu::-webkit-scrollbar {/*滚动条整体样式*/
		            width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
		            height: 4px;
		        }
		        .el-menu::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		            border-radius: 5px;
		            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		            background: rgba(0,0,0,0.2);
		        }
		        .el-menu::-webkit-scrollbar-track {/*滚动条里面轨道*/
		            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		            border-radius: 0;
		            background: rgba(0,0,0,0.1);
		        }
			}
			.content-container {
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					line-height: 30px;
					.breadcrumb-inner {
						font-weight: 600;
						line-height: 30px;
						padding-left: 15px;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
			.content-container::-webkit-scrollbar {/*滚动条整体样式*/
		        width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
		        height: 4px;
		    }
		    .content-container::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		        border-radius: 5px;
		        // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		        background: rgba(0,0,0,0.2);
		    }
		    .content-container::-webkit-scrollbar-track {/*滚动条里面轨道*/
		        // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		        border-radius: 0;
		        background: rgba(0,0,0,0.1);
		    }
		}
	}
</style>
