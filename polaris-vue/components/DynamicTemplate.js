export default {
  render (createElement) {
    const validSlot = this.$slots.active;

    console.log("valid slot", validSlot);

    if (validSlot) {
      return validSlot[0];
    } else {
      console.log("returned empty div");
      return createElement("div");
    }
  }
};
