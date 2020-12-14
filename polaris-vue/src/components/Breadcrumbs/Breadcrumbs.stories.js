import Breadcrumbs from "./Breadcrumbs.vue";

import Vue from "vue"
import Icon from "../Icon";
import UnstyledLink from "../UnstyledLink";

Vue.component("polaris-icon", Icon);
Vue.component("polaris-unstyled-link", UnstyledLink);

export default {
  title: "Polaris/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-breadcrumbs": Breadcrumbs
  },
  template: '<polaris-breadcrumbs :breadcrumbs="breadcrumbs" />',
});

export const defaultView = Template.bind({});
defaultView.args = {
  breadcrumbs: [
    {
      content:'Products',
      url: '//google.com?1'
    },
    {
      content:'Jar with lid',
      url: '//google.com?2'
    },
    {
      content:'Products',
      url: '//google.com?1'
    },
  ]
};
