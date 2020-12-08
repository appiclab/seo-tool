<template>
  <div ref="track"
       class="Polaris-ColorPicker__Slidable"
       @mousedown="startDrag"
       @touchstart="startDrag">

    <div :style="draggerStyle"
         class="Polaris-ColorPicker__Dragger"
         ref="dragger">
    </div>
  </div>
</template>

<script src="./ColorPickerSlidable.js"></script>
