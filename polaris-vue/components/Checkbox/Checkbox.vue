<template>
  <div>
    <label :class="labelClasses" :for="realId">
        <span class="Polaris-Choice__Control">
            <div :class="checkboxClasses">
                <input
                  type="checkbox"
                  :id="realId"
                  :name="name"
                  :value="value"
                  :class="inputClasses"
                  :aria-invald="error == true"
                  :aria-describedBy="helpTextId+' '+errorId"
                  role="checkbox"
                  :aria-checked="indeterminate ? 'mixed' : (checked ? 'true' : null)"
                  :checked="checked"
                  :disabled="disabled"
                  @change="onChange"
                  @focus="onFocus"
                  @blur="onBlur"
                >

                <div class="Polaris-Checkbox__Backdrop"/>
                <div class="Polaris-Checkbox__Icon">
                    <polaris-icon :source="checkIcon"/>
                </div>
            </div>
        </span>
      <span class="Polaris-Choice__Label">{{ label }}</span>
    </label>

    <div
      v-if="helpText || $slots.helpText || (error && (typeof error == 'string'))"
      class="Polaris-Choice__Descriptions"
    >
      <div v-if="error && (typeof error == 'string')"
           class="Polaris-Choice__Error"
           id="errorId">
        <div class="Polaris-Choice__ErrorIcon">
          <polaris-icon :source="checkboxErrorIcon"/>
        </div>
        {{ error }}
      </div>
      <div v-if="helpText || $slots.helpText" class="Polaris-Choice__HelpText" :id="helpTextId">
        <slot name="helpText">{{ helpText }}</slot>
      </div>
    </div>
  </div>
</template>

<script src="./Checkbox.js"></script>
<style lang="scss" src="./Checkbox.scss"></style>
