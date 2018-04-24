<template>
<div id="app">
  <top-nav/>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'top-nav': () => import('@/components/TopNav')
  }
};
</script>

<style>
@import '~@/style/common.css';
</style>

<style lang="scss">
$variable-name: red;
#app {
  --h3-color: #{$variable-name};
}
</style>

<style scoped lang="scss">
@import '~@/style/vars.scss';

#app {
  font-family: "Avenir", "Helvetica", "Arial", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
