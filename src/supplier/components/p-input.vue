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
			obj.status = this.status;
			return obj;
		},
		methods: {

		},
		computed: {
			markFont: function() {
				if(this.info.rule && this.info.rule.msg) {
					return this.info.rule.msg;
				}else{
					return '';
				}
			},
			mark: function() {
				if(this.info.mark) {
					return true;
				}else{
					return false;
				}
			},
			required: function() {
				if(this.info.rule&&this.info.rule.required) {
					return true;
				}else {
					return false;
				}
			},
			max: function() {
				if(this.info.rule && this.info.rule.max) {
					return this.info.rule.max;
				}else {
					return 1000000;
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
	.base-format{
		height: 60px;
		margin: 10px;
		line-height: 60px;
		position: relative;
	}
	.base-star{
		color:#fa5555;
		font-size: 14px; 
	}
	.base-mark {
		position: absolute;
		line-height: 14px;
		color: #fa5555;
		font-size: 14px;
	}
</style>