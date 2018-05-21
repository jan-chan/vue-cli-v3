<template>
<div class="view columns is-centered" id="view-login">
  <article class="card is-rounded">
    <div class="card-content">
      <form @submit.prevent="login">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" v-model.trim="username" @focus="onFocus('username')" :placeholder="$t('signin.username')" :class="{'is-danger': err_username}" :disabled="processing">
            <span class="icon is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" v-model.trim="password" @focus="onFocus('password')" :placeholder="$t('signin.password')" :class="{'is-danger': err_password}" type="password" :disabled="processing">
            <span class="icon is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <p class="control">
          <label class="checkbox">
            <input type="checkbox"> Remember me
          </label>
        </p>
        <p class="control">
          <button type="submit" class="button is-primary is-fullwidth" :class="{'is-loading': processing}">
            {{ $t("signin.login") }}&nbsp;<i class="fa fa-sign-in-alt"></i>
          </button>
        </p>
      </form>
    </div>
  </article>
  <!-- <page-loader :active="showLoading" message="processing..."></page-loader> -->
</div>
</template>

<script>
import { create as createLibLogin } from '@/libs/login';
//
export default {
  name: 'login',
  components: {
    'page-loader': () => import('@/components/PageLoader'),
  },
  data() {
    return {
      username: '',
      password: '',
      err_username: false,
      err_password: false,
      processing: false,
    };
  },
  methods: {
    startProcessing() {
      this.processing = true;
    },
    endProcessing() {
      this.processing = false;
    },
    login() {
      this.err_username = this.username === '';
      this.err_password = this.password === '';
      if (this.username !== '' && this.password !== '') {
        this.startProcessing();
        createLibLogin(this).login({
          username: this.username,
          password: this.password,
          redirect: this.$route.query.redirect,
        });
      }
    },
    onFocus(field) {
      if (this['err_' + field] === true) {
        this['err_' + field] = false;
      }
    },
  },
};
</script>
