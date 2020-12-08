<template>
  <div :aria-hidden="!open" :style="{ height: displayHeight }" :class="classes" ref="wrapper">
    <div ref="heightNode">
      <slot/>
    </div>
  </div>
</template>

<script src="./Collapsible.js"></script>
<style lang="scss" src="./Collapsible.scss"></style>