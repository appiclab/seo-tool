import ComponentHelpers from "../ComponentHelpers.js";
import DynamicTag from "../DynamicTag.js";

export default {
  components: {
    DynamicTag
  },
  props: {
    type: {
      type: String,
      default: "bullet"
    }
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass("Polaris-List", ["type"], this);
    },
    tag () {
      return this.type === "bullet" ? "ul" : "ol";
    }
  }
};
