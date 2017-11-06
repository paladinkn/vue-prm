<template>
<div>
	<el-table border :data="tData.mData">
		<el-table-column v-for="(it,index) in tData.hData" 
		  :key="index"
		  :prop="it.prop"
	      :label="it.label"
	      :width="it.width">
		</el-table-column>
	</el-table>
	<el-pagination
		layout="total,prev, pager, next"
		:total="tData.total"
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
		computed: {
			tData: function() {
				return this.info;
			}
		}
	}
</script>
<style type="text/css">
	.page-pos{
		text-align: center;
		margin-top: 30px;
	}
</style>