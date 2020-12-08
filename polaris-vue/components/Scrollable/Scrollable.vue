<template>
  <div :class="classes" ref="scrollArea" @scroll="$forceUpdate()">
    <slot/>
  </div>
</template>

<script src="./Scrollable.js"></script>
<style lang="scss" src="./Scrollable.scss"></style>