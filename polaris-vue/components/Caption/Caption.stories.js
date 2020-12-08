import Caption from "./Caption.vue";

export default {
  title: "Polaris/Caption",
  component: Caption,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-caption": Caption
  },
  template: `
    <polaris-caption>
      {{ text }}
    </polaris-caption>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Test caption"
};