import SettingToggle from "./SettingToggle.vue";
import Vue from "vue";
import SettingAction from "../SettingAction";
import TextStyle from "../TextStyle";

Vue.component("polaris-setting-action", SettingAction);
Vue.component("polaris-text-style", TextStyle);
export default {
  title: "Polaris/SettingToggle",
  component: SettingToggle,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-setting-toggle": SettingToggle,
  },
  template: `
    <polaris-setting-toggle :enabled="enabled" :action="action">
      This setting is <polaris-text-style variation="strong">enabled</polaris-text-style>.
    </polaris-setting-toggle>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  action: {
    content: 'Disable', 
    onAction: ''
  }
};