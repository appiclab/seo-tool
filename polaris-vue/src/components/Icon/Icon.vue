<template>
  <span :class="classes" :aria-label="accessibilityLabel">
    <div v-if="source === 'placeholder' || !finalSource" class="Polaris-Icon__Placeholder" />
    <svg 
      v-if="source !== 'placeholder' && finalSource" 
      class="Polaris-Icon__Svg" :viewBox="finalSource.viewBox" 
      v-html="finalSource.body"
    />
  </span>
</template>

<script src="./Icon.js"></script>
<style lang="scss" src="./Icon.scss"></style>