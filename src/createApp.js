import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/create'
import { createStore } from './store/create'
import { sync } from 'vuex-router-sync'

export function createApp () {
  const store = createStore()
  const router = createRouter()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
