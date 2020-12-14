import { action } from "@storybook/addon-actions";
import Vue from "vue";
import Icon from "../Icon";
Vue.component('polaris-icon', Icon)

import Tag from "./Tag.vue";

export default {
  title: "Polaris/Tag",
  component: Tag,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-tag": Tag
  },
  template: `
    <polaris-tag @click="onClick" @remove="onRemove">Tag</polaris-tag>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  onClick: action("onClick"),
  onRemove: action("onRemove")
};