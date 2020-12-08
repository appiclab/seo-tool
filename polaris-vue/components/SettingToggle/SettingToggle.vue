<template>
  <polaris-card sectioned>
    <polaris-setting-action>
      <template slot="children">
        <slot />
      </template>
      <polaris-button slot="action"
                      :primary="!enabled"
                      @click="handleAction(action)"
                      :url="action.url"
                      :accessibility-label="action.accessibilityLabel"
                      :disabled="action.disabled"
                      :destructive="action.destructive"
                      :icon="action.icon">
        {{ enabled ? "Disable" : "Enable" }}
      </polaris-button>
    </polaris-setting-action>
  </polaris-card>
</template>

<script src="./SettingToggle.js"></script>
