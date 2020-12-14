<template>
  <dynamic-tag :tag="hasMultipleSections ? 'div' : 'ul'" class="Polaris-ActionList">
    <polaris-action-list-section 
      v-for="(section, index) in finalSections"
      :key="index"
      :section="section"
      @action-any-item="onActionAnyItem"
      :has-multiple-sections="hasMultipleSections"
    />
  </dynamic-tag>
</template>

<script src="./ActionList.js"></script>
<style lang="scss" src="./ActionList.scss"></style>
