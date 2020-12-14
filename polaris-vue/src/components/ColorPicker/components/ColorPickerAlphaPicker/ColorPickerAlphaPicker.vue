<template>
  <div class="Polaris-ColorPicker__AlphaPicker" ref="slider">
    <div class="Polaris-ColorPicker__ColorLayer" :style="background"></div>
    <polaris-color-picker-slidable 
      :dragger-y="offset"
      :dragger-x="0"
      @change="onChange"
      @draggerheight="handleDraggerHeight"
    >
    </polaris-color-picker-slidable>
  </div>
</template>

<script src="./ColorPickerAlphaPicker.js"></script>
