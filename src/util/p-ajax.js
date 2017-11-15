import axios from 'axios';
import {getCookie} from './p-cookie';
/*axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';*/
/*axios.defaults.withCredentials = true;*/
/*axios.defaults.auth = {
	JSESSIONID: getCookie('JSESSIONID'),
}*/
/*axios.defaults.headers['token'] = 'paladin';*/
/*axios.defaults.withCredentials=false;*/
/*axios.interceptors.request.use(function (config) { 

	if(getCookie('JSESSIONID')) {
		config.headers['JSESSIONID'] = getCookie('JSESSIONID');
	}
	console.log(config);
	//config.headers['JSESSIONID'] = 
	//config.headers = 2;
	return config;
   // return config;
}, function (err) {
    return Promise.reject(err);
});*/

var pajax = {
	get: function(url, data) {
		return new Promise(function(resolve, reject){
			axios.get(url, {
				params: data,
			}).then(function(response) {
				resolve(response.data);
			}).catch(function(error) {
				reject(error)
			})
		})
	},
	post: function(url, data) {
		return new Promise(function(resolve, reject){
			axios.post(url, data, {
			}).then(function(response) {
				console.log(response);
				resolve(response.data);
			}).catch(function(error) {
				reject(error)
			})
		})
	}
}
export default pajax;