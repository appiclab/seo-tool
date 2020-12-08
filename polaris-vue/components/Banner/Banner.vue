<template>
  <div
    :class="classes"
    tabindex="0"
    :role="'banner '+((status == 'warning' || status == 'critical') ? 'alert' : '')"
    :aria-describedby="realId+'Content'"
    :aria-labelledby="realId+'Heading'"
  >
    <div v-if="hasOnDismissHandler" class="Polaris-Banner__Dismiss">
      <polaris-button
        plain
        icon-only
        accessibility-label="Dimiss notification"
        :icon="dismissIcon"
        @click="onDismiss"
      />
    </div>
    <div class="Polaris-Banner__Ribbon">
      <polaris-icon :source="iconSource" :color="iconColor" backdrop />
    </div>
    <div>
      <div v-if="title" class="Polaris-Banner__Heading" :id="realId+'Heading'">
        <polaris-heading tag="p">{{ title }}</polaris-heading>
      </div>
      <div v-if="$slots.default || action || secondaryAction || children"
           class="Polaris-Banner__Content" id="realId+'Content'">
        <slot>
          <div v-if="children">{{ children }}</div>
        </slot>

        <div v-if="action" class="Polaris-Banner__Actions">
          <polaris-button-group>
            <polaris-button
              slot="1"
              outline
              @click="handleAction(action)"
              :url="action.url"
              :destructive="action.destructive"
              :disabled="action.disabled"
              :accessibility-label="action.accessibilityLabel"
              :icon="action.label"
            >
              {{ action.content }}
            </polaris-button>
            <div
              v-if="secondaryAction" slot="2"
              class="Polaris-Banner__SecondaryAction"
              @click="handleAction(secondaryAction, true)"
            >
              <span class="Polaris-Banner__Text">{{ secondaryAction.content }}</span>
            </div>
          </polaris-button-group>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./Banner.js"></script>
<style lang="scss" src="./Banner.scss"></style>
