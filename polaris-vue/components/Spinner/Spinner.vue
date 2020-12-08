<template>
  <svg
    v-html="spinnerSVG.body"
    :view-box="spinnerSVG.viewBox"
    :class="classes"
    :aria-label="accessibilityLabel"
    role="status"
  />
</template>

<script src="./Spinner.js"></script>
<style lang="scss" src="./Spinner.scss"></style>
