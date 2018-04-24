<template>
<div id="view-home">
  <img src="../assets/logo.png">
  <hello-world msg="Welcome to Your Vue.js App" />
</div>
</template>

<script>
export default {
  name: "home",
  components: {
    'hello-world': () => import('@/components/HelloWorld')
  },
  mounted() {
    console.log(process.env.VUE_APP_DEBUG);
  }
};
</script>
