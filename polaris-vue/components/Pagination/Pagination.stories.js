import Pagination from "./Pagination.vue";

export default {
  title: "Polaris/Pagination",
  component: Pagination,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-pagination": Pagination
  },
  template: `
    <polaris-pagination
      :plain="plain"
      :has-previous="hasPrevious"
      :has-next="hasNext"
      @next=""
      @previous="">
    </polaris-pagination>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  plain: false,
  hasPrevious: false,
  hasNext: true
};
