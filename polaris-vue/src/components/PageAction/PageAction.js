import DynamicTemplate from "../DynamicTemplate.js";

export default {
  components: {
    DynamicTemplate,
  },
  props: {
    icon: String,
    url: String,
    external: Boolean,
    disclosure: Boolean,
    accessibilityLabel: String,
    disabled: Boolean
  },
  computed: {
    classes () {
      return {
        "Polaris-Page__Action": 1,
        "Polaris-Page__Action--disabled": this.disabled,
        "Polaris-Page__Action--iconOnly": this.icon && this.emptyChildren
      };
    },
    emptyChildren () {
      return !!this.$slots.default;
    }
  },
  methods: {
    handleMouseUp () {
      console.log("todo");
    },
    onAction () {
      this.$emit("click");
      this.$emit("action");
    }
  }
};
