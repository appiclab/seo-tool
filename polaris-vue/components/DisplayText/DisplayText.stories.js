import DisplayText from "./DisplayText.vue";
import { SIZE } from "./DisplayText.js";

export default {
  title: "Polaris/DisplayText",
  component: DisplayText,
  argTypes: {
    size: { 
      control: { 
        type: 'select', 
        options: SIZE 
      } 
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-display-text": DisplayText,
  },
  template: `
    <polaris-display-text :size="size" :element="element">
      {{ text }}
    </polaris-display-text>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Test display text"
};