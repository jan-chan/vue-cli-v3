<template>
<div>
  <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: 'message-box',
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: var(--h1-color, blue);
}
</style>
