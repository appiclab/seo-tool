import List from "./List.vue";

import Vue from "vue";
import ListItem from "../ListItem";

Vue.component("polaris-list-item", ListItem);

export default {
  title: "Polaris/List",
  component: List,
  argTypes: {
    type: { 
      control: { 
        type: 'select', 
        options: ['bullet', 'number'] 
      } 
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-list": List
  },
  template: `
    <polaris-list :type="type">
      <polaris-list-item>Yellow shirt</polaris-list-item>
      <polaris-list-item>Red shirt</polaris-list-item>
      <polaris-list-item>Green shirt</polaris-list-item>
    </polaris-list>
  `,
});
export const defaultView = Template.bind({})
defaultView.args = {}