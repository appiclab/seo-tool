import PolarisChoice from "../Choice";

export default {
  model: {
    prop: "checked",
    event: "change"
  },
  components: {
    PolarisChoice
  },
  props: {
    label: String,
    labelHidden: Boolean,
    helpText: String,
    checked: Boolean,
    id: String,
    name: String,
    value: String,
    disabled: Boolean
  },
  computed: {
    realId () {
      return this.id || "PolarisRadioButton" + this._uid;
    }
  },
  methods: {
    onChange (e) {
      var target = e.target || e.srcElement;
      this.$emit("change", target.checked);
    },
    onFocus () {
      this.$emit("focus");
    },
    onBlur () {
      this.$emit("blur");
    }
  }
};
