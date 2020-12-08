import DynamicTag from "../DynamicTag.js";
import PolarisActionListSection from "../ActionListSection/ActionListSection.vue";

export default {
  components: {
    DynamicTag,
    PolarisActionListSection
  },
  props: {
    items: {
      type: Array,
      default () {
        return [];
      }
    },
    sections: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  computed: {
    finalSections () {
      if (this.items) {
        return [{items: this.items}, ...this.sections];
      }

      return this.sections;
    },
    hasMultipleSections () {
      return this.finalSections.length > 0;
    }
  },
  methods: {
    onActionAnyItem (action) {
      this.$emit("action-any-item", action);
    },
    handleAction (action) {
      let res = true;

      if (action.onAction) {
        res = action.onAction();
      }

      if (res && action.url) {
        window.location.href = action.url;
      }
    }
  }
};
