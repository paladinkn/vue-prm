

import Vue from 'vue';
import supplier from './supplier.vue';
import './css/supplier.scss';
import util from '../util';
import router from './router';
console.log(router);
new Vue({
	el: '#supplier',
	template: '<supplier/>',
	components: { supplier },
	router,
})





