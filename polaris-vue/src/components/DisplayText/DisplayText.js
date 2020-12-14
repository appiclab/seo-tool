import ComponentHelpers from '../ComponentHelpers.js';
import DynamicTag from '../DynamicTag.js';

export const SIZE = ['default', 'small', 'medium', 'large', 'extraLarge'];
export default {
  props: {
    element: {
      type: String,
      default: 'p'
    },
    size: {
      type: String,
      default: 'default',
      validator: (v) => SIZE.indexOf(v) !== -1
    }
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        'Polaris-DisplayText',
        ['size'],
        this
      );
    }
  },
  components: {
    DynamicTag
  }
};
