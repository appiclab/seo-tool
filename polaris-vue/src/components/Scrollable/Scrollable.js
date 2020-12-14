const MAX_SCROLL_DISTANCE = 100;
const DELTA_THRESHOLD = 0.2;
const DELTA_PERCENTAGE = 0.2;
const EVENTS_TO_LOCK = ["scroll", "touchmove", "wheel"];
const PREFERS_REDUCED_MOTION = false;

export default {
  props: {
    vertical: {
      type: Boolean,
      default: true
    },
    horizontal: Boolean,
    shadow: {
      type: Boolean,
      default: false
    },
    hint: Boolean
  },
  computed: {
    topShadow () {
      const scrollArea = this.$refs.scrollArea;

      if (!scrollArea) {
        return false;
      }

      const scrollTop = scrollArea.scrollTop;

      return scrollTop > 0;
    },
    bottomShadow () {
      const scrollArea = this.$refs.scrollArea;

      if (!scrollArea) {
        return false;
      }

      return !(scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight);
    },
    classes () {
      return {
        "Polaris-Scrollable": true,
        "Polaris-Scrollable--vertical": this.vertical,
        "Polaris-Scrollable--horizontal": this.horizontal,
        "Polaris-Scrollable--hasTopShadow": this.topShadow,
        "Polaris-Scrollable--hasBottomShadow": this.bottomShadow
      };
    }
  }
};
