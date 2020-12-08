<template>
  <div :class="classes">
    <progress class="Polaris-ProgressBar__Progress" :value="realProgress" max="100" />
    <div 
      class="Polaris-ProgressBar__Indicator"
      role="progressbar"
      aria-hidden="true"
      :style="{ width: realProgress + '%' }"
    >
      <span class="Polaris-ProgressBar__Label">
          {{ realProgress }}
      </span>
    </div>
  </div>
</template>

<script src="./ProgressBar.js"></script>
<style lang="scss" src="./ProgressBar.scss"></style>