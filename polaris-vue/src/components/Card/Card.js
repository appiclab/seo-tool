export default {
  props: {
    title: String,
    subdued: Boolean,
    sectioned: Boolean,
    primaryFooterAction: Object,
    secondaryFooterAction: Object,
    actions: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  computed: {
    classes () {
      return {
        "Polaris-Card": true,
        "Polaris-Card--subdued": this.subdued
      };
    }
  },
  methods: {
    handleAction (action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
