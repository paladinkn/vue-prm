import handle from './handle';

handle.use('/pals', function(resp) {
	return {'pal':'palssss'};
})
handle.use('/supplier/list', function(info) {
	info = info.data;
	var jsonData = {};
	if(info.page == 1) {
		jsonData = {
			hData: [
				{prop: 'id',label: 'ID111',width: '200'},
				{prop: 'type',label: 'ID2',width: '200'},
				{prop: 'name',label: 'ID4',}
			],
			mData: [
				{id: 2,type: 'p', name:"pal"},
				{id: 3,type: 't', name:"palsss"},
				{id: 4,type: 't', name:"palsss"}
			],
			total: 50
		}
	}
	return jsonData;
})
