import Vue from 'vue';
import * as api from '@/libs/member';

export function checkLogin(app, to, from, next) {
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
export function createLib(owner) {
  return new Vue({
    data() {
      return {
        owner: owner,
      };
    },
    methods: {
      setMemberInfo(data) {
        console.log('setMemberInfo');
        this.owner.$store.dispatch('member/setInfo', data);
      },
      //
      login(data, auto) {
        api.login(
          data,
          auto ? this.loginOkAuto : this.loginOk,
          auto ? this.loginFailAuto : this.loginFail
        );
      },
      logout() {
        api.logout({}, this.logoutOk, this.logoutFail);
      },
      loginOk(data, auto) {
        console.log('loginOk');
        this.owner.$store.dispatch('app/setLogin', { login: true }).then(() => {
          this.owner.$store.dispatch('app/setAccessToken', {
            token: data.tokens.access_token,
          });
          this.owner.$store.dispatch('app/setRefreshToken', {
            token: data.tokens.refresh_token,
          });
          this.setMemberInfo(data.user);
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
        this.owner.$store.dispatch('member/clearInfo');
        this.owner.$router.push('/');
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
