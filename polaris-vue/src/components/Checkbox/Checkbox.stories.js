import Checkbox from "./Checkbox.vue";

export default {
  title: "Polaris/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-checkbox": Checkbox,
  },
  template: `
    <polaris-checkbox
      v-model="checked"  
      :label="label" 
      :labelHidden="labelHidden"
      :error="error"
    />
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  checked: false,
  label: "",
  labelHidden: false,
  error: false
};