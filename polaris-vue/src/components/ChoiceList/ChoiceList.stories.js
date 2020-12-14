import ChoiceList from "./ChoiceList.vue";

import Vue from "vue";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";
Vue.component("polaris-radio-button", RadioButton);
Vue.component("polaris-checkbox", Checkbox);

export default {
  title: "Polaris/ChoiceList",
  component: ChoiceList,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-choice-list": ChoiceList,
  },
  template: `
    <polaris-choice-list
      v-model="value"
      :title="title" 
      :titleHidden="titleHidden" 
      :name="name" 
      :choices="choices" 
      :disabled="disabled"
      :allowMultiple="allowMultiple"
    />
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  value: [],
  name: "ChoiceList",
  choices: [
    { label: 'Hidden', value: 'hidden' },
    { label: 'Optional', value: 'optional' },
    { label: 'Required', value: 'required' }
  ]
};