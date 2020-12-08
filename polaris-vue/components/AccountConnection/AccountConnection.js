export default {
  props: {
    connected: Boolean,
    action: Object,
    avatarUrl: String,
    accountName: String,
    title: String,
    details: String,
    termsOfService: String
  },
  computed: {
    realTitle () {
      return this.title || this.accountName;
    }
  },
  methods: {
    handleAction (action) {
      if (action.onAction) {
        action.onAction();
      }
    }
  }
};
