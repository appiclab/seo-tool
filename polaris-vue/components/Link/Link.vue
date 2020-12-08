<template>
  <a class="Polaris-Link" :href="url" :target="target" @click="onClick">
    <slot/>
  </a>
</template>

<script src="./Link.js"></script>
<style lang="scss" src="./Link.scss"></style>