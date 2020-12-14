import PolarisConnectedItem from "../ConnectedItem";

export default {
  components: {
    PolarisConnectedItem
  },
  props: {
    left: String,
    right: String,
    children: String
  },
  data: () => ({
    focused: String
  })
};
