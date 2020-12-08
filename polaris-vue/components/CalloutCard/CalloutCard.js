export default {
  props: {
    title: String,
    illustration: String,
    primaryAction: Object,
    secondaryAction: Object,
    children: String
  },
  methods: {
    handleAction (action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
