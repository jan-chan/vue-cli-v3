<template>
<div class="pageloader" :class="{'is-active': active}"><span class="title">{{ message }}</span></div>
</template>

<script>
export default {
  name: 'page-loader',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: 'Loading',
    },
  },
};
</script>

<style scoped lang="scss">




















.pageloader {
  background-color: rgba(200, 100, 50, 0.5);
}
.pageloader > span.title {
  color: red;
}
span.title {
  color: yellow;
}
<style>
