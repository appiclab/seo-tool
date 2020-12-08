<template>
  <polaris-tabs v-if="!loading" @change="onTabChange">
    <template v-for="tab in tabs" :slot="tab.label">
      <component :is="tab.component" :key="tab.id" />
    </template>
  </polaris-tabs>
</template>

<script>
export default {
  components: {},
  data: () => ({
    loading: true,
    tabs: [
      {
        id: 1,
        label: "SEO Tool",
        component: () => import("./views/CreateMetaTags.vue")
      },
      {
        id: 2,
        label: "Delete Meta Tags",
        component: () => import("./views/DeleteMetaTags.vue")
      },
      {
        id: 3,
        label: "Export",
        component: () => import("./views/Export.vue")
      },
      {
        id: 4,
        label: "Documentation",
        component: () => import("./views/Documentation.vue")
      }
    ],
  }),
  methods: {
    onTabChange(title) {
      console.log('onTabChange', title);
    }
  },
  async created() {
    this.loading = false;
    document.querySelector("[data-role=loader]").style.display = 'none';
  }
};
</script>
