import Subheading from "./Subheading.vue";

export default {
  title: "Polaris/Subheading",
  component: Subheading,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-subheading": Subheading,
  },
  methods: {},
  template: `
    <polaris-subheading :tag="tag">
      {{ text }}
    </polaris-subheading>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "subheading",
  tag: "h3"
};