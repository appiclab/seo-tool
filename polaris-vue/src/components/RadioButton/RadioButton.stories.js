import RadioButton from "./RadioButton.vue";

export default {
  title: "Polaris/RadioButton",
  component: RadioButton,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-radio-button": RadioButton
  },
  template: `
    <polaris-radio-button 
      :label="label" 
      :label-hidden="labelHidden"
    />
  `,
});

export const defaultView = Template.bind({});
defaultView.args = {
  label: "The label",
  labelHidden: false
};