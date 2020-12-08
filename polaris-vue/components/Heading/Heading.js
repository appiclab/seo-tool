import DynamicTag from '../DynamicTag.js';

export default {
  components: {
    DynamicTag
  },
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  }
};
