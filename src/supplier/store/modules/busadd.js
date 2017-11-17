
function credentialsBeanSinge() {
	var o = {
		id: {
			font: '证件ID',
			value: 0,
			head: 20,
			cont: 4,
			rule: {required: true},
		},
		cname: {
			font: '证件名称',
			value: '',
			rule: {required: true, max: 5, msg: '请输入证件名称'},
		},
		cnumber: {
			font: '证件号码',
			value: '',
			rule: {required: true, input: 'num', msg: '请输入证件号码'},
		},
		validTime: {
			font: '有效期至',
			value: '',
			rule: {required: true, msg: '请选择有效日期'},
		},
		img: {
			font: '上传照片',
			value: '',
			rule: {required: true, msg: '请上传图片'},
		},
	}
	return o;
}


const state = {
	sname: {
		font: '供应商名称',
		value: '',
		rule: {required: true, max: 5, msg: '请输入供应商名称'},
	},
	managerName: {
		font: '联系人',
		value: '',
		rule: {required: true, msg: '请输入联系人'},
	},
	phone: {
		font: '手机号',
		value: '',
		rule: {required: true, msg: '请输入有效的手机号码！', type: 'phone', input: 'num'},
	},
	mobile: {
		font: '联系电话',
		value: '',
		rule: {input: 'num'},
	},
	identityCard: {
		font: '身份证号码',
		value: '',
		rule: {input: 'identityCard'},
	},
	sCategory: {
		font: '经营业态',
		list: [],
		mul: true,
		rule: {required: true, msg:'请选择经营业态'}
	},
	malls: {
		font: '选择商场',
		list: [],
		mul: true,
		rule: {required: true, msg:'请选择商场'}
	},
	auths: {
		font: '供应商权限',
		list: [],
		rule: {required: true, msg:'请选择供应商权限'}
	},
	credentialsBean: [],
	markId: 0,
	bname: {
		font: '名称',
		value: '',
		rule: {required: true, msg: '请输入名称'},
	},
	btype: {
		font: '类型',
		value: '',
		rule: {required: true, msg: '请输入类型'},
	},
	address: {
		font: '住所',
		value: '',
		rule: {required: true, msg: '请输入住所'},
	},
	legalPerson: {
		font: '法定代表人',
		value: '',
		rule: {required: true, msg: '请输入法定代表人'},
	},
	registerCapital: {
		font: '注册资本',
		value: '',
		rule: {required: true, msg: '请输入注册资本'},
	},
	businessHoursStr: {
		font: '营业时间',
		value: '',
		rule: {required: true, msg: '请选择营业时间'},
	},
	companyName: {
		font: '单位名称',
		value: '',
	},
	taxNumber: {
		font: '纳税人识别码',
		value: '',
	},
	address: {
		font: '地址',
		value: '',
	},
	phone: {
		font: '电话',
		value: '',
	},
	bankName: {
		font: '开户行',
		value: '',
	},
	bankAccountNumber: {
		font: '银行账户',
		value: '',
	},
	description: {
		font: '业务员评述',
		value: '',
	},
}
const mutations = {
	addQual: function(state, payload) {
		state.markId++;
		let curCred = credentialsBeanSinge();
		curCred.id.value = state.markId;
		state.credentialsBean.push(curCred);

	},
	detQual: function(state, payload) {
		state.credentialsBean.splice(payload.curIndex,1)
	}
}

export default {
	state,
	mutations
}