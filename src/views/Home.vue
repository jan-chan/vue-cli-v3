<template>
<div class="view" id="view-home">
  <img src="@/assets/images/logo.png">
  <message-box msg="I'm a message box" />
</div>
</template>

<script>
export default {
  name: 'home',
  components: {
    'message-box': () => import('@/components/MessageBox')
  }
};
</script>
