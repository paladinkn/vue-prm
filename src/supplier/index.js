

import Vue from 'vue';
import supplier from './supplier.vue';
import './css/supplier.scss';
import util from '../util';
import router from './router';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);
new Vue({
	el: '#supplier',
	template: '<supplier/>',
	components: { supplier },
	router,
	store
})





