<template>
<div>
  <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    msg: String
  },
  mounted() {
    // console.log(this.$store.state.app.lang)
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: var(--h3-color, blue);
}
</style>
