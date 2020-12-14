import Vue from "vue";
import DisplayText from "../DisplayText";
import ButtonGroup from "../ButtonGroup";

Vue.component("polaris-display-text", DisplayText);
Vue.component("polaris-button-group", ButtonGroup);

import EmptyState from "./EmptyState.vue";

export default {
  title: "Polaris/EmptyState",
  component: EmptyState,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-empty-state": EmptyState,
  },
  methods: {
    testAlert() {
      console.log("testAlert");
    }
  },
  template: `
    <polaris-empty-state
      :imageContained="imageContained"
      :heading="heading"
      :action="action"
      :secondary-action="secondaryAction"
      :image="image"
    >
      <p>Track and receive your incoming inventory from suppliers.</p>
    </polaris-empty-state>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  heading: "Manage your inventory transfers",
  action: {
    content: 'Add transfer', 
    onAction: ""
  },
  secondaryAction: {
      content: 'Learn more',
      url: 'https://help.shopify.com',
  },
  image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
};