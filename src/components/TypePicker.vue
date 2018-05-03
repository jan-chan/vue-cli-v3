<template>
<div id="type-picker">
  <div class="tabs is-toggle is-centered">
    <ul>
      <li v-for="(type, index) in typeList" :key="index" :class="{'is-active': currentType === type.data }" @click="selectType(type.data)">
        <a>
          <span>{{ $t('type.title.' + type.data) }}</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'type-picker',
  components: {},
  data() {
    return {
      typeList: [
        {
          data: 'expense',
        },
        {
          data: 'income',
        },
        {
          data: 'transfer',
        },
      ],
    };
  },
  props: {
    currentType: {
      type: String,
      default: 'expense',
    },
  },
  computed: {},
  methods: {
    selectType(type) {
      this.$emit('selectType', type);
    },
  },
  mounted() {},
};
</script>
