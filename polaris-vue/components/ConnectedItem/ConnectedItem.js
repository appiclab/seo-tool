export default {
  props: {
    position: {
      type: String,
      validate (v) {
        return ["Left", "Primary", "Right"].indexOf(v) > -1;
      }
    },
    children: String
  },
  data: () => ({
    focused: false
  }),
  computed: {
    classes () {
      return {
        "Polaris-Connected__Item": true,
        "Polaris-Connected__Item--focused": this.focused,
        "Polaris-Connected__Item--primary": this.position === "Primary",
        "Polaris-Connected__Item--connection": this.position !== "Primary"
      };
    }
  }
};
