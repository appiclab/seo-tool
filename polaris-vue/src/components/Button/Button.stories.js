import { action } from "@storybook/addon-actions";
import Button from "./Button.vue";

import Vue from "vue"
import Icon from "../Icon";
import Spinner from "../Spinner";

Vue.component("polaris-icon", Icon);
Vue.component("polaris-spinner", Spinner);

import { BUNDLED_ICONS } from "../Icon/Icon.js";
import { SIZE } from "./Button.js";

export default {
  title: "Polaris/Button",
  component: Button,
  argTypes: {
    icon: { 
      control: { 
        type: 'select', 
        options: Object.keys(BUNDLED_ICONS)
      }
    },
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
    "polaris-button": Button,
  },
  template: `
    <polaris-button
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      :accessibilityLabel="accessibilityLabel"
      :size="size"
      :icon="icon"
      :primary="primary"
      :outline="outline"
      :destructive="destructive"
      :disabled="disabled"
      :loading="loading"
      :fullWidth="fullWidth"
      :disclosure="disclosure"
      :submit="submit"
      :plain="plain"
      :external="external"
      :iconOnly="iconOnly"
    >
      {{ text }}
    </polaris-button>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  text: "Button",
  accessibilityLabel: "Accessibility label",
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
  onClick: action("onClick")
};