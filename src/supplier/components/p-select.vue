<template>
	<el-row class="base-format">
		<el-col :span="6">
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="18">
			<el-select v-model="info.value">
				<el-option 
					v-for="(it, index) in info.list"
					:key="it.index"
					:label="it.label"
					:value="it.value"
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
			console.log(this.info.list)
			return obj;
		},
		watch: {
			'info.list': {
				handler: function(v, ob) {
					console.log(111);
					console.log(v);
				},
				deep: true
			}
		},
		computed: {
			
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