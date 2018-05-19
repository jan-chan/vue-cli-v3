<template>
<div></div>
</template>

<script>
import { create as createLib } from '@/libs/login';
export default {
  name: 'logout',
  created() {
    createLib(this).logout();
  },
};
</script>
