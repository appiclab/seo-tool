export default {
  render (createElement) {
    const validSlot = this.$slots.default;
    const child = validSlot ? validSlot[0] : createElement("div");

    if (this.active) {
      return createElement(this.tag, {}, [child]);
    }

    return child;
  },
  props: {
    tag: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    }
  }
};
