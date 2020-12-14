import { BUNDLED_ICONS } from "./Icon.js";
import colors from "./colors"
import Icon from "./Icon.vue";

export default {
  title: "Polaris/Icon",
  component: Icon,
  argTypes: {
    source: { control: { type: 'select', options: Object.keys(BUNDLED_ICONS) } },
    color: { control: { type: 'select', options:  colors } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-icon": Icon
  },
  template: `
    <polaris-icon 
      :source="source" 
      :backdrop="backdrop" 
      :color="color" 
      :accessibilityLabel="accessibilityLabel" 
    />
  `,
});

export const defaultView = Template.bind({});
defaultView.args = {
  accessibilityLabel: "Accessibility label",
  source: "alert",
  color: "skyDark"
};