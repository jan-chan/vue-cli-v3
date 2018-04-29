<template>
<div id="top-nav">
  <lang-nav/>

  <div>{{ $t('message.welcome') }} {{ memberName }}</div>

  <router-link to="/home">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <template v-if="loggedIn">
    <router-link to="/logout">Logout</router-link>
  </template>
  <template v-else>
    <router-link to="/login">Login</router-link>
  </template>
</div>
</template>

<script>
export default {
  name: 'top-nav',
  components: {
    'lang-nav': () => import('@/components/LangNav'),
  },
  computed: {
    loggedIn() {
      return this.$store.getters['app/loggedIn'];
    },
    memberName() {
      return this.$store.getters['member/name'];
    },
  },
  methods: {},
  mounted() {
    console.log(this.getApp().debugId);
    console.log(this.getApp().$refs.debugId);
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/styles/vars.scss';

#top-nav {
  a {
    font-weight: bold;
    color: $font-color;
    &.router-link-exact-active {
      color: $main-color;
    }
  }
}
</style>
