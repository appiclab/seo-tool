import ComponentHelpers from "./components/ComponentHelpers.js";

import AccountConnection from "./components/AccountConnection";
import ActionList from "./components/ActionList";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Breadcrumbs from "./components/Breadcrumbs";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import Card from "./components/Card";
import CardSection from "./components/CardSection";
import Checkbox from "./components/Checkbox";
import Choice from "./components/Choice";
import ChoiceList from "./components/ChoiceList";
import FormLayout from "./components/FormLayout";
import FormLayoutGroup from "./components/FormLayoutGroup";
import FormLayoutItem from "./components/FormLayoutItem";
import Icon from "./components/Icon";
import Label from "./components/Label";
import Labelled from "./components/Labelled";
import Layout from "./components/Layout";
import LayoutAnnotatedSection from "./components/LayoutAnnotatedSection";
import LayoutSection from "./components/LayoutSection";
import List from "./components/List";
import ListItem from "./components/ListItem";
import PageActions from "./components/PageActions";
import RadioButton from "./components/RadioButton";
import Spinner from "./components/Spinner";
import Select from "./components/Select";
import SkeletonBodyText from "./components/SkeletonBodyText";
import SkeletonDisplayText from "./components/SkeletonDisplayText";
import Stack from "./components/Stack";
import StackItem from "./components/StackItem";
import Tabs from "./components/Tabs";
import Tag from "./components/Tag";
import TextField from "./components/TextField";
import Modal from "./components/Modal";

export default {
  install(Vue, options) {
    const defaults = {
      componentNameFormat: (polarisName, changeCase) => {
        return `polaris-${changeCase.paramCase(polarisName)}`;
      }
    };

    options = Object.assign(defaults, options);

    ComponentHelpers.setComponentNameFormat(options.componentNameFormat);

    const components = {
      AccountConnection,
      ActionList,
      Avatar,
      Badge,
      Banner,
      Breadcrumbs,
      Button,
      ButtonGroup,
      Card,
      CardSection,
      Checkbox,
      Choice,
      ChoiceList,
      FormLayout,
      FormLayoutGroup,
      FormLayoutItem,
      Icon,
      Label,
      Labelled,
      Layout,
      LayoutAnnotatedSection,
      LayoutSection,
      List,
      ListItem,
      PageActions,
      RadioButton,
      Spinner,
      Select,
      SkeletonBodyText,
      SkeletonDisplayText,
      Stack,
      StackItem,
      Tabs,
      Tag,
      TextField,
      Modal
    };

    for (let polarisName in components) {
      const componentName = ComponentHelpers.getComponentName(polarisName);
      Vue.component(componentName, components[polarisName]);
    }
  }
};