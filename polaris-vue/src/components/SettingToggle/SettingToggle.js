export default {
  props: {
    action: Object,
    enabled: Boolean
  },
  methods: {
    handleAction(action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
