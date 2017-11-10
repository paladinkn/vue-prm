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
					<p-input :info="identityCard"></p-input>
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
	import {pajax, handle} from '../../util';
	import api from '../api';
	export default {
		data: function() {
			var obj = {};
			obj.sname = {
				font: '供应商名称',
				rule: {required: true, max: 5, msg: '请输入供应商名称'},
			}
			obj.managerName = {
				font: '联系人',
				value: '',
				rule: {required: true, msg: '请输入联系人'},
			}
			obj.phone = {
				font: '手机号',
				value: '',
				rule: {required: true, msg: '请输入手机号', type: 'phone', input: 'num'},
			}
			obj.mobile = {
				font: '联系电话',
				value: '',
				rule: {input: 'num'},
			}
			obj.identityCard = {
				font: '身份证号码',
				value: '',
				rule: {input: 'identityCard'},
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
			pajax.post(api.supplierPersonInit, {id:1}).then(function(data) {
				that.fixHandle(data);
			}).catch(function(error) {
				console.log(error);
			})
		},
		methods: {
			fixHandle: function(info) {
				this.sCategory.list = info.categorys;
				this.malls.list = info.malls;
				this.auths.list = info.auths;
			},
			subInfo: function() {
				var jsonData = {};
				jsonData.sname = handle.handleToKey(this,this.sname);
				jsonData.managerName = handle.handleToKey(this,this.managerName);
				jsonData.phone = handle.handleToKey(this,this.phone);
				jsonData.mobile = handle.handleToKey(this,this.mobile);
				jsonData.identityCard = handle.handleToKey(this,this.identityCard);
				/*jsonData.identityCard = this.phone.value;
				jsonData.idCard = this.idCard.value;
				jsonData.manage = this.manage.value;
				console.log(JSON.stringify(jsonData));*/
				console.log(JSON.stringify(jsonData))
			},
		},
		components: {
			pInput: pInput,
			pSelect: pSelect
		}

	}
	function handleToKey(o, v) {
		if(v.value == '' || v.value == null) {
			o.$set(v, 'mark', true);
		}else{
			o.$set(v, 'mark', false);
		}
		/*this.$set(this.sname, 'mark', true);*/
	}
</script>
<style type="text/css">
	.person-add-sub{
		text-align: center;
		margin-top: 30px;
	}
</style>