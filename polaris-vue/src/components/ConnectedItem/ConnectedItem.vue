<template>
  <div @blur="focused = false" @focus="focused = true" :class="classes">
    <slot v-if="!$slots.children">{{ children }}</slot>
    <slot name="children"/>
  </div>
</template>

<script src="./ConnectedItem.js"></script>
