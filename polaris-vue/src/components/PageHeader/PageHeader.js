import PolarisPageAction from "../PageAction/PageAction";

export default {
  components: {
    PolarisPageAction
  },
  props: {
    title: String,
    icon: String,
    separator: Boolean,
    breadcrumbs: {
      type: Array,
      default () {
        return [];
      }
    },
    primaryAction: Object,
    secondaryActions: {
      type: Array,
      default () {
        return [];
      }
    },
    pagination: Object,
    actionGroups: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data: () => ({
    rollupOpen: false,
    openActionGroup: null
  }),
  computed: {
    actionGroupsAsListSections () {
      return this.actionGroups.map((ag) => {
        return {title: ag.title, items: ag.actions};
      });
    },
    hasBreadcrumbs () {
      return this.breadcrumbs && this.breadcrumbs.length > 0;
    },
    hasRollup () {
      return this.secondaryActions.length + this.actionGroups.length > 1;
    },
    classes () {
      return {
        "Polaris-Page__Header": true,
        "Polaris-Page__Header--hasPagination": !!this.pagination,
        "Polaris-Page__Header--hasSeparator": this.separator,
        "Polaris-Page__Header--hasBreadcrumbs": this.breadcrumbs && this.breadcrumbs.length > 0,
        "Polaris-Page__Header--hasRollup": this.hasRollup,
        "Polaris-Page__Header--hasSecondaryActions": this.secondaryActions && this.secondaryActions.length > 0
      };
    }
  },
  methods: {
    handleRollupToggle () {
      this.rollupOpen = !this.rollupOpen;
    },
    handleAction (action, handleUrl) {
      if (action.onAction) {
        action.onAction();
      }
      if (handleUrl && action.url) {
        window.location.href = action.url;
      }
    },
    handleActionGroupOpen (group) {
      this.openActionGroup = group.title;
    },
    handleActionGroupClose (group) {
      this.openActionGroup = null;
    }
  }
};
