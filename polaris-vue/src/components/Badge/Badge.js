import ComponentHelpers from '../ComponentHelpers.js';

export const STATUS = ['default', 'success', 'info', 'attention', 'warning'];
export default {
  props: {
    status: {
      type: String,
      default: 'default',
      validator: (v) => STATUS.indexOf(v) !== -1
    }
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass('Polaris-Badge', ['status'], this);
    }
  }
};
