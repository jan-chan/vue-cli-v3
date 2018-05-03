<template>
<div class="view" id="view-entry">
  <section>
    <div class="container">
      <div id="datepicker"></div>

      <div id="type-tab">
        <div class="tabs is-toggle is-centered">
          <ul>
            <li data='expense' :class="{'is-active': this.currentType === 'expense' }" @click="selectType">
              <a>
                <span>Expense</span>
              </a>
            </li>
            <li data='income' :class="{'is-active': this.currentType === 'income' }" @click="selectType">
              <a>
                <span>Income</span>
              </a>
            </li>
            <li data='transfer' :class="{'is-active': this.currentType === 'transfer' }" @click="selectType">
              <a>
                <span>Transfer</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="amount-input"></div>
      <div id="category-select"></div>
      <div id="payer-payee"></div>
      <div id="note-input"></div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'view-entry',
  components: {
    'lang-nav': () => import('@/components/LangNav'),
  },
  data() {
    return {
      currentType: 'expense',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters['app/loggedIn'];
    },
    memberName() {
      return this.$store.getters['member/name'];
    },
  },
  methods: {
    selectType(e) {
      this.currentType = e.currentTarget.getAttribute('data');
    },
  },
  mounted() {},
};
</script>
