import CalloutCard from "./CalloutCard.vue";

export default {
  title: "Polaris/CalloutCard",
  component: CalloutCard,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-callout-card": CalloutCard
  },
  template: `
    <polaris-callout-card 
      title="Customize the style of your checkout"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      :primary-action="{content:'Customize', onAction: ''}"
      :secondary-action="{content:'Not now', onAction: ''}">
      <p>Upload your store's logo, change colors and fonts, <b>and more</b>.</p>
    </polaris-callout-card>
  `
});

export const View2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-callout-card": CalloutCard
  },
  template: `
    <polaris-callout-card 
      title="Customize the style of your checkout"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      :primary-action="{ content:'Customize', onAction: '' }"
      :secondary-action="{ content:'Not now', onAction: '' }"
      children="Upload your store's logo, change colors and fonts, and more.">
    </polaris-callout-card>
  `
});