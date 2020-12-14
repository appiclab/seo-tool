import ComponentHelpers from '../ComponentHelpers.js';

export const SIZE = ['small', 'medium', 'large', 'extraLarge']
export default {
  props: {
    size: {
      type: String,
      default: 'large',
      validate: s => SIZE.indexOf(s) > -1
    }
  },
  computed: {
    classes () {
      const r = ComponentHelpers.makeComponentClass('Polaris-SkeletonDisplayText', ['size'], this);

      r['Polaris-SkeletonDisplayText'] = false;
      r['Polaris-SkeletonDisplayText__DisplayText'] = true;

      return r;
    }
  }
};
