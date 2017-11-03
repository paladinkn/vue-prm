<template>
	<div>
		<el-table border :data="supperListData">
			<el-table-column  
			  prop="id"
		      label="ID"
		      width="180">
			</el-table-column>
			<el-table-column  
			  prop="type"
		      label="供应商类型"
		      width="180">
			</el-table-column>
			<el-table-column  
			  prop="name"
		      label="供应商名称"
		      >
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data: function() {
			var obj = {
				supperListData: [{
					id: 1,
					type: 'pals',
					name: 'paladin'
				},{
					id: 1,
					type: 'pals',
					name: 'paladin'
				},{
					id: 1,
					type: 'pals',
					name: 'paladin'
				}]
			}
			return obj;
		},
		mounted: function() {
			
		}
	}
</script>