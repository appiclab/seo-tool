import SkeletonBodyText from "./SkeletonBodyText.vue";

export default {
  title: "Polaris/SkeletonBodyText",
  component: SkeletonBodyText,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-skeleton-body-text": SkeletonBodyText
  },
  template: `
    <polaris-skeleton-body-text :lines="lines"/>
  `
});

defaultView.args = {
  lines: 3
};
