<template>
  <div class="Polaris-PageActions">
    <polaris-stack spacing="tight" :distribution="secondaryActions.length > 0 ? 'equalSpacing' : 'trailing'">
      <polaris-stack-item v-if="secondaryActions.length > 0">
        <polaris-button-group>
          <polaris-button v-for="(action, index) in secondaryActions"
                            :key="index"
                            :slot="index"
                            :accessibility-label="action.accessibilityLabel"
                            @click="handleAction(action)"
                            :url="action.url"
                            :disabled="action.disabled"
                            :destructive="action.destructive">
            {{ action.content }}
          </polaris-button>
        </polaris-button-group>
      </polaris-stack-item>
      <polaris-stack-item v-if="primaryAction">
        <polaris-button :accessibility-label="primaryAction.accessibilityLabel"
                          @click="handleAction(primaryAction)"
                          :url="primaryAction.url"
                          :disabled="primaryAction.disabled"
                          :destructive="primaryAction.destructive"
                          primary>
          {{ primaryAction.content }}
        </polaris-button>
      </polaris-stack-item>
    </polaris-stack>
  </div>
</template>

<script src="./PageActions.js"></script>
<style lang="scss" src="./PageActions.scss"></style>
