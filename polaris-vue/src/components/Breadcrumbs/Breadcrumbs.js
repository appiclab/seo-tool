import chevronIcon from "../../resources/chevron-icon.svg";

export default {
  props: {
    /**
     * This takes an array of actions, but only shows the last one in the array
     * for some reason.
     */
    breadcrumbs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: () => ({
    chevronIcon: chevronIcon
  }),
  computed: {
    breadcrumbAction () {
      if (this.breadcrumbs.length < 1) {
        return null;
      }

      return this.breadcrumbs[this.breadcrumbs.length - 1];
    }
  }
};
