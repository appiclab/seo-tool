export default {
  props: {
    children: String,
    id: {
      type: String,
      default: ""
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    uid() {
      return this.id !== "" ? this.id : this._uid;
    },
    classes() {
      return {
        'Polaris-Label': true,
        'Polaris-Label--hidden': this.hidden
      };
    }
  },
  methods: {
    handleAction(action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  },
  created() {
    console.log();
  }
};
