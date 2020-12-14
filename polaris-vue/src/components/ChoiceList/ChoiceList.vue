<template>
  <fieldset :class="classes">
    <legend v-if="title" class="Polaris-ChoiceList__Title">
      {{ title }}
    </legend>
    <ul class="Polaris-ChoiceList__Choices">
      <li v-for="choice in choices" :key="choice.label">
        <template v-if="allowMultiple">
          <polaris-checkbox
            :name="finalName"
            :value="choice.value"
            :label="choice.label"
            :helpText="choice.helpText"
            :disabled="disabled"
            :checked="choiceIsSelected(choice)"
            @change="handleChange($event, choice)"
          />
        </template>

        <template v-if="!allowMultiple">
          <polaris-radio-button
            :name="finalName"
            :value="choice.value"
            :label="choice.label"
            :helpText="choice.helpText"
            :disabled="disabled"
            :checked="choiceIsSelected(choice)"
            @change="handleChange($event, choice)"
          />
        </template>
      </li>
    </ul>
  </fieldset>
</template>

<script src="./ChoiceList.js"></script>
<style lang="scss" src="./ChoiceList.scss"></style>
