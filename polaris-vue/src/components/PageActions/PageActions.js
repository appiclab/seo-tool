export default {
  props: {
    primaryAction: Object,
    secondaryActions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleAction(action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
