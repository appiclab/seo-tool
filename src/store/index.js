import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    loading: false,
    page_type: null,
    page_type_options: [
      { label: "Pages", value: "page" },
      { label: "Products", value: "product" },
      { label: "Articles", value: "article" },
      { label: "Blogs", value: "blog" }
    ],
    tags: {
      page: [
        { label: "City", value: "city" },
        { label: "Street", value: "street" }
      ],
      product: [
        { label: "Store name", value: "name" },
        { label: "Store phone", value: "phone" }
      ],
      article: [
        { label: "Postal/ZIP code", value: "zip" },
        { label: "Customer email", value: "customer_email" }
      ],
      blog: [
        { label: "Country/Region", value: "country_name" }
      ],
    }
  },
  mutations: {
    PAGE_TYPE_SET(state, payload) {
      state.page_type = payload
    },
    PAGE_TYPE_CHANGE(state, payload) {
      state.page_type = payload
    }
  },
  actions: {
    async pageTypeChange(context, payload) {
      context.commit("PAGE_TYPE_CHANGE", null);

      if (payload) {
        context.commit("PAGE_TYPE_CHANGE", payload);
      }
    },
    async submit_handler(context, payload) {
      const options = {
        [context.state.page_type]: {
          metafields_global_alt_tag: payload.alt.value,
          metafields_global_title_tag: payload.title.value,
          metafields_global_description_tag: payload.description.value
        }
      };

      console.log('submit_handler', options);
    }
  },
  getters: {
    get_tags(state) {
      return state.tags[state.page_type] || [];
    }
  }
});
