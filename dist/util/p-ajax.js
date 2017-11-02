import axios from 'axios';
var pajax = function(info) {
		axios.post(info.url,info.data)
		.then(function(response){
			info.success(response.data);
		})
		.catch(function(error){
		    info.error(error);
		});
}



export {pajax}