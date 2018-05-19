<template>
<div id="app">
  <section class="section">
    <div class="container">
      <div id="debugId" ref="debugId" v-show="false">{{ debugId }}</div>
      <div class="columns">
        <div class="column is-one-quarter">
          <side-menu/>
        </div>
        <div class="column">
          <router-view/>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      debugId: 1234,
    };
  },
  components: {
    'side-menu': () => import('@/components/SideMenu'),
  },
  created() {
    this.$i18n.locale = this.$store.getters['app/activeLang'];
  },
  mounted() {
    // console.log(process.env.VUE_APP_DEBUG);
  },
};
</script>

<style>
@import '~@/assets/styles/common.css';
</style>

<style lang="scss">
@import '~@/assets/styles/main.scss';
$variable-name: red;
#app {
  --h1-color: #{$variable-name};
}
</style>

<style scoped lang="scss">
@import '~@/assets/styles/vars.scss';

#app {
  color: $main-color;
}
</style>
