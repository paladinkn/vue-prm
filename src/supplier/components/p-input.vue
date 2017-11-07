<template>
	<el-row class="base-format">
		<el-col :span="6">
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="18">
			<el-input 
				v-model="info.value" 
				>
			</el-input>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		props: ['info'],
		data: function() {
			var obj = {};
			return obj;
		}
	}
</script>
<style type="text/css">
	.base-format{
		height: 50px;
		line-height: 50px;
		margin: 10px;
	}
</style>