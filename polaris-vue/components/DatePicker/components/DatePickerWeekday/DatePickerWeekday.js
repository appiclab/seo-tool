import ComponentHelpers from '../../../ComponentHelpers.js';

export default {
  props: {
    label: {
      type: String,
      validate (v) {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(v) > -1;
      }
    },
    title: String,
    current: Boolean
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        'Polaris-DatePicker__Weekday',
        ['current'],
        this
      );
    }
  }
};
