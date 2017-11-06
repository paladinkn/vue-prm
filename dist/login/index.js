import Vue from 'vue';
import login from './login.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

new Vue({
	el: '#login',
	template: '<login/>',
	components: { login }
})


