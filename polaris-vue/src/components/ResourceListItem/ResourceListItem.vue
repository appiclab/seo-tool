<template>
  <div ref="element"
       :class="classes"
       @focus="onFocus"
       @blur="onBlur"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave">
    <polaris-unstyled-link v-if="url" class="Polaris-ResourceList__Link" :aria-describedby="realId" :url="url"/>

    <div class="Polaris-ResourceList__Container" :id="realId">

      <template v-if="media || $slots.media">
        <div class="Polaris-ResourceList__Media">
          <slot name="media">
            <polaris-thumbnail :source="media.src" :alt="media.alt" :size="media.size" />
          </slot>
        </div>
      </template>

      <div class="Polaris-ResourceList__Content">
        <div class="Polaris-ResourceList__Attributes">
          <p class="Polaris-ResourceList__AttributeOne">
            {{ attributeOne }}
          </p>

          <div v-if="attributeTwo || $slots.attributeTwo" class="Polaris-ResourceList__AttributeTwo">
            <slot name="attributeTwo">{{ attributeTwo }}</slot>
          </div>

          <div v-if="badges" class="Polaris-ResourceList__Badge">
            <polaris-badge v-for="(badge, i) in badges"
                             :key="`badge_${i + badge.content + badge.status}`"
                             :status="badge.status">
              {{ badge.content }}
            </polaris-badge>
          </div>

          <div v-if="attributeThree || $slots.attributeThree" class="Polaris-ResourceList__AttributeThree">
            <slot name="attributeThree">{{ attributeThree }}</slot>
          </div>
        </div>

        <ul v-if="exceptions" class="Polaris-ResourceList__Exceptions">
          <li v-for="(ex, index) in exceptions" :key="index" :class="exceptionItemClass(ex)">
            <div v-if="ex.title" class="Polaris-ResourceList__Title">
              {{ ex.title }}
            </div>
            <div v-if="ex.description" class="Polaris-ResourceList__Description">
              {{ ex.description }}
            </div>
          </li>
        </ul>
      </div>

      <template v-if="actions">
        <template v-if="persistActions">
          <div class="Polaris-ResourceList__Actions">
            <polaris-button-group>
              <polaris-button-group-item v-for="(action, index) in actions" :key="index" plain>
                <polaris-button @click="handleAction(action)"
                                  :url="action.url"
                                  :destructive="action.destructive"
                                  :disabled="action.disabled"
                                  :icon="action.icon"
                                  :accessibility-label="action.accessibilityLabel"
                                  size="slim"
                                  plain>
                  {{ action.content }}
                </polaris-button>
              </polaris-button-group-item>
            </polaris-button-group>
          </div>
          <div class="Polaris-ResourceList__Disclosure">
            <polaris-popover @click="onCloseActions"
                               :active="actionsMenuVisible">
              <polaris-button slot="activator"
                                aria-label="Actions dropdown"
                                @click="onExpandActions"
                                plain
                                icon="horizontalDots"/>
              <polaris-action-list :items="actions"/>
            </polaris-popover>
          </div>
        </template>
        <div v-if="!persistActions"
             class="Polaris-ResourceList__Actions">
          <polaris-button-group segmented>
            <polaris-button v-for="action in actions"
                              :key="action"
                              @click="handleAction(action)"
                              :primary="action.primary"
                              :url="action.url"
                              :destructive="action.destructive"
                              :disabled="action.disabled"
                              :icon="action.icon"
                              size="slim"
                              :accessibility-label="action.accessibilityLabel">
              {{ action.content }}
            </polaris-button>
          </polaris-button-group>
        </div>
      </template>
    </div>
  </div>
</template>


<script src="./ResourceListItem.js"></script>
