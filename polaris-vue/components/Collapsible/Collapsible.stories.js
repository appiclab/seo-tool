import Collapsible from "./Collapsible.vue";

export default {
  title: "Polaris/Collapsible",
  component: Collapsible,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-collapsible": Collapsible,
  },
  template: `
    <div>
      <polaris-button @click="open = !open">Toggle</polaris-button>
      <polaris-collapsible :open="open">
        <p>Example content</p>
      </polaris-collapsible>
    </div>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {};