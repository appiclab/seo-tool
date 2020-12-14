import { action } from "@storybook/addon-actions";
import Modal from "./Modal.vue";

export default {
  title: "Polaris Advance/Modal",
  component: Modal,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-modal": Modal
  },
  template: `
    <div>
      <polaris-button @click="onLayout = false; show = true;">Open modal (no closing on clicking on layout)</polaris-button>
      <polaris-button @click="onLayout = true; show = true;">Open modal (closing by clicking on layout)</polaris-button>
      <modal v-if="onLayout" v-model="show" :closeOnLayout="true">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem ea eius in, itaque laudantium magni, nam numquam odit optio quisquam quo, suscipit voluptates! Assumenda inventore magni tenetur unde voluptate.</p>
      </modal>
      <polaris-modal v-else v-model="show" :closeOnLayout="false">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem ea eius in, itaque laudantium magni, nam numquam odit optio quisquam quo, suscipit voluptates! Assumenda inventore magni tenetur unde voluptate.</p>
      </polaris-modal>
    </div>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  onAction: action("onAction"),
  show: false,
  onLayout: false
};