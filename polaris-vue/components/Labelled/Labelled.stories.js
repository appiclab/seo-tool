import Labelled from "./Labelled.vue";

import Vue from "vue";
import Icon from "../Icon";
import Button from "../Button";
import Label from "../Label";

Vue.component("polaris-icon", Icon);
Vue.component("polaris-button", Button);
Vue.component("polaris-label", Label);

export default {
  title: "Polaris/Labelled",
  component: Labelled,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-labelled": Labelled
  },
  template: `
    <polaris-labelled label="label">
      {{ text }}
    </polaris-labelled>
  `,
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Labelled"
};