import Label from "./Label.vue";

export default {
  title: "Polaris/Label",
  component: Label,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-label": Label
  },
  template: `<polaris-label>Label</polaris-label>`,
});

export const defaultView = Template.bind({});
defaultView.args = {};