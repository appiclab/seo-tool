<template>
  <div class="Polaris-ColorPicker__HuePicker" ref="picker">
    <polaris-color-picker-slidable 
      :dragger-y="offset"
      :dragger-x="0"
      @change="handleChange"
      @draggerheight="handleDraggerHeight"
    >
    </polaris-color-picker-slidable>
  </div>
</template>

<script src="./ColorPickerHuePicker.js"></script>
