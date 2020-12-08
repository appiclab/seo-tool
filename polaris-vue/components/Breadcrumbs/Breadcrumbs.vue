<template>
  <nav role="navigation">
    <polaris-unstyled-link v-if="breadcrumbAction" :url="breadcrumbAction.url" class="Polaris-Breadcrumbs__Breadcrumb">
        <span class="Polaris-Breadcrumbs__Icon">
          <polaris-icon :source="chevronIcon" />
        </span>
      {{ breadcrumbAction.content }}
    </polaris-unstyled-link>
  </nav>
</template>

<script src="./Breadcrumbs.js"></script>
<style lang="scss" src="./Breadcrumbs.scss"></style>