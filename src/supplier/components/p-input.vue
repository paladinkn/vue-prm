<template>
	<el-row class="base-format">
		<el-col :span="head">
			<span class="base-star" v-if="required">*</span>
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="cont">
			<el-input 
				v-model="info.value" 
				:maxlength="max"
				v-on:keyup.native='info.value=watchData($event)'
				:type="curType"
				v-on:blur='blurEvent()'
				>
			</el-input>
			<p class="base-mark" v-if="mark" v-html="markFont"></p>
		</el-col>
	</el-row>
</template>
<script>
import {required, mark} from './mixin'
	export default {
		props: ['info'],
		mixins: [required, mark],
		data: function() {
			var obj = {};
			obj.head = this.info.head || 8;
			obj.cont = this.info.cont || 16;
			obj.curType = this.info.type || '';
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
			},
			//鼠标离开校验
			blurEvent: function() {
				var rule = this.info.rule;
				var val = this.info.value;
				if(!rule) return;
				if(rule.required) {
					if(val == ''){
						this.$set(this.info, 'mark', true);
						return;
					}else{
						this.$set(this.info, 'mark', false);
					}	
				}
				if(rule.type == 'phone') {
					var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
					console.log(2223);
					if(!myreg.test(val)) { 
					    this.$set(this.info, 'mark', true);
					}else {
						this.$set(this.info, 'mark', false);
					}
					return ;
				}
			},
		},
		computed: {
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