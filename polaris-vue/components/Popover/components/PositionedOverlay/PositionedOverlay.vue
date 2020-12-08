<template>
  <div
    class="Polaris-PositionedOverlay"
    :style="containerStyle"
    v-show="active"
    ref="overlay"
  >
    <slot
      name="overlay"
      :measuring="measuring"
      :left="left"
      :desired-height="height"
      :positioning="positioning"
      :tip-position="tipPosition"
    >
    </slot>
  </div>
</template>


<script src="./PositionedOverlay.js"></script>
<style lang="scss" src="./PositionedOverlay.scss"></style>
