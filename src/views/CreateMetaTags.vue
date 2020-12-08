<template>
  <polaris-layout>
    <polaris-layout-section secondary>
      <polaris-card
        title="The settings for the formation of meta-tags and description"
        style="background-color: transparent; box-shadow: none;"
      >
        <polaris-card-section style="padding-bottom: 0;">
          <polaris-list type="number" style="margin-bottom: 0;">
            <polaris-list-item>Select the page type</polaris-list-item>
            <polaris-list-item>Fill the meta fields for the chosen page type</polaris-list-item>
            <polaris-list-item>Use the tags below. Place the cursor in the required place and click on the required tag to insert its value into the meta field.</polaris-list-item>
          </polaris-list>
        </polaris-card-section>
        <template v-if="page_type">
          <polaris-card-section style="border-top: none; padding-bottom: 0;">
            <polaris-stack wrap v-if="tags.length">
              <polaris-stack-item v-for="tag in tags" :key="tag.value">
                <polaris-tag @click="tagHandler" :data-tag="tag.value">{{ tag.label }}</polaris-tag>
              </polaris-stack-item>
            </polaris-stack>
            <polaris-stack distribution="center" v-else>
              <polaris-spinner color="teal" size="large" />
            </polaris-stack>
          </polaris-card-section>
        </template>
      </polaris-card>
    </polaris-layout-section>
    <polaris-layout-section>
      <polaris-card sectioned>
        <polaris-form-layout>
          <polaris-select
            label="Select the page type"
            placeholder="Select…"
            :options="options"
            @change="fetch"
          />
          <template v-for="metatag in metatags">
            <polaris-text-field
              v-model="metatag.value" 
              :key="metatag.ref"
              :ref="metatag.ref"
              :multiline="metatag.multiline"
              :label="metatag.label" 
              @focus="onFocus(metatag.ref)"
              @blur="onBlur(metatag.ref)"
              :disabled="disabledFields"
            />
          </template>
        </polaris-form-layout>
      </polaris-card>
      <polaris-page-actions 
        :primary-action="{ 
          content: 'Save', 
          onAction: submit_handler.bind(null, metatags),
          disabled: disabledButton
        }" 
      />
    </polaris-layout-section>
  </polaris-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

const options = [
  { label: "Page", value: "page" },
  { label: "Product", value: "product" },
  { label: "Article", value: "article" },
  { label: "Blog", value: "blog" }
];

const metatags = {
  title: {
    ref: "title",
    value: "Meta Title",
    label: "Meta Title",
    placeholder: "Meta Title",
    multiline: false,
  },
  description:{
    ref: "description",
    multiline: true,
    value: "Meta Description",
    label: "Meta Description",
    placeholder: "Meta Description"
  },
  alt: {
    ref: "alt",
    multiline: true,
    value: "Alt Text for all images on the page",
    label: "Alt Text for all images on the page",
    placeholder: "Alt Text for all images on the page"
  }
};

export default {
  components: {},
  data() {
    return {
      timer: null,
      tasksTimer: null,
      focused: null,
      metatags,
      options
    }
  },
  watch: {
    tasks() {
      clearInterval(this.tasksTimer);

      if (this.tasks.length) {
        this.checkTasks();
      }
    }
  },
  computed: {
    ...mapState({
      page_type: state => state.page_type,
      tags: state => state.tags,
      loading: state => state.loading,
      tasks: state => state.tasks
    }),
    disabledFields() {
      return !this.page_type || this.loading;
    },
    disabledButton() {
      return this.loading
        || !this.metatags.title.value
        || !this.metatags.description.value
        || !this.metatags.alt.value;
    }
  },
  methods: {
    ...mapActions(["fetch", "submit_handler", "check"]),
    onFocus(e) {
      clearTimeout(this.timer)
      this.focused = e;
    },
    onBlur(e) {
      this.timer = setTimeout(() => {
        this.focused = null;
      }, 500)
    },
    tagHandler(event) {
      if (this.focused) {
        const $el = this.$refs[this.focused][0].$el;
        const textarea = $el.querySelector('.Polaris-TextField__Input')

        const cursorPosition = textarea.selectionEnd;
        const start = textarea.value.substring(0, textarea.selectionStart);
        const end = textarea.value.substring(textarea.selectionStart);
        const tag = event.target.dataset.tag;

        let field = this.metatags[this.focused];

        if (!start && !end) {
          field.value = `%${tag}%`;
        } else if (!start) {
          field.value = `%${tag}% ${end}`;
        } else if (!end) {
          field.value = `${start} %${tag}%`;
        } else {
          field.value = `${start} %${tag}% ${end}`;
        }

        textarea.focus();
      }
    },
    checkTasks() {
      this.tasksTimer = setInterval(this.check, 1000);
    }
  },
  created() {}
};
</script>