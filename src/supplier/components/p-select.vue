<template>
	<el-row class="base-format">
		<el-col :span="6">
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="18">
			<el-select v-model="info.value" :multiple="info.mul">
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
<style type="text/css">
	.base-format{
		height: 50px;
		line-height: 50px;
		margin: 10px;
	}
</style>