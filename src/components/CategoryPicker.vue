<template>
<div id="category-picker">
  <div class="modal" :class="{'is-active': showModal}">
    <div class="modal-background" @click="toggleCategoryModal"></div>
    <div class="modal-content">
      <div class="box">
        <div class="buttons">
          <span class="button" v-for="(category, index) in categoryList" :key="index" :class="{'is-primary': currentCategory === category.data }" @click="selectCategory(category.data)">{{ $t('category.' + currentType + '.title.' + category.data) }}</span>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="toggleCategoryModal"></button>
  </div>
  <div class="control">
    <input class="input is-disabled" :value="currentCategoryTitle" :placeholder="$t('type.title.' + currentType) + ' Category'" readonly @click="toggleCategoryModal">
  </div>
</div>
</template>

<script>
export default {
  name: 'category-picker',
  components: {},
  data() {
    return {
      showModal: false,
      categoryListAll: {
        expense: [
          {
            data: 'transport',
          },
          {
            data: 'food',
          },
        ],
        income: [
          {
            data: 'salary',
          },
        ],
        transfer: [
          {
            data: 'transfer',
          },
        ],
      },
    };
  },
  props: {
    currentType: {
      type: String,
      default: 'expense',
    },
    currentCategory: {
      type: String,
    },
  },
  computed: {
    categoryList() {
      return this.categoryListAll[this.currentType];
    },
    currentCategoryTitle() {
      if (this.currentCategory === '') {
        return '';
      } else {
        return this.$i18n.t(
          'category.' + this.currentType + '.title.' + this.currentCategory
        );
      }
    },
  },
  methods: {
    selectCategory(type) {
      this.$emit('selectCategory', type);
      this.toggleCategoryModal();
    },
    toggleCategoryModal() {
      this.showModal = !this.showModal;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.modal-background {
  background-color: rgba(10, 10, 10, 0.4);
}
</style>
