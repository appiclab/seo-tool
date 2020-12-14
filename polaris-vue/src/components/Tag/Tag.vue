<template>
  <span
    class="Polaris-Tag" 
    :class="{ 'Polaris-Tag__pointer': hasClickListner }" 
    @click="$emit('click', $event)"
  >
    <span class="Polaris-Tag__Title" v-bind="$attrs">
      <slot/>
    </span>
    <template v-if="hasRemoveListener">
      <button
        aria-label="Remove"
        class="Polaris-Tag__Button"
        @click.stop="$emit('remove')"
        @mouseUp="handleMouseUp"
      >
        <polaris-icon :source="cancelSmall"/>
      </button>
    </template>
  </span>
</template>

<script src="./Tag.js"></script>
<style lang="scss" src="./Tag.scss"></style>
