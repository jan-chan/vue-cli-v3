<template>
<div></div>
</template>

<script>
import { createLib } from '@/libs/login'
export default {
  name: 'logout',
  created() {
    createLib(this).logout()
  }
};
</script>
