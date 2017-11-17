import Vue from 'vue';
import VueRouter from 'vue-router';
import {supplierMain, supplierPersonAdd, supplierBusAdd, supplierPersonCheck, supplierBusCheck} from '../views';
Vue.use(VueRouter);
const routes = [
	{path: '/', redirect: {name: 'main'}},
	{path: '/main', name:'main',component: supplierMain},
	{path: '/personadd', name:'personadd',component: supplierPersonAdd},
	{path: '/busadd', name:'busadd',component: supplierBusAdd},
	{path: '/personcheck', name:'personcheck',component: supplierPersonCheck},
	{path: '/buscheck', name:'buscheck',component: supplierBusCheck},
	]	
const router = new VueRouter({
	routes
})
export default router;