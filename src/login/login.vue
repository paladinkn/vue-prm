<template>
	<div>
		<div>
			<span>账号</span><el-input v-model="acc"></el-input>
		</div>
		<div>
			<span>密码</span><el-input type="password" v-model="pwd"></el-input>
		</div>
		<el-button type="primary" plain @click="login">登录</el-button>
	</div>
</template>
<script>
import {pajax} from '../util'
	export default {
		data: function() {
			return {
				acc: '',
				pwd: ''
			};
		},
		methods: {
			login: function() {
				if(this.acc == 'pal' && this.pwd =='pal') {
					window.location.href="./supplier.html";
				}
				pajax.get('http://172.16.13.26:8080/j_spring_security_check?j_username=zhangxubo').then(function(data) {
					console.log(data);
				}).catch(function(error) {

				})
			}
		}
	}
</script>