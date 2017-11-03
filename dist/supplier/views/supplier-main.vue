<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="供应商列表">
				<supplierList></supplierList>
			</el-tab-pane>
			<el-tab-pane label="我的供应商">
				<supplierMy></supplierMy>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import supplierList from './supplier-list.vue';
import supplierMy from './supplier-my.vue';
import util from '../../util';
export default {
	data: function() {
		util.pajax({
			url: '/pals',
			data: {a:1},
			success: function(data) {
				console.log(data)
			},
			error: function() {

			}
		})
		return {};
	},
	components: {
		supplierList: supplierList,
		supplierMy: supplierMy
	}
}
</script>