// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodding from './components/lodding/'
import header from './components/header/'
import store from '../src/store/store.js'

Vue.config.productionTip = false
Vue.use(lodding)
Vue.use(header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
