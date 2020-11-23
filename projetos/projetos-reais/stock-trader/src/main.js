import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from './plugins/axios'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	router,
	axios,
	store,
	render: h => h(App),
}).$mount('#app')
