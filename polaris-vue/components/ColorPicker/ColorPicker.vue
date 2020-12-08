<template>
  <div class="Polaris-ColorPicker">
    <div ref="palette" class="Polaris-ColorPicker__MainColor">
      <div
        class="Polaris-ColorPicker__ColorLayer"
        :style="colorLayerStyle"
      ></div>
      <polaris-color-picker-slidable
        :dragger-x="draggerX"
        :dragger-y="draggerY"
        @change="handleDraggerMove"
      >

      </polaris-color-picker-slidable>
    </div>
    <polaris-color-picker-hue-picker :hue="color.hue" @change="handleHueChange">
    </polaris-color-picker-hue-picker>
    <polaris-color-picker-alpha-picker
      v-if="allowAlpha"
      :alpha="color.alpha"
      @change="handleAlphaChange"
    >
    </polaris-color-picker-alpha-picker>
  </div>
</template>

<script src="./ColorPicker.js"></script>
<style lang="scss" src="./ColorPicker.scss"></style>
