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
        <template v-if="get_tags.length">
          <polaris-card-section style="border-top: none; padding-bottom: 0;">
            <polaris-stack wrap>
              <polaris-stack-item v-for="tag in get_tags" :key="tag.value">
                <polaris-tag @click="tagHandler" :data-tag="tag.value">{{ tag.label }}</polaris-tag>
              </polaris-stack-item>
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
            :options="page_type_options"
            @change="pageTypeChange"
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      timer: null,
      focused: null,
      metatags: {
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
      }
    }
  },
  computed: {
    ...mapGetters(['get_tags']),
    ...mapState({
      page_type_options: state => state.page_type_options,
      page_type: state => state.page_type
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
    ...mapActions(["pageTypeChange", "submit_handler"]),
    onFocus(e) {
      clearTimeout(this.timer)
      this.focused = e;
    },
    onBlur(e) {
      this.timer = setTimeout(() => {
        this.focused = null;
      }, 200);
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
  },
};
</script>