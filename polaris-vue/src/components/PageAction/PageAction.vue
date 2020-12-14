<template>
  <dynamic-template>
    <template v-if="url" slot="active">
      <polaris-unstyled-link class="Polaris-Page__Action"
                               :external="external"
                               :url="url"
                               @mouse-up="handleMouseUp"
                               :aria-label="accessibilityLabel">
        <template v-if="icon || disclosure">
                <span class="Polaris-Page__ActionContent">
                    <span v-if="icon" class="Polaris-Page__ActionIcon">
                        <polaris-icon :source="icon"/>
                    </span>
                    <span>
                        <slot v-if="icon || disclosure"></slot>
                    </span>
                    <span v-if="disclosure" class="Polaris-Page__ActionIcon">
                        <polaris-icon source="caretDown"/>
                    </span>
                </span>
        </template>
        <template v-if="!icon && !disclosure">
          <slot v-if="!icon && !disclosure"/>
        </template>
      </polaris-unstyled-link>
    </template>
    <template v-if="!url" slot="active">
      <button :class="classes"
              @click="onAction"
              @mouse-up="handleMouseUp"
              :aria-label="accessibilityLabel"
              :disabled="disabled"
              type="button">
        <template v-if="icon || disclosure">
                <span class="Polaris-Page__ActionContent">
                    <span v-if="icon" class="Polaris-Page__ActionIcon">
                        <polaris-icon :source="icon"/>
                    </span>
                    <span>
                        <slot v-if="icon || disclosure"></slot>
                    </span>
                    <span v-if="disclosure" class="Polaris-Page__ActionIcon">
                        <polaris-icon source="caretDown"/>
                    </span>
                </span>
        </template>
        <template v-if="!icon && !disclosure">
          <slot v-if="!icon && !disclosure"></slot>
        </template>
      </button>
    </template>
  </dynamic-template>
</template>

<script src="./PageAction.js"></script>
