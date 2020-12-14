import Avatar from "./Avatar.vue";

import Vue from "vue"
import Image from "../Image";

Vue.component("polaris-image", Image);

import { SIZE } from "./Avatar.js";

export default {
  title: "Polaris/Avatar",
  component: Avatar,
  argTypes: {
    size: { 
      control: { 
        type: 'select', 
        options: SIZE 
      } 
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-avatar": Avatar
  },
  template: `
    <polaris-avatar 
      :source="source" 
      :accessibility-label="accessibilityLabel" 
      :size="size"
      :customer="customer"
    />
  `,
});

export const defaultView = Template.bind({});
defaultView.args = {
  source: "https://vuejs.org/images/logo.png",
  accessibilityLabel: "avatar test",
  customer: false
};
