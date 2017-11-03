<template>
	<div>
		<p-table :info="tData" v-on:jump="jumpPage"></p-table>
	</div>
</template>
<script>
import {pTable} from '../components';
import util from '../../util';
	export default {
		data: function() {
			var obj = {};
			obj.tData = {}
			return obj;
		},
		created: function() {
			var that = this;
			util.pajax({
				url: '/supplier/list',
				data: {page:1},
				success: function(data) {
					that.tData = data;
				},
				error: function() {

				}
			})
		},
		methods:{
			jumpPage: function(num) {
				console.log(num);
			}
		},
		components: {
			pTable
		}
	}
</script>