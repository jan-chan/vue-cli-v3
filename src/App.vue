<template>
<div id="app">
  <div id="debugId" ref="debugId" v-show="false">{{ debugId }}</div>
  <top-nav/>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      debugId: 1234
    }
  },
  components: {
    'top-nav': () => import ('@/components/TopNav')
  },
  created() {
    this.$i18n.locale = this.$store.getters['app/activeLang'];
  },
  mounted() {
    // console.log(process.env.VUE_APP_DEBUG);
  }
};
</script>

<style>
@import '~@/assets/styles/common.css';
</style>

<style lang="scss">
$variable-name: red;
#app {
  --h1-color: #{$variable-name};
}
</style>

<style scoped lang="scss">
@import '~@/assets/styles/vars.scss';

#app {
  font-family: "Avenir", "Helvetica", "Arial", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
