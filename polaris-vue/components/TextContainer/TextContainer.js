import ComponentHelpers from '../ComponentHelpers.js';

export const SPACING = ['tight', 'loose'];
export default {
  props: {
    spacing: {
      type: String,
      validate: v => SPACING.indexOf(v) > -1,
      default: 'tight'
    }
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        'Polaris-TextContainer',
        ['spacing'],
        this
      );
    }
  }
};
