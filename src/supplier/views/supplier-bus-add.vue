<template>
	<el-row>
		<el-tabs type="border-card">
			<el-tab-pane label="供应商信息">
				<div>
					<el-row class="cont-head">供应商信息</el-row>
					<el-row>
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
					</el-row>
				</div>
				<div>
					<el-row class="cont-head">相关资质证件</el-row>
					<el-row class="qual">
						<el-card v-for="(item,index) in credentialsBean" class="qual-singe" 
								:key="index">
								{{item.mid}}
							<el-col :span="2">
								<p-panel :info="item.id"></p-panel>
							</el-col>
							<el-col :span="8">
								<p-input :info="item.cname"></p-input>
							</el-col>
							<el-col :span="8">
								<p-input :info="item.cnumber"></p-input>
							</el-col>
							<el-col :span="8">
								<p-date :info="item.validTime"></p-date>
							</el-col>
							<el-col :span="8">
								<p-img :info="item.img"></p-img>
							</el-col>
							<el-col :span="5" class="qual-det">
								<el-button type="danger" plain @click="detQual(index)">删除</el-button>
							</el-col>
						</el-card>
						<el-card class="qual">
							<el-col :span="23" class="qual-det">
								<el-button type="success" plain @click="addQual">新增资质</el-button>
							</el-col>
						</el-card>
					</el-row>
				</div>
				<div class="mar-t-mid">
					<el-row class="cont-head">营业执照信息</el-row>
					<el-row>
						<el-col :span="8">
							<p-input :info="bname"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="btype"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="address"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="legalPerson"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="registerCapital"></p-input>
						</el-col>
						<el-col :span="8">
							<p-date :info="businessHoursStr"></p-date>
						</el-col>
					</el-row>
				</div>
				<div class="mar-t-mid">
					<el-row class="cont-head">发票信息</el-row>
					<el-row>
						<el-col :span="8">
							<p-input :info="companyName"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="taxNumber"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="address"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="phone"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="bankName"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="bankAccountNumber"></p-input>
						</el-col>
						<el-col :span="8">
							<p-input :info="description"></p-input>
						</el-col>
					</el-row>
				</div>
				<el-row>
					<el-button>保存</el-button>
					<el-button>提交审核</el-button>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="审核流程">
				暂无信息
			</el-tab-pane>
		</el-tabs>
	</el-row>
</template>
<script>
	import { mapState } from 'vuex';
	import {pInput, pSelect, pPanel, pDate, pImg} from '../components';
	export default {
		data: function() {
			var obj = {};
			return obj;
		},
		computed: mapState({
			//供应商信息
			sname: state => state.busadd.sname,
			managerName: state => state.busadd.managerName,
			phone: state => state.busadd.phone,
			mobile: state => state.busadd.mobile,
			identityCard: state => state.busadd.identityCard,
			sCategory: state => state.busadd.sCategory,
			malls: state => state.busadd.malls,
			auths: state => state.busadd.auths,
			//相关资质信息
			credentialsBean: state =>state.busadd.credentialsBean,
			//营业执照信息
			bname: state => state.busadd.bname,
			btype: state => state.busadd.btype,
			address: state => state.busadd.address,
			legalPerson: state => state.busadd.legalPerson,
			registerCapital: state => state.busadd.registerCapital,
			businessHoursStr: state => state.busadd.businessHoursStr,
			//发票信息
			companyName: state => state.busadd.companyName,
			taxNumber: state => state.busadd.taxNumber,
			address: state => state.busadd.address,
			phone: state => state.busadd.phone,
			bankName: state => state.busadd.bankName,
			bankAccountNumber: state => state.busadd.bankAccountNumber,
			description: state => state.busadd.description,
		}),
		methods: {
			detQual: function(index) {
				var that = this;
				this.$store.commit({
					type: 'detQual',
					curIndex: index
				});
			},
			addQual: function() {
				this.$store.commit({
					type: 'addQual'
				});
			}
		},
		components: {
			pInput,
			pSelect,
			pPanel,
			pDate,
			pImg
		}
	}
</script>
<style type="text/css" scoped>
	.qual-det {
		height: 80px;
		line-height: 80px;
		text-align: right;
	}
</style>