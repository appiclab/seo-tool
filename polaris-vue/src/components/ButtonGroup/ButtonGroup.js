export default {
  props: {
    segmented: Boolean,
    default: false
  },
  computed: {
    classes() {
      return {
        'Polaris-ButtonGroup': true,
        'Polaris-ButtonGroup--segmented': this.segmented
      };
    }
  }
};
