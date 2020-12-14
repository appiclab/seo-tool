import Vue from "vue";
import TextField from "../TextField";
import FormLayoutGroup from "../FormLayoutGroup";

Vue.component("polaris-text-field", TextField);
Vue.component("polaris-form-layout-group", FormLayoutGroup);

import FormLayout from "./FormLayout.vue";

export default {
  title: "Polaris/FormLayout",
  component: FormLayout,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-form-layout": FormLayout,
  },
  template: `
    <polaris-form-layout>
      <polaris-text-field label="Store name" />
      <polaris-text-field label="Account email"type="email"disabled />
    </polaris-form-layout>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {};

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-form-layout": FormLayout,
  },
  template: `
    <polaris-form-layout>
      <polaris-form-layout-group :condensed="condensed">
          <polaris-text-field label="Store name" />
          <polaris-text-field label="Account email" type="email" />
          <polaris-text-field label="Store name" />
          <polaris-text-field label="Account email" type="email" />
      </polaris-form-layout-group>
    </polaris-form-layout>
  `
});

export const View2 = Template2.bind({});
View2.args = {
  condensed: true
};

const Template3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-form-layout": FormLayout,
  },
  template: `
    <polaris-form-layout>
      <polaris-form-layout-group 
        :condensed="condensed"
        title="Basic options"
        help-text="Helpful hint text"
      >
        <polaris-text-field label="Store name"/>
        <polaris-text-field label="Account email" type="email" />
      </polaris-form-layout-group>
      <polaris-form-layout-group title="Advanced">
        <p slot="helpText"><a href="#">HTML</a> help text</p>
        <polaris-text-field label="Store name" />
        <polaris-text-field label="Account email" type="email" />
      </polaris-form-layout-group>
    </polaris-form-layout>
  `
});

export const View3 = Template3.bind({});
View3.args = {
  condensed: true
};