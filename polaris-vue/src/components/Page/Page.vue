<template>
  <div :class="classes">
    <polaris-page-header :title="title"
                         :icon="icon"
                         :breadcrumbs="breadcrumbs"
                         :separator="separator"
                         :primary-action="primaryAction"
                         :secondary-actions="secondaryActions"
                         :pagination="pagination"
                         :action-groups="actionGroups"/>
    <div class="Polaris-Page__Content">
      <slot/>
    </div>
  </div>
</template>

<script src="./Page.js"></script>
<style lang="scss" src="./Page.scss"></style>
