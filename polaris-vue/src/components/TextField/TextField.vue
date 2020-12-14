<template>
  <polaris-labelled 
    :label="label"
    :id="realId"
    :error="error"
    :action="labelAction"
    :label-hidden="labelHidden"
    :help-text="helpText"
  >
    <template v-if="$slots.helpText" slot="helpText">
      <slot name="helpText"/>
    </template>
    <polaris-connected>
      <template slot="left">
        <slot name="connectedLeft">{{ connectedLeft }}</slot>
      </template>
      <template slot="right">
        <slot name="connectedRight">{{ connectedRight }}</slot>
      </template>
      <div :class="classes" @focus="onFocus" @blur="onBlur" @click="onClick">
        <div v-if="prefix" class="Polaris-TextField__Prefix" :id="realId+'Prefix'">
          {{ prefix}}
        </div>
        <div v-if="prefixIcon" class="Polaris-TextField__Prefix" :id="realId+'Prefix'">
          <polaris-icon :source="prefixIcon"/>
        </div>

        <dynamic-tag 
          :tag="multiline ? 'textarea' : 'input'"
          :name="name"
          :id="realId"
          :type="type"
          :disabled="disabled"
          :readonly="readOnly"
          :autofocus="autoFocus"
          :value="value"
          :placeholder="placeholder"
          :on="{
            input: handleChange,
            focus: onFocus,
            blur: onBlur
          }"
          :style="{ height: (multiline && height) ? height+'px' : null }"
          :autocomplete="autoComplete"
          class="Polaris-TextField__Input"
          ref="input"
          :aria-describedby="describedBy"
          :aria-labelledby="labelledBy"
          :aria-invalid="Boolean(error)"
        />

        <div v-if="suffix" class="Polaris-TextField__Suffix" :id="realId+'Suffix'">
          {{ suffix }}
        </div>

        <polaris-text-field-spinner v-if="type === 'number' && !disabled" @change="handleNumberChange"/>

        <div class="Polaris-TextField__Backdrop"/>

        <polaris-text-field-resizer 
          v-if="multiline"
          :contents="value || placeholder"
          :current-height="height"
          :minimum-lines="(typeof multiline === 'number') ? multiline : 1"
          @heightchange="handleExpandingResize"
        />
      </div>
    </polaris-connected>
  </polaris-labelled>
</template>

<script src="./TextField.js"></script>
<style lang="scss" src="./TextField.scss"></style>