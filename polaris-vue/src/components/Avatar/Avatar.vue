<template>
  <span :aria-label="label" role="img" :class="classes">
      <polaris-image 
        v-if="source"
        role="presentation"
        :source="source"
        :alt="alt"
        class="Polaris-Avatar__Image"
      />
      <span v-if="!source && !customer" aria-hidden="true" class="Polaris-Avatar__Initials">
        {{ initials }}
      </span>
      <span v-if="!source && customer" v-html="customerSvg" class="Polaris-Avatar__Image"/>
  </span>
</template>

<script src="./Avatar.js"></script>
<style lang="sass" src="./Avatar.scss"></style>
