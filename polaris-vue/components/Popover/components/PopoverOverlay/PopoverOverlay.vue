<template>
  <polaris-positioned-overlay
    :full-width="fullWidth"
    :active="active"
    :preferred-position="preferredPosition"
    :activator-id="activatorId"
    @scrollout="handleScrollOut"
  >
    <template slot="overlay" slot-scope="props">
      <slot name="overlay" :data="props"/>
    </template>
  </polaris-positioned-overlay>
</template>

<script src="./PopoverOverlay.js"></script>
