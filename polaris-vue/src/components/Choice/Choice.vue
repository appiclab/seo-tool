<template>
  <div>
    <label :class="labelClasses" :for="id">
        <span class="Polaris-Choice__Control">
          <slot v-if="!$slots.children">{{ children }}</slot>
          <slot name="children"/>
        </span>
      <span class="Polaris-Choice__Label">{{ label }}</span>
    </label>
    <div v-if="typeof error === 'string' || helpText || $slots.helpText"
         class="Polaris-Choice__Descriptions">
      <div v-if="typeof error === 'string'" class="Polaris-Choice__Error" :id="id+'Error'">
        <div class="Polaris-Choice__ErrorIcon">
          <polaris-icon :source="alertIcon"/>
          {{ error }}
        </div>
      </div>
      <div v-if="helpText || $slots.helpText" class="Polaris-Choice__HelpText" :id="id+'HelpText'">
        <slot name="helpText">{{ helpText }}</slot>
      </div>
    </div>
  </div>
</template>

<script src="./Choice.js"></script>
<style lang="scss" src="./Choice.scss"></style>
