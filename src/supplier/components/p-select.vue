<template>
	<el-row class="base-format">
		<el-col :span="8">
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
	}
</script>
<style type="text/css" scoped>
	.base-format{
		height: 60px;
		line-height: 60px;
		margin: 10px;
	}
	.base-select {
		width: 100%;
	}
</style>