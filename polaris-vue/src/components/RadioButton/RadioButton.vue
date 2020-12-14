<template>
  <polaris-choice :label="label" :label-hidden="labelHidden" :id="realId" :help-text="helpText">
    <template v-if="$slots.helpText" slot="helpText">
      <slot name="helpText"/>
    </template>

    <div class="Polaris-RadioButton">
      <input 
        :id="realId"
        :name="name"
        :value="value"
        type="radio"
        :checked="checked"
        :disabled="disabled"
        class="Polaris-RadioButton__Input"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
        :aria-describedby="helpText ? id+'HelpText' : ''"
      >

      <div class="Polaris-RadioButton__Backdrop"/>
      <div class="Polaris-RadioButton__Icon"/>
    </div>
  </polaris-choice>
</template>

<script src="./RadioButton.js"></script>
<style lang="scss" src="./RadioButton.scss"></style>
