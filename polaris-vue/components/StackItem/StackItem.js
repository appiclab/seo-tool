export default {
  polarisName: 'polaris-stack-item',
  props: {
    fill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'Polaris-Stack__Item': true,
        'Polaris-Stack__Item--fill': this.fill
      };
    }
  }
};
