import ComponentHelpers from "../ComponentHelpers.js";
import arrowUpDown from "../../resources/icons/arrow-up-down.svg";

export default {
  model: {
    prop: "value",
    event: "change"
  },
  data: () => ({
    arrowUpDown: arrowUpDown,
    theValue: null
  }),
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    label: String,
    inlineLabel: Boolean,
    labelAction: Object,
    labelHidden: Boolean,
    helpText: String,
    id: String,
    name: String,
    error: [Boolean, String],
    disabled: Boolean,
    value: String,
    placeholder: String
  },
  computed: {
    realId() {
      return this.id || "PolarisSelect" + this._uid;
    },
    classes() {
      const r = ComponentHelpers.makeComponentClass(
        "Polaris-Select",
        ["disabled"],
        this
      );

      if (this.error) {
        r["Polaris-Select--error"] = true;
      }

      if (
        this.value == null &&
        this.theValue == null &&
        this.placeholder != null
      ) {
        r["Polaris-Select--placeholder"] = true;
      }

      return r;
    },
    hiddenLabel() {
      return this.inlineLabel ? true : this.labelHidden;
    },
    describedBy() {
      const r = [];

      if (this.helpText || this.$slots.helpText) {
        r.push(this.realId + "HelpText");
      }

      if (this.error && typeof this.error == "string") {
        r.push(this.realId + "Error");
      }

      return r;
    }
  },
  methods: {
    onFocus() {
      this.$emit("focus");
    },
    onBlur() {
      this.$emit("blur");
    },
    onChange(e) {
      this.$emit("change", e.currentTarget.value);

      if (this.options[0].value !== undefined) {
        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].value === e.currentTarget.value) {
            return (this.theValue = this.options[i].label);
          }
        }
      }

      this.theValue = e.currentTarget.value;
    }
  },
  created() {
    this.theValue = this.value;
  }
};
