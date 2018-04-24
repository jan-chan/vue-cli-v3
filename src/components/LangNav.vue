<template>
<nav>
  <div @click="setLang('en')" :class="{active: activeLang === 'en'}">ENG</div> |
  <div @click="setLang('hk')" :class="{active: activeLang === 'hk'}">HK</div>
</nav>
</template>

<script>
export default {
  name: 'lang-nav',
  computed: {
    activeLang() {
      return this.$store.getters['app/activeLang'];
    }
  },
  methods: {
    setLang(lang) {
      this.$store.dispatch('app/setLang', { lang: lang });
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '~@/style/vars.scss';

nav > div {
  display: inline-block;
  cursor: pointer;
  color: $font-color;
  &.active {
    color: $main-color;
    font-weight: bold;
  }
}
</style>
