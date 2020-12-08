export default {
  props: {
    url: {
      type: String,
      default: ""
    },
    external: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    target() {
      return this.external ? '_blank' : '';
    },
    rel() {
      return this.external ? 'noopener noreferrer' : '';
    }
  }
};
