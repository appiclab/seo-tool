import SkeletonDisplayText from "./SkeletonDisplayText.vue";
import { SIZE } from "./SkeletonDisplayText.js";

export default {
  title: "Polaris/SkeletonDisplayText",
  component: SkeletonDisplayText,
  argTypes: {
    size: { 
      control: { 
        type: 'select',
        options: SIZE,
      } 
    }
  },
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-skeleton-display-text": SkeletonDisplayText
  },
  template: `
    <polaris-skeleton-display-text :size="size"/>
  `
});

defaultView.args = {
  size: "large"
};

