import Popover from "./Popover.vue";

export default {
  title: "Polaris/Popover",
  component: Popover,
  argTypes: {
    preferredPosition: { 
      control: { 
        type: 'select',
        options: ['above', 'below', 'mostSpace'] 
      } 
    }
  },
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    "polaris-popover": Popover
  },
  template: `
    <polaris-popover 
      :active="active" 
      @close="active = false" 
      :preferredPosition="preferredPosition"
      :sectioned="sectioned"
      >
      <template v-slot:activator>
        <polaris-button @click="active = !active">More actions</polaris-button>
      </template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque dolores facere fuga ipsum non vitae. A, accusamus, repudiandae! Atque culpa deserunt eaque ipsum laboriosam obcaecati perferendis provident reiciendis sapiente.
      </div>
    </polaris-popover>
  `
});

defaultView.args = {
  active: false,
  preferredPosition: "below"
};
