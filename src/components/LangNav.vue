<template>
<nav>
  <div @click="setLang('en')" :class="{active: activeLang === 'en'}">ENG</div> |
  <div @click="setLang('hk')" :class="{active: activeLang === 'hk'}">HK</div> |
  <div @click="setLang('cn')" :class="{active: activeLang === 'cn'}">CN</div>
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
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLang', { lang: lang })
    }
  }
};
</script>

<style scoped lang="scss">
@import '~@/assets/styles/vars.scss';

nav > div {
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  color: $font-color;
  &.active {
    color: $main-color;
  }
}
</style>
