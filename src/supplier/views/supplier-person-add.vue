<template>
	<el-row>
		<el-col :span="6">
			<p-input :info="name"></p-input>
		</el-col>
		<el-col :span="8">
			<p-input :info="phone"></p-input>
		</el-col>
		<el-col :span="8">
			<p-input :info="idCard"></p-input>
		</el-col>
		<el-col :span="8">
			<p-select :info="manage"></p-select>
		</el-col>
		<el-col :span="24">
			<el-button @click="subInfo()">保存</el-button>
		</el-col>
	</el-row>
</template>
<script>
var manageList = [
	{label: '零售类', value: 1},
	{label: '餐饮类', value: 2},
	{label: '服装类', value: 3},
	{label: '百货类', value: 4},
	{label: '娱乐类', value: 5},
]
	import {pInput, pSelect} from '../components';
	export default {
		data: function() {
			var obj = {};
			obj.name = {
				font: '姓名',
				value: 11
			}
			obj.phone = {
				font: '联系电话',
				value: '',
			}
			obj.idCard = {
				font: '身份证号码',
				value: '',
			}
			obj.manage = {
				font: '经营业态',
				list: manageList,
				value: 2
			}
			return obj;
		},
		mounted: function() {

		},
		methods: {
			subInfo: function() {
				this.manage.list = [];
				var jsonData = {};
				jsonData.name = this.name.value;
				jsonData.phone = this.phone.value;
				jsonData.idCard = this.idCard.value;
				jsonData.manage = this.manage.value;
				console.log(JSON.stringify(jsonData));
			},
		},
		components: {
			pInput: pInput,
			pSelect: pSelect
		}

	}
</script>