import "./TextContainer.scss";
import TextContainer from "./TextContainer.vue";
import { SPACING } from "./TextContainer.js";

export default {
  title: "Polaris/TextContainer",
  component: TextContainer,
  argTypes: {
    spacing: { 
      control: { 
        type: 'select', 
        options: SPACING
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-text-container": TextContainer,
  },
  template: `
    <polaris-text-container :spacing="spacing">
      {{ text }}
    </polaris-text-container>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text container Text containerText container"
};