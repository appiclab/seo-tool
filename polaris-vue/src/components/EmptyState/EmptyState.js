import ComponentHelpers from "../ComponentHelpers.js";

export default {
  props: {
    heading: String,
    image: String,
    largeImage: String,
    imageContained: Boolean,
    action: Object,
    secondaryAction: Object
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        "Polaris-EmptyState", 
        ["imageContained"], 
        this
      );
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
