<template>
  <div :class="classes" @focusin="focused = true" @focusout="focused = false" tabindex="-1">
    <slot/>
  </div>
</template>

<script src="./ButtonGroupItem.js"></script>
