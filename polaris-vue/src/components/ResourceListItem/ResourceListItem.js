import ComponentHelpers from "../ComponentHelpers.js";

export default {
  props: {
    url: String,
    media: Object,
    attributeOne: String,
    attributeTwo: String,
    attributeThree: String,
    badges: {
      type: Array,
      default () {
        return [];
      }
    },
    exceptions: {
      type: Array,
      default () {
        return [];
      }
    },
    actions: {
      type: Array,
      default () {
        return [];
      }
    },
    persistActions: Boolean
  },
  data () {
    return {
      actionsMenuVisible: false,
      focused: false
    };
  },
  computed: {
    realId () {
      return "PolarisResourceListItem" + this._uid;
    },
    classes () {
      var r = ComponentHelpers.makeComponentClass("Polaris-ResourceList__Item", [
        "focused",
        "persistActions",
        "mediaType",
        "mediaSize"
      ], this);

      if (this.url) {
        r["Polaris-ResourceList__Item--link"] = true;
      }

      return r;
    }
  },
  methods: {
    exceptionItemClass (ex) {
      return ComponentHelpers.makeComponentClass(
        "Polaris-ResourceList__ExceptionItem",
        ["status"],
        ex
      );
    },
    onMouseEnter () {
      this.focused = true;
    },
    onMouseLeave () {
      this.focused = false;
    },
    onFocus () {
      this.focused = true;
    },
    onBlur (e) {
      if (!this.$refs.element || !this.$refs.element.contains(e.relatedTarget)) {
        this.focused = false;
      }
    },
    onExpandActions () {
      this.actionsMenuVisible = !this.actionsMenuVisible;
    },
    onCloseActions () {
      this.actionsMenuVisible = false;
    },
    handleAction (action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
