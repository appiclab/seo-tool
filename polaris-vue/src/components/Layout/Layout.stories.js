import Layout from "./Layout.vue";

import Vue from "vue";
import Card from "../Card";
import Heading from "../Heading";
import TextContainer from "../TextContainer";
import LayoutSection from "../LayoutSection";
import LayoutAnnotatedSection from "../LayoutAnnotatedSection";

Vue.component("polaris-card", Card);
Vue.component("polaris-heading", Heading);
Vue.component("polaris-text-container", TextContainer);
Vue.component("polaris-layout-section", LayoutSection);
Vue.component("polaris-layout-annotated-section", LayoutAnnotatedSection);

export default {
  title: "Polaris/Layout",
  component: Layout,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-layout": Layout
  },
  template: `
    <polaris-layout>
      <polaris-layout-section>
          <polaris-card title="Order details" sectioned>
              <p>View a summary of your order.</p>
          </polaris-card>
      </polaris-layout-section>
      <polaris-layout-section secondary>
          <polaris-card title="Tags" sectioned>
              <p>Add tags to your order.</p>
          </polaris-card>
      </polaris-layout-section>
    </polaris-layout>
  `,
});

export const View2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-layout": Layout
  },
  template: `
    <polaris-layout>
      <polaris-layout-annotated-section
          title="Store details"
          description="Shopify and your customers will use this information to contact you.">
          <polaris-card title="Order details" sectioned>
              <p>View a summary of your order.</p>
          </polaris-card>
      </polaris-layout-annotated-section>
    </polaris-layout>
  `,
});

export const View3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-layout": Layout
  },
  template: `
    <polaris-layout>
      <polaris-layout-annotated-section title="Store details">
          <template slot="description">
              <p>Shopify and your customers will use this information to contact you.</p>
              <polaris-button outline>
                  View contact form
              </polaris-button>
          </template>
          <polaris-card title="Order details" sectioned>
              <p>View a summary of your order.</p>
          </polaris-card>
      </polaris-layout-annotated-section>
    </polaris-layout>
  `,
});

