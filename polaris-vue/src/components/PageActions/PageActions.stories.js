import PageActions from "./PageActions.vue";

export default {
  title: "Polaris/PageActions",
  component: PageActions,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-page-actions": PageActions
  },
  template: `
    <polaris-page-actions :primary-action="{ content: 'Save' }" />
  `,
});

export const View2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-page-actions": PageActions
  },
  template: `
    <polaris-page-actions 
      :primary-action="{content: 'Save'}"
      :secondary-actions="[
          {content: 'Duplicate', onAction: testAlert},
      ]">
    </polaris-page-actions>
  `,
});

View2.args = {
  testAlert: () => {
    console.log("testAlert");
  }
};

export const View3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-page-actions": PageActions
  },
  template: `
    <polaris-page-actions 
      :primary-action="{content: 'Save'}"
      :secondary-actions="[
          {content: 'Duplicate', onAction: testAlert},
          {content: 'View on your store'},
      ]">
    </polaris-page-actions>
  `,
});

View3.args = {
  testAlert: () => {
    console.log("testAlert");
  }
};
