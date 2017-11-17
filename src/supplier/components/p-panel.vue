<template>
	<el-row class="panel-singe">
		<el-col :span="head">
			<span class="base-star" v-if="required">*</span>
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="cont">
			<span v-html="info.value"></span>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		props: ['info'],
		data: function() {
			var obj = {};
			obj.head = this.info.head || 8;
			obj.cont = this.info.cont || 16;
			return obj;
		},
		computed: {
			//是否必填
			required: function() {
				if(this.info.rule&&this.info.rule.required) {
					return true;
				}else {
					return false;
				}
			},
		}
	}
</script>
<style type="text/css" scoped>
	
</style>