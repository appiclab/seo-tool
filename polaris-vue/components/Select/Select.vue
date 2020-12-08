<template>
  <polaris-labelled
    :id="realId"
    :label="label"
    :error="error"
    :action="labelAction"
    :label-hidden="hiddenLabel"
    :help-text="helpText"
  >
    <!-- Help text abow the select -->
    <template v-if="$slots.helpText" slot="helpText">
      <slot name="helpText" />
    </template>
    <!-- / Help text abow the select -->

    <!-- The input wrapper -->
    <div :class="classes">
      <select
        class="Polaris-Select__Input"
        :id="realId"
        :name="name"
        :value="value"
        :aria-invalid="!!error"
        :aria-describedby="describedBy"
        :disabled="disabled"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
      >
        <template v-for="option in options">
          <!-- Array of Strings -->
          <template v-if="typeof option === 'string'">
            <option :key="option" :value="option">{{ option }}</option>
          </template>
          <!-- / Array of Strings -->

          <!-- Array of Objects -->
          <template v-else>
            <!-- If object have property title -->
            <template v-if="option.hasOwnProperty('title')">
              <optgroup :label="option.title" :key="option.title">
                <template v-for="group in option.optgroup">
                  <option :key="group.label" :value="group.value">
                    {{ group.label }}
                  </option>
                </template>
              </optgroup>
            </template>
            <!-- / If object have property title -->

            <!-- If object dos not have property title -->
            <template v-if="!option.hasOwnProperty('title')">
              <option :key="option.label" :value="option.value">
                {{ option.label }}
              </option>
            </template>
            <!-- / If object dos not have property title -->
          </template>
          <!-- / Array of Objects -->
        </template>
      </select>

      <template>
        <div
          class="Polaris-Select__Content"
          :aria-hidden="true"
          :aria-disabled="true"
        >
          <span class="Polaris-Select__InlineLabel" v-if="inlineLabel">
            {{ label }}
          </span>
          <span
            class="Polaris-Select__SelectedOption Polaris-Select__SelectedOption--Placeholder"
            v-if="!value && !theValue && placeholder"
          >
            {{ placeholder }}
          </span>
          <span class="Polaris-Select__SelectedOption" v-else>
            {{ theValue }}
          </span>
          <span class="Polaris-Select__Icon">
            <polaris-icon :source="arrowUpDown" />
          </span>
        </div>
      </template>

      <div class="Polaris-Select__Backdrop" />
    </div>
    <!-- / The input wrapper -->
  </polaris-labelled>
</template>

<script src="./Select.js"></script>
<style lang="scss" src="./Select.scss"></style>
