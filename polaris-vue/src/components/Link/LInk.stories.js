import Link from "./Link.vue";

export default {
  title: "Polaris/Link",
  component: Link,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-link": Link
  },
  template: `
    <polaris-link>
      {{ text }}
    </polaris-link>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Link"
};
