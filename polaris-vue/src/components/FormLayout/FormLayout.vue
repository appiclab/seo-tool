<script>
import PolarisFormLayoutGroup from '../FormLayoutGroup';
import PolarisFormLayoutItem from '../FormLayoutItem';
import ComponentHelpers from '../ComponentHelpers.js';
export default {
  render(createElement) {
    return createElement('div', { 'class': 'Polaris-FormLayout' }, ComponentHelpers.wrapNodesWithComponent(createElement, this.$slots.default,  PolarisFormLayoutItem, [PolarisFormLayoutGroup]));
  }
}
</script>
<style lang="scss" src="./FormLayout.scss"></style>