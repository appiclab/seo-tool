import Badge from "./Badge.vue";
import { STATUS } from "./Badge.js";

export default {
  title: "Polaris/Badge",
  component: Badge,
  argTypes: {
    status: { 
      control: { 
        type: 'select', 
        options: STATUS 
      } 
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-badge": Badge
  },
  template: `
    <polaris-badge :status="status">
      {{ status }}
    </polaris-badge>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {};
