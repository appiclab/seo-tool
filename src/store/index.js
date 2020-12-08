import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initTags = [
  { label: "City", value: "city" },
  { label: "Street", value: "street" },
  { label: "Store name", value: "name" },
  { label: "Store phone", value: "phone" },
  { label: "Postal/ZIP code", value: "zip" },
  { label: "Customer email", value: "customer_email" },
  { label: "Country/Region", value: "country_name" },
];

export default new Vuex.Store({
  modules: {},
  state: {
    loading: false,
    page_type: null,
    tags: [],
    tasks: []
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_PAGE_TYPE(state, payload) {
      state.page_type = payload
    },
    SET_TAGS(state, payload) {
      state.tags = payload
    },
    ADD_TASK(state, payload) {
      state.tasks.push(payload)
    },
    REMOVE_TASK(state, _id) {
      state.tasks = state.tasks.filter(task => task._id !== _id)
    }
  },
  actions: {
    async fetch(context, payload) {
      context.commit("SET_TAGS", []);
      context.commit("SET_PAGE_TYPE", payload);

      if (payload) {
        context.commit("SET_LOADING", true);

        const tags = await new Promise(resolve => {
          setTimeout(resolve.bind(null, initTags), 1000);
        })

        context.commit("SET_TAGS", tags);
        context.commit("SET_LOADING", false);
      }
    },
    async check(context) {
      const tasks = context.state.tasks;
      const promise = [];

      for (let i = 0; i < tasks.length; i++) {
        const url = `/tasks/${tasks[i]._id}`;
        const request = this.$axios({ url, method: "GET" });

        promise.push(request);
      }

      const resolved = Promise.all(promise);

      (await resolved).forEach(({ data }) => {
        if (data.task.fulfilled) {
          context.commit("REMOVE_TASK", data.task._id);
        }
      })
    },
    async submit_handler(context, payload) {
      context.commit("SET_LOADING", true);

      const options = {
        url: `/metafields/${context.state.page_type}`,
        method: "POST",
        data: {
          metafields: {
            metafields_global_title_tag: payload.title.value,
            metafields_global_description_tag: payload.description.value,
            alt: payload.alt.value,
          }
        }
      }

      const { data } = await this.$axios(options);

      console.log(data);
      // context.commit("ADD_TASK", task);
      context.commit("SET_LOADING", false);
    }
  },
  getters: {}
});
