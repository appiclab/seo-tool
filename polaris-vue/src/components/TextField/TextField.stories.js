import { action } from "@storybook/addon-actions";
import TextField from "./TextField.vue";

export default {
  title: "Polaris/TextField",
  component: TextField,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-text-field": TextField,
  },
  methods: {},
  template: `
    <polaris-text-field
      v-model="text"
      @input="input"
      @focus="onFocus"
      :label="label"
      :multiline="multiline"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  input: action("onInput"),
  focus: action("onFocus"),
  text: "",
  label: "the label",
  placeholder: "Type your message..."
};