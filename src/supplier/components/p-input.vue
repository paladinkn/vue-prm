<template>
	<el-row class="base-format">
		<el-col :span="8">
			<span class="base-star" v-if="required">*</span>
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="16">
			<el-input 
				v-model="info.value" 
				:maxlength="max"
				v-on:keyup.native='info.value=watchData($event)'
				>
			</el-input>
			<p class="base-mark" v-if="mark" v-html="markFont"></p>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		props: ['info'],
		data: function() {
			var obj = {};
			return obj;
		},
		methods: {
			//输入框输入监控
			watchData: function(e) {
				if(this.info.rule) {
					if(this.info.rule.input == 'num') {
						return e.target.value.replace(/[^0-9-]*/g,"");
					}
					if(this.info.rule.input == 'identityCard') {
						return e.target.value.replace(/[^0-9X]*/g,"");
					}
					return e.target.value;
				}else {
					return e.target.value;
				}
			}
		},
		computed: {
			//错误提示
			markFont: function() {
				if(this.info.rule && this.info.rule.msg) {
					return this.info.rule.msg;
				}else{
					return '';
				}
			},
			//错误标识
			mark: function() {
				if(this.info.mark) {
					return true;
				}else{
					return false;
				}
			},
			//是否必填
			required: function() {
				if(this.info.rule&&this.info.rule.required) {
					return true;
				}else {
					return false;
				}
			},
			//输入的最大长度
			max: function() {
				if(this.info.rule) {
					if(this.info.rule.type == 'phone') {
						return 11;
					}
					if(this.info.rule.type == 'identityCard') {
						return 18;
					}
					if(this.info.rule.max) {
						return this.info.rule.max;
					}
				}else {
					return 1000000;
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
	
</style>