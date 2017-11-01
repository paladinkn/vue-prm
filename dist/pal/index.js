

import Vue from 'vue';
import pal from './pal.vue';
import './public/pal.scss';
import util from '../util';
new Vue({
	el: '#pal',
	template: '<pal/>',
	components: { pal },
})
/*util.setCookie('pal', 'palas',1);
setTimeout(function() {
	console.log(util.getCookie('pal'));
},2000);*/




