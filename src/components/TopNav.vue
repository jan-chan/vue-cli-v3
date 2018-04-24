<template>
<div id="top-nav">
  <lang-nav/>
  <router-link to="/home">Home</router-link> |
  <router-link to="/about">About</router-link>
</div>
</template>

<script>
export default {
  name: "top-nav",
  components: {
    'lang-nav': () => import('@/components/LangNav')
  }
};
</script>

<style scoped lang="scss">
@import '~@/style/vars.scss';

#top-nav {
  padding: 30px;
  a {
    color: $font-color;
    &.router-link-exact-active {
      color: $main-color;
      font-weight: bold;
    }
  }
}
</style>
