import ComponentHelpers from '../ComponentHelpers.js';
import alertIcon from '../../resources/alert-icon.svg';

export default {
  props: {
    id: String,
    label: String,
    error: [String, Boolean],
    children: String,
    labelHidden: Boolean,
    helpText: String
  },
  data () {
    return {
      alertIcon: alertIcon
    };
  },
  computed: {
    labelClasses () {
      return ComponentHelpers.makeComponentClass('Polaris-Choice', ['labelHidden'], this);
    }
  }
};
