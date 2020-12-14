import { action } from "@storybook/addon-actions";
import Banner from "./Banner.vue";
import { STATUS } from "./Banner.js";

export default {
  title: "Polaris/Banner",
  component: Banner,
  argTypes: {
    status: { 
      control: { 
        type: 'select', 
        options: STATUS
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-banner": Banner
  },
  template: `
    <polaris-banner
      title="Order archived"
      icon="&lt;svg class=&quot;Polaris-Icon__Svg&quot; viewBox=&quot;0 0 20 20&quot;&gt;&lt;path d=&quot;M13.707 10.707a.997.997 0 0 1-1.414 0L11 9.414V17a1 1 0 1 1-2 0V9.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 0 1 0 1.414zM17 2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h2V4H4v9h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14z&quot; fill-rule=&quot;evenodd&quot;&gt;&lt;/path&gt;&lt;/svg&gt;"
      :status="status"
      :action="{
        content: 'Action',
        onAction: onAction
      }"
    >
      <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
    </polaris-banner>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  onAction: action("onAction")
};