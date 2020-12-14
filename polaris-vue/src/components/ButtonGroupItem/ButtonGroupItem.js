import ComponentHelpers from '../ComponentHelpers.js';

export default {
  props: {
    plain: Boolean
  },
  data: () => ({
    focused: false
  }),
  computed: {
    classes() {
      return ComponentHelpers.makeComponentClass(
        'Polaris-ButtonGroup__Item',
        ['focused', 'plain'],
        this
      );
    }
  }
};
