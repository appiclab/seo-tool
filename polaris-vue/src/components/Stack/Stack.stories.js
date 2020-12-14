import "./Stack.scss"
import Stack from "./Stack";
import StackItem from "../StackItem";
import { SPACING, ALIGNMENT, DISTRIBUTION } from "./Stack.js";

export default {
  title: "Polaris/Stack",
  component: Stack,
  argTypes: {
    spacing: { 
      control: { 
        type: 'select', 
        options: SPACING
      } 
    },
    alignment: { 
      control: { 
        type: 'select', 
        options: ALIGNMENT
      } 
    },
    distribution: { 
      control: { 
        type: 'select', 
        options: DISTRIBUTION
      } 
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-stack": Stack,
    "polaris-stack-item": StackItem,
  },
  template: `
    <polaris-stack :wrap="wrap" :spacing="spacing" :alignment="alignment" :distribution="distribution">
      <polaris-stack-item :fill="fill">
        <button type="button">Button 1</button>
      </polaris-stack-item>
      <button type="button">Button 2</button>
      <button type="button">Button 3</button>
    </polaris-stack>
  `
});

export const defaultView = Template.bind({});
defaultView.args = {
  wrap: false,
  fill: false,
  spacing: "tight",
  alignment: "leading",
  distribution: "leading"
}