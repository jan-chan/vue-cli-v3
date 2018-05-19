import Vue from 'vue';
import * as api from '@/libs/member';

export function check(app, to, from, next) {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    (app.$children.length === 0 ||
      !app.$children[0].$store.getters['app/loggedIn'])
  ) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    });
    return;
  }
  next();
}
//
export function create(owner) {
  return new Vue({
    data() {
      return {
        owner: owner,
      };
    },
    methods: {
      login(data, auto) {
        api.login({
          data: data,
          callbackOk: auto ? this.loginOkAuto : this.loginOk,
          callbackFail: auto ? this.loginFailAuto : this.loginFail,
          callbackFinally: this.owner.hidePageLoad,
        });
      },
      logout() {
        api.logout({
          callbackOk: this.logoutOk,
          callbackFail: this.logoutFail,
        });
      },
      loginOk(data, auto) {
        console.log('loginOk');
        this.owner.$store.dispatch('app/setLogin', true);
        this.owner.$store.dispatch('app/setTokens', {
          accessToken: data.tokens.access_token,
          refreshToken: data.tokens.refresh_token,
        });
        // After set member info, redirect, if needed,
        this.owner.$store.dispatch('member/setInfo', data.user).then(() => {
          if (!auto) {
            this.owner.$router.push(data.redirect || '/');
          }
        });
      },
      loginFail(data, auto) {
        console.log('loginFail');
        if (!auto) {
          alert(data.msg);
        } else {
          console.log(data);
        }
      },
      logoutOk(data) {
        console.log('logoutOk');
        console.log(data);
        this.owner.$store.dispatch('app/logout');
        // After clear member info, redirect to home
        this.owner.$store.dispatch('member/clearInfo').then(() => {
          this.owner.$router.push('/');
        });
      },
      logoutFail(data) {
        console.log('logoutFail');
        console.log(data);
        this.owner.$router.push('/');
      },
      loginOkAuto(data) {
        this.loginOk(data, true);
      },
      loginFailAuto(data) {
        this.loginFail(data, true);
      },
    },
  });
}
