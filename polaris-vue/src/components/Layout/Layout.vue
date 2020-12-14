<template>
  <div class="Polaris-Layout">
    <template v-if="sectioned" v-for="(slot, name) in $slots">
      <polaris-layout-section :key="name">
        <slot :name="name"></slot>
      </polaris-layout-section>
    </template>
    <template v-if="!sectioned" v-for="(slot, name) in $slots">
      <slot :name="name"></slot>
    </template>
  </div>
</template>

<script src="./Layout.js"></script>
<style lang="scss" src="./Layout.scss"></style>
