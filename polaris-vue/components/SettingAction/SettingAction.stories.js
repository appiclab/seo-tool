import SettingAction from "./SettingAction.vue";

export default {
  title: "Polaris/SettingAction",
  component: SettingAction,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-setting-action": SettingAction,
  },
  template: `
    <polaris-setting-action :action="action">
      <p slot="children">Setting action content</p>
    </polaris-setting-action>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  action: {
    content:'Products', 
    url: '//google.com?1'
  }
};