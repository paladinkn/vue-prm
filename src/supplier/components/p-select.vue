<template>
	<el-row class="base-format">
		<el-col :span="8">
			<span class="base-star" v-if="required">*</span>
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="16">
			<el-select v-model="info.value" :multiple="info.mul" class="base-select">
				<el-option 
					v-for="(it, index) in info.list"
					:key="it.index"
					:label="it.name"
					:value="it.id"
					>
				</el-option>
			</el-select>
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
		}
	}
</script>
<style type="text/css" scoped>
	
</style>