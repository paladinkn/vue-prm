<template>
	<div @keyup.native = 'enterEvent'>
		<div>
			<span>账号</span><el-input v-model="username"></el-input>
		</div>
		<div>
			<span>密码</span><el-input type="password" v-model="password"></el-input>
		</div>
		<div><span v-html="markFont" class="mark-font"></span></div>
		<el-button type="primary" plain @click="login">登录</el-button>
	</div>
</template>
<script>
import {pajax, setCookie} from '../util';
import api from '../api';
	export default {
		data: function() {
			return {
				username: '',
				password: '',
				markFont: '',
			};
		},
		mounted: function() {
			var that = this;
			//监控页面回车提交
			document.onkeydown = function(e) {
				var theEvent = e || window.event;    
		        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;    
		        if (code == 13) { 
		        	that.login(); 
		            return false;    
		        }    
		        return true;    
			}
		},
		methods: {
			enterEvent: function() {
				console.log(22);
			},
			login: function() {
				var that = this;
				var jsonData = {};
				jsonData.username = this.username;
				jsonData.password = this.password;
				if(jsonData.username == '' || jsonData.password == '') {
					this.markFont = '请输入账号密码';
					return false;
				}
				console.log(jsonData);
				pajax.get(api.loginInter, jsonData).then(function(data) {
					console.log(data);
					if(data.code == 200) {
						setCookie('JSESSIONID', data.businessObj);
						window.location.href = './supplier.html';
					}else{
						that.markFont = '账号密码错误';
					}
				}).catch(function(error) {

				})
			}
		}
	}
</script>
<style type="text/css" scoped>
	.mark-font {
		font-size: 14px;
		color: #fa5555;
	}
</style>