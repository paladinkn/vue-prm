<template>
	<el-row>
		<el-tabs type="border-card">
			<el-tab-pane label="供应商信息">
				<el-col :span="8">
					<p-input :info="sname"></p-input>
				</el-col>
				<el-col :span="8">
					<p-input :info="managerName"></p-input>
				</el-col>
				<el-col :span="8">
					<p-input :info="phone"></p-input>
				</el-col>
				<el-col :span="8">
					<p-input :info="mobile"></p-input>
				</el-col>
				<el-col :span="8">
					<p-input :info="idCard"></p-input>
				</el-col>
				<el-col :span="8">
					<p-select :info="sCategory"></p-select>
				</el-col>
				<el-col :span="8">
					<p-select :info="malls"></p-select>
				</el-col>
				<el-col :span="8">
					<p-select :info="auths"></p-select>
				</el-col>
				<el-col :span="24" class="person-add-sub">
					<el-button @click="subInfo()">保存</el-button>
					<el-button>提交审核</el-button>
				</el-col>
			</el-tab-pane>
			<el-tab-pane label="审核流程">
				暂无信息
			</el-tab-pane>
		</el-tabs>
	</el-row>
</template>
<script>
	import {pInput, pSelect} from '../components';
	import {pajax} from '../../util';
	import api from '../api';
	export default {
		data: function() {
			var obj = {};
			obj.sname = {
				font: '供应商名称'
			}
			obj.managerName = {
				font: '联系人',
				value: 11
			}
			obj.phone = {
				font: '手机号',
				value: '',
			}
			obj.mobile = {
				font: '联系电话',
				value: '',
			}
			obj.idCard = {
				font: '身份证号码',
				value: '',
			}
			obj.sCategory = {
				font: '经营业态',
				list: [],
				mul: true
			}
			obj.malls = {
				font: '选择商场',
				list: [],
				mul: true
			}
			obj.auths = {
				font: '供应商权限',
				list: [],
			}
			return obj;
		},
		mounted: function() {
			var that = this;
			pajax({
				url: api.supplierPersonInit,
				data: {id: 1},
				success: function(res) {
					that.fixHandle(res);
				},
				error: function() {

				}
			})
		},
		methods: {
			fixHandle: function(info) {
				this.sCategory.list = info.categorys;
				this.malls.list = info.malls;
				this.auths.list = info.auths;
			},
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
<style type="text/css">
	.person-add-sub{
		text-align: center;
		margin-top: 30px;
	}
</style>