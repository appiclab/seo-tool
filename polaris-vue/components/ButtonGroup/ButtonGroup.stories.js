import Vue from "vue";
import ButtonGroup from "./ButtonGroup.vue";

import Button from "../Button";
import ButtonGroupItem from "../ButtonGroupItem";

Vue.component("polaris-button", Button);
Vue.component("polaris-button-group-item", ButtonGroupItem);

export default {
  title: "Polaris/Button Group",
  component: ButtonGroup,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-button-group": ButtonGroup,
  },
  template: `
    <polaris-button-group :segmented="segmented">
      <polaris-button-group-item>
        <polaris-button>Button 1</polaris-button>
      </polaris-button-group-item>
      <polaris-button-group-item>
        <polaris-button>Button 2</polaris-button>
      </polaris-button-group-item>
      <polaris-button-group-item>
        <polaris-button>Button 3</polaris-button>
      </polaris-button-group-item>
    </polaris-button-group>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {};