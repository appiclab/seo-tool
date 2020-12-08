import ComponentHelpers from "../ComponentHelpers.js";
import * as avatars from "../../resources/avatars";

const AVATAR_IMAGES = [];

for (const key in avatars) {
  AVATAR_IMAGES.push(avatars[key]);
}

const STYLE_CLASSES = ["styleOne", "styleTwo", "styleThree", "styleFour", "styleFive", "styleSix"];

export const SIZE = ["small", "medium", "large"];
export default {
  props: {
    size: {
      type: String,
      default: "medium",
      validator: v => SIZE.indexOf(v) !== -1
    },
    alt: String,
    name: String,
    initials: String,
    customer: Boolean,
    source: String,
    accessibilityLabel: String
  },
  computed: {
    label () {
      return this.accessibilityLabel
        || this.name
        || (this.initials ? "Avatar with initials " + this.initials.split("").join(" ") : false)
        || "Avatar";
    },
    customerSvg () {
      return (this.customer ? this.customerPlaceholder(this.name || this.initials) : null);
    },
    classes () {
      const r = ComponentHelpers.makeComponentClass("Polaris-Avatar", ["size"], this);
      const styleClass = this.styleClass(this.name || this.initials);

      r["Polaris-Avatar--" + styleClass] = true;

      return r;
    }
  },
  methods: {
    customerPlaceholder (name) {
      return name
        ? AVATAR_IMAGES[name.charCodeAt(0) % AVATAR_IMAGES.length]
        : AVATAR_IMAGES[0];
    },
    styleClass (name) {
      return name
        ? STYLE_CLASSES[name.charCodeAt(0) % STYLE_CLASSES.length]
        : STYLE_CLASSES[0];
    }
  }
};
