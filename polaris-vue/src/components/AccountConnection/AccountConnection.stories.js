import AccountConnection from "./AccountConnection.vue";
import Vue from "vue";
import Link from "../Link";
import Stack from "../Stack";
import StackItem from "../StackItem";

Vue.component("polaris-link", Link);
Vue.component("polaris-stack", Stack);
Vue.component("polaris-stack-item", StackItem);
export default {
  title: "Polaris/AccountConnection",
  component: AccountConnection,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-account-connection": AccountConnection
  },
  template: `
    <polaris-account-connection
      :connected="connected"
      title="Example app"
      :action="{ content: 'Connect', onAction: '' }"
      details="No account connected"
    >
      <p>
          By clicking Connect, you agree to accept Sample App's 
          <polaris-link url="https://google.com/">Terms and conditions</polaris-link>. 
          You'll pay a commission rate of 15% on sales made through Example App.
      </p>
    </polaris-account-connection>
  `
});

export const View2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-account-connection": AccountConnection
  },
  template: `
    <polaris-account-connection 
      title="Example app"
      :action="{content: 'Disconnect', onAction: ''}"
      details="Connected"
      :connected="connected"
      avatar-url="https://vuejs.org/images/logo.png"
      terms-of-service="You'll pay a commission rate of 15% on sales made through Example App.">
    </polaris-account-connection>
  `
});

export const View3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-account-connection": AccountConnection
  },
  template: `
    <polaris-account-connection 
      :action="{ content: 'Disconnect', onAction: '' }"
      :connected="connected"
      avatar-url="https://vuejs.org/images/logo.png"
    >
      <div slot="title">
          Example <strong>app</strong>
      </div>
      <p slot="termsOfService">
          By clicking Connect, you agree to accept Sample App's 
          <polaris-link url="https://google.com/">Terms and conditions</polaris-link>. 
          You'll pay a commission rate of 15% on sales made through Example App.
      </p>
      <span slot="details">
          Connected <i>example</i>
      </span>
    </polaris-account-connection>
  `
});

