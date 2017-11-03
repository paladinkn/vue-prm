

import Vue from 'vue';
import supplier from './supplier.vue';
import './css/supplier.scss';
import util from '../util';
import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);
require('./mock');
new Vue({
	el: '#supplier',
	template: '<supplier/>',
	components: { supplier },
	router,
})





