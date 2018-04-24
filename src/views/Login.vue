<template>
<div class="view" id="view-login">
  <ul>
    <li>
      <div class="field-icon">
        <i class="material-icons">account_circle</i>
      </div><input v-model.trim="username" @focus="onFocus('username')" :placeholder="$t('signin.username')" :class="{'error': err_username}">
    </li>
    <li>
      <div class="field-icon">
        <i class="material-icons">lock</i>
      </div><input v-model.trim="password" @focus="onFocus('password')" :placeholder="$t('signin.password')" :class="{'error': err_password}" type="password">
    </li>
  </ul>
  <div class="button" id="button-login" @click="login">{{ $t("signin.login") }}</div>
</div>
</template>

<script>
import { createLib } from '@/libs/login'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      err_username: false,
      err_password: false
    }
  },
  methods: {
    login() {
      if ((this.username !== '') && (this.password !== '')) {
        // require('@/libs/login').createLib(this).login({ username: this.username, password: this.password })
        createLib(this).login({ username: this.username, password: this.password, redirect: this.$route.query.redirect })
      } else {
        this.err_username = (this.username === '')
        this.err_password = (this.password === '')
      }
    },
    onFocus(field) {
      if (this['err_' + field] === true) {
        this['err_' + field] = false
      }
    }
  },
  mounted() {
  }
};
</script>


<style scoped lang="scss">
@import '~@/assets/styles/vars.scss';

.button {
  background-color: $main-color;
  display: inline-block;
  padding: 8px 15px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
}
ul {
  margin: auto;
}
li {
  @extend %parentbox;
  margin: 20px;
  > * {
    @extend %childbox;
    display: inline-block;
  }
  .field-icon {
    margin-right: 5px;
  }
  i {
    font-size: 35px;
    color: $main-color;
  }
  input {
    font-size: 18px;
    width: 200px;
    padding: 5px;
    margin: 0;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: #000;
  }
  input.error {
    border-color: red;
    color: red;
  }
}
</style>
