import Heading from "./Heading.vue";

export default {
  title: "Polaris/Heading",
  component: Heading,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-heading": Heading,
  },
  template: `
    <polaris-heading :tag="tag">Heading</polaris-heading>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {};