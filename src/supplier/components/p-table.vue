<template>
<div>
	<el-table border :data="info.mData">
		<el-table-column v-for="(it,index) in info.hData" 
		  :key="index"
		  :prop="it.prop"
	      :label="it.label"
	      :width="it.width">
		</el-table-column>
	</el-table>
	<el-pagination
		layout="total,prev, pager, next"
		:total="info.total"
		:page-size="10"
		@current-change="handleCurrentChange"
		class='page-pos'
	></el-pagination>
</div>
</template>
<script>
	export default {
		props: ['info', 'jump'],
		data: function() {
			var obj = {};
			
			return obj;
		},
		methods: {
			handleCurrentChange: function(val) {
				this.$emit('jump',val);
			}
		},
	}
</script>
<style type="text/css">
	.page-pos{
		text-align: center;
		margin-top: 30px;
	}
</style>