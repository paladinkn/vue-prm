import Vue from 'vue';
import VueRouter from 'vue-router';
import {supplierList} from '../views';
Vue.use(VueRouter);
const routes = [
	{path: '', redirect: supplierList},
	{path: '/list/:id', component: supplierList}
	]	
const router = new VueRouter({
	routes
})
export default router;