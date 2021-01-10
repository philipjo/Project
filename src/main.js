import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'

import VueElementLoading from 'vue-element-loading'
Vue.component('VueElementLoading', VueElementLoading)



window.axios = require('axios')
import axios from 'axios'
axios.defaults.timeout = 60000;



Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
