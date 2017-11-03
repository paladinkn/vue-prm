import axios from 'axios';
var info;
var _message = {};
var handle = {};
axios.interceptors.request.use(function(config) {
	info = {
		url: config.url,
		data:config.data
	}
	config.data = '';
	config.url = '/pal';
	return config;
})
axios.interceptors.response.use(function(response) {
   var obj = {};
   obj.data = handle.fire(info.url, info.data);
   return obj;
})
handle.use = function(type, fn){
	if(typeof _message[type] == 'undefined') {
		_message[type] = [fn]
	}else {
		_message[type].push(fn);
	}
}
handle.fire = function(type, data) {
	if(!_message[type]) return;
	var events = {
		type: type,
		data: data
	}
	return _message[type][0].call(this, events)
}
export default handle;




