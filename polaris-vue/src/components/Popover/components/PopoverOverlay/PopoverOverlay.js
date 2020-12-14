import PolarisPositionedOverlay from '../PositionedOverlay/PositionedOverlay.vue';

export default {
  components: {
    PolarisPositionedOverlay
  },
  props: {
    id: String,
    active: Boolean,
    preventAutofocus: Boolean,
    sectioned: Boolean,
    fullWidth: Boolean,
    preferredPosition: {
      type: String,
      default: 'below'
    },
    activatorId: String
  },
  methods: {
    handleScrollOut() {
      this.$emit('scrollout');
    }
  }
};
