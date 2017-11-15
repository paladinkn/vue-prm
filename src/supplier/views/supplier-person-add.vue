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
				<el-col :span="24">
					<p-input :info="description"></p-input>
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
	import {pajax, handle, getCookie} from '../../util';
	import api from '../../api';
	export default {
		data: function() {
			var obj = {};
			obj.sname = {
				//条目名称
				font: '供应商名称',
				//初始化值
				value: '',
				//输入规则，required:是否必填，默认false,max最大长度，msg错误时提示信息
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
				//type  校验类型，p-handle中具体写规则
				rule: {required: true, msg: '请输入有效的手机号码！', type: 'phone', input: 'num'},
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
				//下拉框列表，默认空
				list: [],
				//是否多选
				mul: true,
				rule: {required: true, msg:'请选择经营业态'}
			}
			obj.malls = {
				font: '选择商场',
				list: [],
				mul: true,
				rule: {required: true, msg:'请选择商场'}
			}
			obj.auths = {
				font: '供应商权限',
				list: [],
				rule: {required: true, msg:'请选择供应商权限'}
			}
			obj.description = {
				font: '业务员评述',
				type: 'textarea',
				head: 3,
				cont: 21,
				value: ''
			}
			return obj;
		},
		mounted: function() {
			var that = this;
			/*console.log(getCookie('JSESSIONID'));*/
			pajax.get(api.supplierPersonInit, {id: null}).then(function(data) {
				if(data.code == 200) {
					that.fixHandle(data.businessObj);
				}else{
					console.log(data.message);
				}
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
				jsonData.sCategory = handle.handleToKey(this,this.sCategory);
				jsonData.malls = handle.handleToKey(this,this.malls);
				jsonData.auths = handle.handleToKey(this,this.auths);
				jsonData.description = handle.handleToKey(this,this.description);
				console.log(JSON.stringify(jsonData))
				for(var it in jsonData) {
					if(jsonData[it] == false) {
						return ;
					}
				}
				pajax.post(api.supplierPersonInit, jsonData).then(function(data) {
					console.log(data);
					if(data.code == 200) {
						
					}else{
						console.log(data.message);
					}
				}).catch(function(error) {
					console.log(error);
				})
				console.log('success');
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