import ComponentHelpers from "../ComponentHelpers.js";

export default {
  props: {
    subdued: Boolean,
    title: String
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        "Polaris-Card__Section",
        ["subdued"],
        this);
    }
  }
};
