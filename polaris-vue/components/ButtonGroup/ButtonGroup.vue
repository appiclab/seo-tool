<template>
  <div :class="classes">
    <slot/>
    <polaris-button-group-item v-for="(slot, name) in $slots" :key="name">
      <template v-if="name !== 'default'">
        <slot :name="name"/>
      </template>
    </polaris-button-group-item>
  </div>
</template>

<script src="./ButtonGroup.js"></script>
<style lang="scss" src="./ButtonGroup.scss"></style>
