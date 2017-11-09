
function s(o){
	return JSON.stringify(o);
}
var mock = {
	use: function(app) {
		this.supplier(app);
	},
	supplier: function(app) {

		//测试
		app.post('/pal', function(req, resp) {
			var obj = 'mock data';
			resp.end(obj);
		})



		//供应商列表
		app.post('/supplier/list', function(req, resp) {
			var page = req.body.page;
			var obj;
			if(page == 1) {
			 	obj = {
					hData: [
						{prop: 'id',label: 'ID',width: '200'},
						{prop: 'type',label: '供应商类型',width: '200'},
						{prop: 'name',label: '供应商名称',}
					],
					mData: [
						{id: 1,type: 'p', name:"pal"},
						{id: 2,type: 't', name:"palsss"},
						{id: 3,type: 't', name:"palsss"}
					],
					total: 50 
				};
			}else if(page == 2){
			 	obj = {
					hData: [
						{prop: 'id',label: 'ID',width: '200'},
						{prop: 'type',label: '供应商类型',width: '200'},
						{prop: 'name',label: '供应商名称',}
					],
					mData: [
						{id: 4,type: 'p', name:"pal"},
						{id: 5,type: 't', name:"palsss"},
						{id: 6,type: 't', name:"palsss"}
					],
					total: 50 
				};
			}
			obj = s(obj);
			resp.end(obj);
		})



		//新增个人供应商初始化
		app.post('/supplier/person/init', function(req, resp) {
			var obj = {};
			obj = {
				supplierBean: null,
				categorys: categorys(),
				malls: malls(),
				auths: auths()
			}
			obj = s(obj);
			resp.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			resp.end(obj);
		})

		
	}
}
//经营业态
function categorys() {
	return [
		{name: '零售类', id: 1},
		{name: '餐饮类', id: 2},
		{name: '服装类', id: 3},
		{name: '百货类', id: 4},
		{name: '娱乐类', id: 5},
	]
}
//商场
function malls() {
	return [
		{name: '中东大市场1', id: 1},
		{name: '中东大市场2', id: 2},
		{name: '中东大市场3', id: 3},
		{name: '中东大市场4', id: 4},
	]
}
//供应商权限
function auths() {
	return [
		{name: '集团供应商', id: 1},
		{name: '商场供应商', id: 2},
	]
}
module.exports = mock;