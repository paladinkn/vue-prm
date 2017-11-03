import Vue from 'vue';
import VueRouter from 'vue-router';
import {supplierMain} from '../views';
Vue.use(VueRouter);
const routes = [
	{path: '/', redirect: {name: 'main'}},
	{path: '/main', name:'main',component: supplierMain}
	]	
const router = new VueRouter({
	routes
})
export default router;