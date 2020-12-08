import Thumbnail from "./Thumbnail.vue";
import { SIZE } from "./Thumbnail.js";

export default {
  title: "Polaris/Thumbnail",
  component: Thumbnail,
  argTypes: {
    size: { 
      control: { 
        type: 'select', 
        options: SIZE 
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-thumbnail": Thumbnail,
  },
  template: `
    <polaris-thumbnail :size="size" :source="source" :alt="alt" />
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  source: "https://vuejs.org/images/logo.png",
  alt: "Example"
};