import Image from "./Image.vue";

export default {
  title: "Polaris/Image",
  component: Image,
  argTypes: {},
};

export const source = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-image": Image
  },
  template: '<polaris-image :alt="alt" :source="source" />',
});

source.args = {
  source: "https://vuejs.org/images/logo.png",
  alt: "normal image",
};

export const sourceSet = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-image": Image
  },
  template: '<polaris-image :alt="alt" :source-set="sourceSet" />',
});

sourceSet.args = {
  alt: "normal image",
  sourceSet: [
    { 
      source: 'http://lorempixel.com/800/400/', 
      descriptor: '800w' 
    },
    { 
      source: 'http://lorempixel.com/1200/800/', 
      descriptor: '1200w' 
    },
  ]
};