<template>
	<el-row class="base-format">
		<el-col :span="head">
			<span class="base-star" v-if="required">*</span>
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="cont">
			<el-date-picker
		      v-model="info.value"
		      type="date"
		      placeholder="选择日期"
		      >
		    </el-date-picker>
			<p class="base-mark" v-if="mark" v-html="markFont"></p>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		props: ['info'],
		data: function() {
			var obj = {};
			console.log(this.info)
			obj.head = this.info.head || 8;
			obj.cont = this.info.cont || 16;
			return obj;
		},
		computed: {
			required: function() {
				if(this.info.rule&&this.info.rule.required) {
					return true;
				}else {
					return false;
				}
			},
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
				return this.info.mark || false;
			},
		}
	}
</script>