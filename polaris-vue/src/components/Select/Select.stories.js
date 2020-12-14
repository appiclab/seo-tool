import Select from "./Select.vue";

import Vue from "vue";
import Labelled from "../Labelled";
import Icon from "../Icon";

Vue.component("polaris-labelled", Labelled);
Vue.component("polaris-icon", Icon);

export default {
  title: "Polaris/Select",
  component: Select,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-select": Select
  },
  template: `
  <polaris-select 
    :label="label"
    :inlineLabel="inlineLabel"
    :labelHidden="labelHidden"
    :placeholder="placeholder" 
    :options="options"
    :disabled="disabled"
  />`,
});

export const defaultView = Template.bind({});
defaultView.args = {
  label: "The select label",
  placeholder: "Select...",
  options: [
    { label: "one", value: "one" },
    { label: "tow", value: "tow" }
  ]
};

export const optionsGroup = Template.bind({});
optionsGroup.args = {
  label: "The select label",
  placeholder: "Select...",
  options: [
    {
      title: "hello",
      optgroup: [
        { label: "one", value: "one" },
        { label: "tow", value: "tow" }
      ]
    },
    { label: "one", value: "one" },
    { label: "tow", value: "tow" }
  ]
};