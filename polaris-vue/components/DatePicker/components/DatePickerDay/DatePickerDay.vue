<template>
  <button
    ref="button"
    role="gridcell"
    :tabindex="tabIndex"
    :class="classes"
    :aria-label="accessibilityLabel"
    :aria-selected="selected"
    :aria-disabled="disabled"
    @click="handleClick"
    @focus="onFocus"
    @mouseover="handleHover"
  >
    {{ dayNumber }}
  </button>
</template>

<script src="./DatePickerDay.js"></script>
