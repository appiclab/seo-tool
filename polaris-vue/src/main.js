import "./main.scss";

import ComponentHelpers from "./components/ComponentHelpers.js";
import components from "./components";

export default {
  install(Vue, options) {
    const defaults = {
      componentNameFormat: (polarisName, changeCase) => {
        return `polaris-${changeCase.paramCase(polarisName)}`;
      }
    };

    options = Object.assign(defaults, options);

    ComponentHelpers.setComponentNameFormat(options.componentNameFormat);

    for (let polarisName in components) {
      const componentName = ComponentHelpers.getComponentName(polarisName);
      Vue.component(componentName, components[polarisName]);
    }
  }
};