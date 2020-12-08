<template>
  <dynamic-tag :tag="activatorWrapper || 'div'" ref="container">
    <!-- The button -->
    <slot name="activator" :activate="onActivate"/>

    <!-- The Content -->
    <polaris-popover-overlay
      :id="realId+'Overlay'"
      :active="active"
      :activator-id="activatorId"
      :preferred-position="preferredPosition"
      @close="onClose"
    >
      <template slot="overlay" slot-scope="props">
        <div :class="classes" ref="content">
          <div
            v-if="arrow && !props.data.measuring"
            :style="{ left: props.data.tipPosition+'px' }"
            class="Polaris-Popover__Tip"
          />
          <div class="Polaris-Popover__FocusTracker" @focus="handleFocusFirstItem" tabindex="0"/>
          <div class="Polaris-Popover__Wrapper">
            <slot/>
          </div>
          <div class="Polaris-Popover__FocusTracker" @focus="handleFocusLastItem" tabindex="0"/>
        </div>
      </template>
    </polaris-popover-overlay>
  </dynamic-tag>
</template>

<script src="./Popover.js"></script>
<style lang="scss" src="./Popover.scss"></style>
