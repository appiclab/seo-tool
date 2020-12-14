import ComponentHelpers from "../ComponentHelpers.js";
import PolarisVueCollapseTransition from "../_transitions/CollapseTransition.vue";

export default {
  components: {
    PolarisVueCollapseTransition
  },
  props: {
    open: Boolean
  },
  data: () => ({
    height: null,
    animationState: "idle"
  }),
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        "Polaris-Collapsible", 
        ["open"], 
        this
      );
    },
    displayHeight () {
      return this.open ? "auto" : 0;
    }
  }
};
