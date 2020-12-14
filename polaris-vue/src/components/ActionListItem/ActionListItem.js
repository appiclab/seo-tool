import ComponentHelpers from "../ComponentHelpers";

export default {
  props: {
    content: String,
    url: String,
    action: Object,
    icon: String,
    image: String,
    disabled: Boolean
  },
  computed: {
    classes () {
      return ComponentHelpers.makeComponentClass(
        "Polaris-ActionList__Item",
        ["disabled"],
        this
      );
    }
  },
  methods: {
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
