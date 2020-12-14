import Vue from "vue";
import App from "./App.vue";
import store from './store';
import axios from "./helpers/axios.js";

import "polaris-vue/polaris-vue.css";
import PolarisVue from "polaris-vue/polaris-vue.js";
Vue.use(PolarisVue);

Vue.config.productionTip = false;
Vue.prototype.$axios = store.$axios = axios;

new Vue({
  store,
  render: h => h(App),
}).$mount("#root");