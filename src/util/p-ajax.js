import axios from 'axios';
import {getCookie} from './p-cookie';
console.log(getCookie('JSESSIONID'));
/*axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';*/
/*axios.defaults.withCredentials = true;*/
/*axios.defaults.auth = {
	JSESSIONID: getCookie('JSESSIONID'),
}*/
/*axios.defaults.headers['token'] = 'paladin';*/
axios.interceptors.request.use(function (config) { 
	console.log(config);
	config.headers['JSESSIONID'] = getCookie('JSESSIONID');
	//config.headers = 2;
	return config;
    /*if (store.getters.getToken) {
        config.headers.Authorization = `Token ${store.getters.getToken}`;
    }*/
   // return config;
}, function (err) {
    return Promise.reject(err);
});
var pajax = {
	get: function(url, data) {
		return new Promise(function(resolve, reject){
			axios.get(url,data).then(function(response) {
				console.log(response);
				resolve(response.data);
			}).catch(function(error) {
				reject(error)
			})
		})
	},
	post: function(url, data) {
		return new Promise(function(resolve, reject){
			axios.post(url,data).then(function(response) {
				console.log(response);
				resolve(response.data);
			}).catch(function(error) {
				reject(error)
			})
		})
	}
}
export default pajax;