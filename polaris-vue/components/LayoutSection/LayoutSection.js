import ComponentHelpers from '../ComponentHelpers.js';

export default {
  name: "LayoutSection",
  props: {
    secondary: Boolean,
    fullWidth: Boolean,
  },
  computed: {
    classes() {
      return ComponentHelpers.makeComponentClass(
        'Polaris-Layout__Section',
        ['secondary', 'fullWidth'], 
        this
      );
    }
  }
}
