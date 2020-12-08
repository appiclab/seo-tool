<template>
  <polaris-stack wrap v-if="tags.length">
    <polaris-stack-item v-for="tag in tags" :key="tag">
      <polaris-tag @click="$emit('mask', $event)" :data-tag="tag">{{ tag }}</polaris-tag>
    </polaris-stack-item>
  </polaris-stack>
  <polaris-stack distribution="center" v-else>
    <polaris-spinner color="teal" size="large" />
  </polaris-stack>
</template>

<script>
export default {
  props: {
    pageType: {
      type: String | null,
      default: () => (null)
    }
  },
  data() {
    return {
      tags: []
    }
  },
  watch: {
    pageType() {
      console.log(this.pageType)
      this.loadTags(this.pageType);
    }
  },
  methods: {
    onClick() {
      console.log('onClick');
    },
    async loadTags(pageType) {
      if (!pageType) {
        return this.tags = [];
      }

      this.tags = [];
      this.$emit('loading', true);

      const tags = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
              "Store name",
              "Customer email",
              "Store phone",
              "Street",
              "Apartment, suite, etc",
              "City",
              "Postal/ZIP code",
              "State",
              "Country/Region"
            ])
          }, 1000);
        })

      console.log(Array.isArray(tags))

      this.tags = [...tags];

      this.$emit('loading', false);
    }
  },
  created() {
    this.loadTags(this.pageType);
  }
};
</script>