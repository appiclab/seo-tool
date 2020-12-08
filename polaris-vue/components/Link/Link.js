export default {
  props: {
    url: String,
    external: Boolean
  },
  computed: {
    target() {
      return this.external ? '_blank' : '';
    }
  },
  methods: {
    onClick (e) {
      this.$emit("click", e);
    }
  }
};
