import OptionalTag from "../OptionalTag.js";
import PolarisActionListItem from "../ActionListItem/ActionListItem.vue";

export default {
  props: {
    section: {
      type: Object,
      default () {
        return {};
      }
    },
    hasMultipleSections: Boolean
  },
  components: {
    OptionalTag,
    PolarisActionListItem
  },
  computed: {
    classes () {
      return {
        "Polaris-ActionList__Section": 1,
        "Polaris-ActionList__Section--withoutTitle": !this.section.title
      };
    }
  },
  methods: {
    wrapAction (action) {
      const _old = action.onAction;
      const newAction = Object.assign({}, action);

      if (_old) {
        newAction.onAction = () => {
          _old();
          this.$emit("action-any-item", action);
        };
      }

      return newAction;
    },
    handleAction (action) {
      let res = true;

      if (action.onAction) {
        res = action.onAction();
      }

      if (res && action.url) {
        window.location.href = action.url;
      }

      this.$emit("action-any-item", action);
    }
  }
};
