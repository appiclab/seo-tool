import ComponentHelpers from "../ComponentHelpers.js";

export const SIZE = ["small", "medium", "large"];
export default {
  props: {
    size: {
      type: String,
      default: "medium",
      validator: v => SIZE.indexOf(v) !== -1
    },
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return ComponentHelpers.makeComponentClass("Polaris-Thumbnail", ["size"], this);
    }
  }
};
