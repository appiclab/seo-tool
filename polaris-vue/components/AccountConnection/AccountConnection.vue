<template>
  <polaris-card sectioned>
    <polaris-setting-action>
      <polaris-stack slot="children">
        <polaris-stack-item v-if="connected && avatarUrl">
          <polaris-avatar :source="avatarUrl" :name="realTitle"/>
        </polaris-stack-item>
        <polaris-stack-item fill>
          <div class="Polaris-AccountConnection__Content">
            <slot name="title">
              <div>{{ realTitle }}</div>
            </slot>
            <div v-if="details || this.$slots.details">
              <polaris-text-style variation="subdued">
                <slot name="details">{{ details }}</slot>
              </polaris-text-style>
            </div>
          </div>
        </polaris-stack-item>
      </polaris-stack>
      <polaris-button 
        slot="action"
        @click="handleAction(action)"
        :primary="!connected"
        :url="action.url"
        :destructive="action.destructive"
        :disabled="action.disabled"
        :icon="action.icon"
        :accessibility-label="action.accessibilityLabel"
      >
        {{ action.content }}
      </polaris-button>
    </polaris-setting-action>
    <div 
      v-if="$slots.default || $slots.termsOfService || termsOfService"
      class="Polaris-AccountConnection__TermsOfService"
    >
      <slot>
        <slot name="termsOfService">{{ termsOfService }}</slot>
      </slot>
    </div>
  </polaris-card>
</template>


<script src="./AccountConnection.js"></script>
<style lang="scss" src="./AccountConnection.scss"></style>