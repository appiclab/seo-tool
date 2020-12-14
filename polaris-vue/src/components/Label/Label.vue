<template>
  <div :class="classes">
    <label :id="`${uid}Label`" :for="uid" class="Polaris-Label__Text">
      <slot v-if="!$slots.children">{{ children }}</slot>
      <slot name="children"/>
    </label>
  </div>
</template>

<script src="./Label.js"></script>
<style lang="scss" src="./Label.scss"></style>
