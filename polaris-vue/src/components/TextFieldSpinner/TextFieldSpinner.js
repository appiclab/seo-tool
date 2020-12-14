import PolarisIcon from "../Icon";
import caretUp from "../../resources/icons/caret-up.svg";
import caretDown from "../../resources/icons/caret-down.svg";

export default {
  components: {
    PolarisIcon
  },
  data () {
    return {
      caretUp: caretUp,
      caretDown: caretDown
    };
  },
  methods: {
    onClick () {
      this.$emit("click");
    },
    handleStep (value) {
      this.$emit("change", value);
    }
  }
};
