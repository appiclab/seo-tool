import ColorPicker from "./ColorPicker.vue";

export default {
  title: "Polaris/ColorPicker",
  component: ColorPicker,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-color-picker": ColorPicker,
  },
  template: `
    <polaris-color-picker :value="value" :allow-alpha="allowAlpha" />
  `
});

defaultView.args = {
  value: ""
};