import ComponentHelpers from "../ComponentHelpers.js";
import PolarisStackItem from "../StackItem";

export const SPACING = ["extraTight", "tight", "loose", "extraLoose", "none"];
export const ALIGNMENT = ["leading", "trailing", "center", "fill", "baseline"];
export const DISTRIBUTION = ["equalSpacing", "leading", "trailing", "center", "fill", "baseline", "fillEvenly"];
export default {
  polarisName: "polaris-stack",
  render(createElement) {
    return createElement(
      "div",
      { class: this.classes },
      ComponentHelpers.wrapNodesWithComponent(createElement, this.$slots.default, PolarisStackItem)
    );
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: String,
      default: "tight",
      validator: v => SPACING.indexOf(v) !== -1
    },
    alignment: {
      type: String,
      default: "leading",
      validator: v => ALIGNMENT.indexOf(v) !== -1
    },
    distribution: {
      type: String,
      default: "leading",
      validator: v => DISTRIBUTION.indexOf(v) !== -1
    }
  },
  computed: {
    classes() {
      const props = ["vertical", "spacing", "alignment", "distribution"];
      const r = ComponentHelpers.makeComponentClass("Polaris-Stack", props, this);

      r["Polaris-Stack--noWrap"] = !this.wrap;

      return r;
    }
  }
};
