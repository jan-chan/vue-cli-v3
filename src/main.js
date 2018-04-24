import Vue from 'vue'
import App from './App'

import { createRouter } from './router/create'
import { createStore } from './store/create'
import { sync } from 'vuex-router-sync'

const router = createRouter()
const store = createStore()

Vue.config.productionTip = false

sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
