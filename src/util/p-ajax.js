import axios from 'axios';
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