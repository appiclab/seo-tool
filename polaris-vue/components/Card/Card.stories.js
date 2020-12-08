import Vue from "vue";
import Card from "./Card.vue";
import CardSection from "../CardSection";

Vue.component("polaris-card-section", CardSection);

export default {
  title: "Polaris/Card",
  component: Card,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-card": Card,
  },
  template: `
    <polaris-card 
      :title="title"
      :subdued="subdued"
      :sectioned="sectioned"
    >
      {{ content }}
    </polaris-card>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  title: "",
  subdued: false,
  sectioned: false,
  content: "The content",
};