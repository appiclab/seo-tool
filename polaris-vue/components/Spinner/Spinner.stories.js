import "./Spinner.scss"
import Spinner from "./Spinner.vue";

export default {
  title: "Polaris/Spinner",
  component: Spinner,
  argTypes: {
    size: { 
      control: { 
        type: 'select', 
        options: ['small', 'large'] 
      } 
    },
    color: { 
      control: { 
        type: 'select', 
        options:  ['white', 'teal', 'inkLightest'] 
      } 
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-spinner": Spinner,
  },
  template: `
    <polaris-spinner 
      :accessibility-label="accessibilityLabel" 
      :size="size" 
      :color="color"
    />
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  accessibilityLabel: "Loading products",
  size: "large",
  color: "teal"
}