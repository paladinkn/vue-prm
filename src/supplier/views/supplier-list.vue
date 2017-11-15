<template>
	<div>
		
		<p-table :info="tData" v-on:jump="jumpPage" v-if="st"></p-table>
	</div>
</template>
<script>
import {pTable} from '../components';
import {pajax} from '../../util';
import api from '../../api';
	export default {
		data: function() {
			var obj = {};
			obj.tData = {}
			obj.st = true;
			return obj;
		},
		created: function() {
			this.queryNum(1);
		},
		methods:{
			queryNum: function(page) {
				var that = this;
				pajax.post(api.supplierList, {page:page}).then(function(data) {
					console.log(data)
					that.tData = data;
				}).catch(function(error) {
					console.log(error);
				})
			},
			jumpPage: function(num) {
				this.queryNum(num);
			}
		},
		components: {
			pTable
		}
	}
</script>