<template>
  <div :class="classes">
    <div v-if="title" class="Polaris-Card__SectionHeader">
      <polaris-subheading tag="h3">
        {{ title }}
      </polaris-subheading>
    </div>
    <slot/>
  </div>
</template>

<script src="./CardSection.js"></script>
