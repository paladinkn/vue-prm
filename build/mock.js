
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
	}
}
module.exports = mock;