import ComponentHelpers from '../ComponentHelpers.js';

import arrowRight from '../../resources/icons/arrow-right.svg';
import arrowLeft from '../../resources/icons/arrow-left.svg';

export default {
  props: {
    hasNext: Boolean,
    hasPrevious: Boolean,
    nextURL: String,
    previousURL: String,
    plain: Boolean,
    accessibilityLabel: String
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass('Polaris-Pagination', ['plain'], this);
    }
  },
  data () {
    return {
      arrowRight: arrowRight,
      arrowLeft: arrowLeft
    };
  },
  methods: {
    handleMouseUp (e) {
      var target = e.target || e.srcElement;
      target.blur();
    },
    onNext () {
      this.$emit('next');
    },
    onPrevious () {
      this.$emit('previous');
    }
  }
};
