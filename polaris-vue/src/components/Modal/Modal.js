export default {
  name: 'Modal.vue',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    closeOnLayout: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      document.querySelector('body')
        .classList[this.show ? 'add' : 'remove']('modal-open');

      if (this.show && this.closeOnLayout) {
        this.$refs['modal'].addEventListener('click', this.closeOnclick)
      }
    }
  },
  methods: {
    closeOnclick(e) {
      if (e.target.getAttribute('role') === 'dialog') {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit('change', false);
      this.$refs['modal'].removeEventListener('click', this.closeOnclick)
    }
  }
};
