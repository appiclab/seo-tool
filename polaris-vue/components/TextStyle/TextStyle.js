import ComponentHelpers from '../ComponentHelpers.js';

export const VARIATION = ['positive', 'negative', 'strong', 'subdued'];
export default {
  props: {
    variation: {
      type: String,
      validator: v => VARIATION.indexOf(v) !== -1
    }
  },
  computed: {
    classes() {
      return ComponentHelpers.makeComponentClass('Polaris-TextStyle', ['variation'], this);
    }
  }
};
