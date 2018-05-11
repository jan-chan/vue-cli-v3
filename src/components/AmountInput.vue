<template>
<div id="amount-input">
  <div class="control">
    <input class="input" type="number" placeholder="Amount" v-model.number="editAmount" @input="setAmount">
  </div>
</div>
</template>

<script>
export default {
  name: 'amount-input',
  data() {
    return {
      editAmount: 0,
    };
  },
  props: ['currentAmount'],
  methods: {
    setAmount() {
      this.$emit('setAmount', this.editAmount);
    },
  },
  mounted() {
    this.editAmount = this.currentAmount;
  },
};
</script>
