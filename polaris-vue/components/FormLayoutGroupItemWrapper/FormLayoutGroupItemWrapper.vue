<script>
  import ComponentHelpers from "../ComponentHelpers.js";
  import PolarisFormLayoutItem from "../FormLayoutItem";

  export default {
    render (createElement) {
      return createElement("div", {
          "class": "Polaris-FormLayout__Items"
        },
        ComponentHelpers.wrapNodesWithComponent(createElement,
          this.$slots.default,
          PolarisFormLayoutItem));
    },
  };
</script>
