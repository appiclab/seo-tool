<template>
  <div class="Polaris-SkeletonBodyTextContainer">
    <div
      v-for="i in lines"
      :key="i"
      class="Polaris-SkeletonBodyText"
    />
  </div>
</template>

<script src="./SkeletonBodyText.js"></script>
<style lang="scss" src="./SkeletonBodyText.scss"></style>
