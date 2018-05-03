<template>
<div id="side-menu" class="is-flex">
  <aside class="menu">
    <lang-nav/>
    <h1 class="title">{{ $t('message.welcome') }} {{ memberName }}</h1>
    <p class="menu-label">
      PUBLIC
    </p>
    <ul class="menu-list">
      <li><router-link to="/home">Home</router-link></li>
    </ul>
    <p class="menu-label">
      MEMBER
    </p>
    <ul class="menu-list">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/entry">Entry</router-link></li>
      <li>
        <a>Sub-section</a>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Setting</a></li>
        </ul>
      </li>
    </ul>
    <p class="menu-label">
      Auth
    </p>
    <ul class="menu-list">
      <li v-if="loggedIn">
        <router-link to="/logout">Logout</router-link>
      </li>
      <li v-else>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </aside>
</div>
</template>

<script>
export default {
  name: 'side-menu',
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
    // console.log(this.getApp().debugId);
    // console.log(this.getApp().$refs.debugId);
  },
};
</script>
