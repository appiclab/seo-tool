import UnstyledLink from "./UnstyledLink.vue";

export default {
  title: "Polaris/UnstyledLink",
  component: UnstyledLink,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-unstyled-link": UnstyledLink
  },
  template: `
    <polaris-unstyled-link :url="url" :external="external">
      {{ text }}
    </polaris-unstyled-link>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "This is an unstyled link.",
  url: "http://google.com/",
  external: true
};