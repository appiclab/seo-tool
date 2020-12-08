<template>
  <li>
    <polaris-unstyled-link v-if="url" :url="url" @click="handleAction(action)" class="Polaris-ActionList__Item">
      <template v-if="icon || image">
        <div class="Polaris-ActionList__Content">
          <div role="presentation"
               class="Polaris-ActionList__Image"
               :style="{ backgroundImage: icon ? null : 'url('+image+')'}">
            <polaris-icon v-if="icon" :source="icon"/>
          </div>
          <div class="Polaris-ActionList__Text">
            <slot>
              <slot name="content">{{ content }}</slot>
            </slot>
          </div>
        </div>
      </template>
      <template v-else>{{ content }}</template>
    </polaris-unstyled-link>

    <button v-if="!url" @click="handleAction(action)" :disabled="disabled" :class="classes">
      <template v-if="icon || image">
        <div class="Polaris-ActionList__Content">
          <div role="presentation" class="Polaris-ActionList__Image" :style="{ backgroundImage: icon ? null : `url('${image}')`}">
            <polaris-icon v-if="icon" :source="icon"/>
          </div>
          <div class="Polaris-ActionList__Text">
            <slot>
              <slot name="content">{{ content }}</slot>
            </slot>
          </div>
        </div>
      </template>
      <template v-else>
        <slot>
          <slot name="content">{{ content }}</slot>
        </slot>
      </template>
    </button>
  </li>
</template>


<script src="./ActionListItem.js"></script>
