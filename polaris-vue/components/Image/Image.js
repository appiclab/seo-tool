export default {
  props: {
    alt: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      default: ""
    },
    sourceSet: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    finalSourceSet() {
      return this.sourceSet.map((item) => {
        return `${item.source} ${item.descriptor}`;
      }).join(',');
    }
  }
};
