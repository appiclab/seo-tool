<template>
  <dynamic-tag
    :tag="url ? 'a' : 'button'"
    :on="{
      click: onClick,
      blur: onBlur,
      focus: onFocus
    }"
    :type="url ? false : (submit ? 'submit' : 'button')"
    :aria-label="accessibilityLabel"
    :class="classes"
    :data-polaris-unstyled="url"
    :href="url"
    :disabled="isDisabled"
    :target="external ? '_blank' : false"
    :role="loading ? 'alert' : null"
    :aria-busy="loading ? true : null"
  >
    <span v-if="loading" class="Polaris-Button__Spinner">
      <polaris-spinner size="small" :color="spinnerColor" accessibility-label="Loading"/>
    </span>
    <span v-if="icon" class="Polaris-Button__Icon">
      <polaris-icon :source="realIcon"/>
    </span>
    <span v-if="$slots.default" class="Polaris-Button__Content">
      <slot/>
    </span>
    <span v-if="disclosure" class="Polaris-Button__Icon">
      <polaris-icon :source="disclosureIcon"/>
    </span>
  </dynamic-tag>
</template>

<script src="./Button.js"></script>
<style lang="scss" src="./Button.scss"></style>
