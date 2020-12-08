import TextStyle from "./TextStyle.vue";
import { VARIATION } from "./TextStyle.js";

export default {
  title: "Polaris/TextStyle",
  component: TextStyle,
  argTypes: {
    variation: { 
      control: { 
        type: 'select', 
        options: VARIATION
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-text-style": TextStyle,
  },
  template: `
    <polaris-text-style :variation="variation">
      {{ text }}
    </polaris-text-style>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Text style"
};