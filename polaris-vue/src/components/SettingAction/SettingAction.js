export default {
  props: {
    action: null
  },
  methods: {
    handleAction (action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
