import Vue from 'vue';
import Vuex from 'vuex';
import busadd from './modules/busadd';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		busadd,
	}
})