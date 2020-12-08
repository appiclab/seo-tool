import ResourceList from "./ResourceList.vue";

import Vue from "vue"
import Badge from "../Badge";
import ResourceListItem from "../ResourceListItem";
Vue.component("polaris-badge", Badge);
Vue.component("polaris-resource-list-item", ResourceListItem);

export default {
  title: "Polaris/ResourceList",
  component: ResourceList,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-resource-list": ResourceList
  },
  template: `<polaris-resource-list :items="items" />`,
});

export const defaultView = Template.bind({});
defaultView.args = {
  items: [
    {
        url: '#',
        attributeOne: 'How to Get Value from Wireframes',
        attributeTwo: 'by Jonathan Mangrove',
        attributeThree: 'Today, 7:14pm',
    },
    {
        url: '#',
        attributeOne: 'Test blog post',
        attributeTwo: 'by Jonathan Mangrove',
        attributeThree: 'Jan 14, 2016, 8:24am',
        badges: [
          {
            content: 'Hidden'
          },
        ],
    },
  ]
};