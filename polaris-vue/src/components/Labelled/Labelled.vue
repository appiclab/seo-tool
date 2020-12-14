<template>
  <div :class="classes">
    <div v-if="label" class="Polaris-Labelled__LabelWrapper">
      <polaris-label :id="id" :hidden="false" :action="action">
        {{ label }}
      </polaris-label>
      <polaris-button
        v-if="action"
        plain
        @click="handleAction(action, true)"
        :accessibility-label="action.accessibiltyLabel"
        :url="action.url"
        :external="action.external"
        :disabled="action.disabled"
        :destructive="action.destructive"
        :icon="action.icon"
        :loading="action.loading"
      >
        {{ action.content }}
      </polaris-button>
    </div>

    <slot name="children"/>
    <slot v-if="!$slots.children">{{ children }}</slot>

    <div v-if="error && typeof error == 'string'" :id="id+'Error'" class="Polaris-Labelled__Error">
      <div class="Polaris-Labelled__ErrorIcon">
        <polaris-icon :source="alertIcon"/>
      </div>
      {{ error }}
    </div>

    <div v-if="helpText || $slots.helpText" :id="id+'HelpText'" class="Polaris-Labelled__HelpText">
      <slot name="helpText">{{ helpText }}</slot>
    </div>
  </div>
</template>

<script src="./Labelled.js"></script>
<style lang="scss" src="./Labelled.scss"></style>
