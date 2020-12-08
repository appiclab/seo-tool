import Page from "./Page.vue";
import Vue from "vue";
import Breadcrumbs from "../Breadcrumbs";
import Pagination from "../Pagination";
import Popover from "../Popover";
import ActionList from "../ActionList";

Vue.component("polaris-breadcrumbs", Breadcrumbs);
Vue.component("polaris-action-list", ActionList);
Vue.component("polaris-pagination", Pagination);
Vue.component("polaris-popover", Popover);
export default {
  title: "Polaris/Page",
  component: Page,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-page": Page
  },
  template: `
    <polaris-page
      :breadcrumbs="[
          { 
            content: 'Products', 
            accessibilityLabel: 'Test', 
            url: 'http://google.com/'
          }
      ]"
      title="Jar with lock-lid"
      :primary-action="{
        content: 'Save', 
        disabled: true
      }"
      :secondary-actions="[
          { 
            content: 'Duplicate', 
            onAction: testAlert
          },
          { 
            content: 'View on your store'
          },
      ]"
      :pagination="{
        hasNext: true, 
        hasPrevious: false
      }"
    >
      <p>Page content</p>
    </polaris-page>
  `,
});

defaultView.args = {
  testAlert: () => {
    console.log("testAlert");
  }
};
