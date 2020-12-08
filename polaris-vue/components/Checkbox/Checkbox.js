import checkboxErrorIcon from "../../resources/checkbox-error-icon.svg";

export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    label: String,
    labelHidden: Boolean,
    checked: {
      type: [Boolean, String],
      default: false,
      validator (v) {
        return (v && typeof v === "string") ? (v === "indeterminate") : true;
      }
    },
    helpText: String,
    id: String,
    name: String,
    value: String,
    error: Boolean,
    disabled: Boolean
  },
  data: () => ({
    checkboxErrorIcon: checkboxErrorIcon
  }),
  computed: {
    checkIcon () {
      return this.indeterminate ? "subtract" : "checkmark";
    },
    indeterminate () {
      return this.checked == "indeterminate";
    },
    realId () {
      return this.id || "Checkbox" + this._uid;
    },
    helpTextId () {
      if (!this.helpText) {
        return null;
      }
      return this.realId + "HelpText";
    },
    errorId () {
      if (!this.error || typeof this.error != "string") {
        return null;
      }
      return this.realId + "Error";
    },
    inputClasses () {
      return {
        "Polaris-Checkbox__Input": true,
        "Polaris-Checkbox__Input--checked": this.checked,
        "Polaris-Checkbox__Input--indeterminate": this.indeterminate
      };
    },
    labelClasses () {
      return {
        "Polaris-Choice": true,
        "Polaris-Choice--labelHidden": this.labelHidden
      };
    },
    checkboxClasses () {
      return {
        "Polaris-Checkbox": true,
        "Polaris-Checkbox--error": this.error
      };
    }
  },
  methods: {
    onChange (e) {
      var target = e.target || e.srcElement;
      this.$emit("change", target.checked);
    },
    onFocus (e) {
      this.$emit("focus", e);
    },
    onBlur (e) {
      this.$emit("blur", e);
    }
  }
};
