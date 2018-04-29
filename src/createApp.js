import Vue from 'vue';
import App from './App';
import { createRouter } from './router/create';
import { createStore } from './store/create';
import { sync } from 'vuex-router-sync';

import { checkLogin } from '@/libs/login';
// import { createLocale } from '@/plugins/i18n'

export function createApp() {
  const store = createStore();
  const router = createRouter();
  sync(store, router);
  //
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  //
  // set i18n configurable, to add setter before i18n plugin
  Object.defineProperty(Vue.prototype, '$i18n', {
    get: function get() {},
    set: function set(i18n) {
      this._i18n = i18n;
    },
    configurable: true,
  });
  // inject i18n to all child components
  Vue.prototype.$i18n = require('@/plugins/i18n').createLocale();
  // app.$i18n = require('@/plugins/i18n').createLocale()

  // for all child components to get root app instance
  Vue.prototype.getApp = () => app.$children[0];

  // global guards of route: check login status
  router.beforeEach((to, from, next) => {
    checkLogin(app.$children[0], to, from, next);
  });

  //
  return { app, router, store };
}
