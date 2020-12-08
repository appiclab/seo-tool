import ComponentHelpers from "../ComponentHelpers.js";
import DynamicTag from "../DynamicTag.js";

export const SIZE = ["default", "slim", "large"];
export default {
  components: {
    DynamicTag
  },
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    destructive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    disclosure: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    accessibilityLabel: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "default",
      validator: v => SIZE.indexOf(v) !== -1
    }
  },
  computed: {
    disclosureIcon() {
      return this.loading ? "placeholder" : "caretDown";
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    realIcon() {
      return this.loading ? "placeholder" : this.icon;
    },
    spinnerColor() {
      return this.primary || this.destructive ? "white" : "inkLightest";
    },
    classes() {
      const r = ComponentHelpers.makeComponentClass(
        "Polaris-Button",
        [
          "primary",
          "outline",
          "destructive",
          "fullWidth",
          "plain",
          "size",
          "iconOnly"
        ],
        this
      );
  
      if (this.isDisabled) {
        r["Polaris-Button--disabled"] = true;
      }
  
      return r;
    }
  },
  methods: {
    onFocus(e) {
      this.$emit("focus")
    },
    onBlur(e) {
      this.$emit("blur")
    },
    onClick(e) {
      if (this.disabled) {
        return false;
      }
  
      if (this.submit) {
        return true;
      }
  
      return this.$emit("click", e) && true;
    }
  }
}
