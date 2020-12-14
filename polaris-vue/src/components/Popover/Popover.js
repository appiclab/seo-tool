import ComponentHelpers from "../ComponentHelpers.js";
import DynamicTag from "../DynamicTag.js";

import PolarisPopoverOverlay from "./components/PopoverOverlay/PopoverOverlay.vue";

export default {
  components: {
    DynamicTag,
    PolarisPopoverOverlay
  },
  props: {
    active: Boolean,
    preferredPosition: {
      type: String,
      default: "below"
    },
    activatorWrapper: String,
    preventAutofocus: Boolean,
    sectioned: Boolean,
    fullWidth: Boolean,
    arrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    realId() {
      return "PolarisPopover" + this._uid;
    },
    activatorId() {
      return this.realId + "Activator";
    },
    classes() {
      const r = ComponentHelpers.makeComponentClass(
        "Polaris-Popover",
        ["fullWidth", "measuring"],
        this
      );

      if (this.positioning === "above") {
        r["Polaris-Popover--positionedAbove"] = true;
      }

      return r;
    }
  },
  mounted() {
    this.$refs.container.$el.firstElementChild.id = this.activatorId;

    window.addEventListener("click", this.handlePageClick);
    window.addEventListener("touchstart", this.handlePageClick);
    document.addEventListener("keyup", this.handleKeyPress);
  },
  methods: {
    findActivator() {
      return document.getElementById(this.activatorId);
    },
    handleKeyPress(e) {
      if (e.keyCode !== 27) {
        return;
      }
      this.$emit("close", "EscapeKeypress");
    },
    handlePageClick(e) {
      const target = e.target;
      const contentNode = this.$refs.content;

      if (
        (contentNode != null &&
          this.nodeContainsDescendant(contentNode, target)) ||
        this.nodeContainsDescendant(this.findActivator(), target) ||
        !this.active
      ) {
        return;
      }

      this.$emit("close", "Click");
    },
    nodeContainsDescendant(haystack, needle) {
      if (haystack === needle) {
        return true;
      }

      let parent = needle.parentNode;

      while (parent != null) {
        if (parent === haystack) {
          return true;
        }
        parent = parent.parentNode;
      }

      return false;
    },
    onActivate() {},
    handleFocusFirstItem() {
      this.$emit("close", "FocusOut");
    },
    handleFocusLastItem() {
      this.$emit("close", "FocusOut");
    },
    onClose() {
      this.$emit("close", "Click");
    }
  }
};
