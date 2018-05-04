<template>
<section class="view" id="view-entry">
  <div class="notification is-primary">
    <pre>{{ $data }}</pre>
  </div>

  <div id="datepicker"></div>

  <amount-input :currentAmount="currentAmount" @setAmount="setAmount" />
  <type-picker :currentType="currentType" @selectType="selectType" />
  <!-- <category-picker v-bind="currentSelection" @selectCategory="selectCategory" /> -->
  <category-picker :currentType="currentType" :currentCategory="currentCategory"  @selectCategory="selectCategory" />

  <div id="payer-payee"></div>
  <div id="note-input"></div>

  <div class="control">
    <button class="button is-primary is-fullwidth" @click="save">
      Save &nbsp;<i class="far fa-save"></i>
    </button>
  </div>
</section>
</template>

<script>
export default {
  name: 'view-entry',
  components: {
    'lang-nav': () => import('@/components/LangNav'),
    'type-picker': () => import('@/components/TypePicker'),
    'category-picker': () => import('@/components/CategoryPicker'),
    'amount-input': () => import('@/components/AmountInput'),
  },
  data() {
    return {
      currentType: 'expense',
      currentCategory: '',
      currentAmount: 0,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters['app/loggedIn'];
    },
    memberName() {
      return this.$store.getters['member/name'];
    },
    currentSelection() {
      // return this.$data;
      return {
        currentType: this.currentType,
        currentCategory: this.currentCategory,
      };
    },
  },
  methods: {
    selectType(type) {
      this.currentType = type;
      this.currentCategory = '';
    },
    selectCategory(category) {
      this.currentCategory = category;
    },
    setAmount(amount) {
      this.currentAmount = amount === '' ? 0 : amount;
    },
    save() {
      console.log(this.$data);
    }
  },
  mounted() {},
};
</script>
