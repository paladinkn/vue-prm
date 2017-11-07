import Vue from 'vue';
import VueRouter from 'vue-router';
import {supplierMain, supplierPersonAdd} from '../views';
Vue.use(VueRouter);
const routes = [
	{path: '/', redirect: {name: 'main'}},
	{path: '/main', name:'main',component: supplierMain},
	{path: '/personadd', name:'personadd',component: supplierPersonAdd}
	]	
const router = new VueRouter({
	routes
})
export default router;