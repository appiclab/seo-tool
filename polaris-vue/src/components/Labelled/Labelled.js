import alertIcon from '../../resources/alert-icon.svg';

export default {
  props: {
    id: String,
    label: String,
    error: [Boolean, String],
    action: Object,
    helpText: String,
    children: String,
    labelHidden: Boolean
  },
  data: () => ({
    alertIcon
  }),
  computed: {
    classes () {
      return {
        'Polaris-Labelled': true,
        'Polaris-Labelled--hidden': this.labelHidden
      };
    }
  },
  methods: {
    handleAction (action, handleUrl) {
      if (action.onAction) {
        action.onAction();
      }
      if (handleUrl && action.url) {
        window.location.href = action.url;
      }
    }
  }
};
