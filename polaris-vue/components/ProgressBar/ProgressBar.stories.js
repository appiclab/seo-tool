import ProgressBar from "./ProgressBar.vue";

export default {
  title: "Polaris/Progress Bar",
  component: ProgressBar,
  argTypes: {
    size: { 
      control: { 
        type: 'select',
        options: ["small", "medium", "large"],
      } 
    }
  },
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-progress-bar": ProgressBar
  },
  template: `
    <polaris-progress-bar :progress="progress" :size="size" />
  `
});

defaultView.args = {
  progress: 10,
  size: "medium"
};
