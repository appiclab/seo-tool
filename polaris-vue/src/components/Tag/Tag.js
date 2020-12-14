import cancelSmall from '../../resources/icons/cancel-small.svg';

export default {
  props: {},
  data: () => ({
    cancelSmall
  }),
  computed: {
    hasClickListner() {
      return !!this.$listeners.click;
    },
    hasRemoveListener() {
      return !!this.$listeners.remove;
    }
  },
  methods: {
    handleMouseUp(e) {
      e.currentTarget.blur();
    }
  }
};
