import Tabs from "./Tabs.vue";
import { action } from '@storybook/addon-actions';

export default {
  title: "Polaris/Tabs",
  component: Tabs,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-tabs": Tabs
  },
  template: `
    <polaris-tabs :value="value" @change="change">
      <template slot="Tab 1">Tab 1</template>
      <template slot="Tab 2">Tab 2</template>
      <template slot="Tab 3">Tab 3</template>
      <template slot="Tab 4">Tab 4</template>
      <template slot="Tab 5">Tab 5</template>
    </polaris-tabs>
  `
});

defaultView.args = {
  value: 'Tab 2',
  change: action('change')
};
