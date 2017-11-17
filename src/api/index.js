var server;
//本地环境
//server = 'local';
//小敏环境
server = 'mandy';
//测试环境
//server = 'dev';
var api = {
	//登录
	loginInter: '/login',
	//供应商列表
	supplierList: '/supplier/list',
	//新增个人供应商初始化
	supplierPersonAdd: '/supplier/person/init',
	//列表初始化
	supplierListInit: '/supplier/person/pals'
}
if(server == 'mandy') {
	api.loginInter = 'http://127.0.0.1:8099/mandy/j_spring_security_check?j_username=zhangxubo';
	api.supplierPersonInit = 'http://127.0.0.1:8099/mandy/supplier/edit';
}
export default api;