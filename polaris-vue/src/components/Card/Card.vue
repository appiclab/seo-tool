<template>
  <div :class="classes">
    <div v-if="title || actions.length > 0" class="Polaris-Card__Header">
      <h2 v-if="title && actions.length === 0" class="Polaris-Heading">{{ title }}</h2>
      <polaris-stack v-if="actions.length > 0" alignment="baseline">
        <polaris-stack-item fill v-if="title">
          <h2 class="Polaris-Heading">{{ title }}</h2>
        </polaris-stack-item>
        <polaris-stack-item>
          <polaris-button-group>
            <polaris-button
              v-for="(action, index) in actions"
              :key="action"
              :slot="index"
              :url="action.url"
              @click="handleAction(action)"
              :destructive="action.destructive"
              :disabled="action.disabled"
              :accessibility-label="action.accessiblityLabel"
              :icon="action.icon"
              plain
            >{{ action.content }}</polaris-button>
          </polaris-button-group>
        </polaris-stack-item>
      </polaris-stack>
    </div>
    <template v-if="!sectioned">
      <slot />
    </template>
    <template v-if="sectioned">
      <polaris-card-section>
        <slot/>
      </polaris-card-section>
    </template>
    <div v-if="primaryFooterAction" class="Polaris-Card__Footer">
      <polaris-button-group>
        <template v-if="primaryFooterAction">
          <polaris-button
            slot="1"
            primary
            @click="handleAction(primaryFooterAction)"
            :accessibility-label="primaryFooterAction.accessibilityLabel"
            :url="primaryFooterAction.url"
            :disabled="primaryFooterAction.disabled"
            :destructive="primaryFooterAction.destructive"
            :icon="primaryFooterAction.icon"
          >{{ primaryFooterAction.content }}</polaris-button>
        </template>
        <template v-if="secondaryFooterAction">
          <polaris-button
            slot="2"
            @click="handleAction(secondaryFooterAction)"
            :accessibility-label="secondaryFooterAction.accessibilityLabel"
            :url="secondaryFooterAction.url"
            :disabled="secondaryFooterAction.disabled"
            :destructive="secondaryFooterAction.destructive"
            :icon="secondaryFooterAction.icon"
          >{{ secondaryFooterAction.content }}</polaris-button>
        </template>
      </polaris-button-group>
    </div>
  </div>
</template>

<script src="./Card.js"></script>
<style lang="scss" src="./Card.scss"></style>
