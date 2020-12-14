<template>
  <div class="Polaris-DatePicker" @keydown="handleKeyDown" @keyup="handleKeyUp">
    <div class="Polaris-DatePicker__Header">
      <polaris-button
        plain
        :icon="arrowLeft"
        :accessibility-label="prevMonthChangeLabel"
        @click="handlePrevMonthClick"
      >
      </polaris-button>
      <polaris-button
        plain
        :icon="arrowRight"
        :accessibility-label="nextMonthChangeLabel"
        @click="handleNextMonthClick"
      >
      </polaris-button>
    </div>
    <div class="Polaris-DatePicker__MonthContainer">
      <polaris-date-picker-month
        @focus="handleFocus"
        :focused-date="focusDate"
        :month="month"
        :year="year"
        :selected="selected"
        :hover-date="hoverDate"
        @change="handleDateSelection"
        @hover="handleHover"
        :disable-dates-before="disableDatesBefore"
        :disable-dates-after="disableDatesAfter"
        :allow-range="allowRange"
      >
      </polaris-date-picker-month>
      <polaris-date-picker-month
        v-if="multiMonth"
        @focus="handleFocus"
        :focused-date="focusDate"
        :month="nextMonth"
        :year="nextMonthYear"
        :selected="selected"
        :hover-date="hoverDate"
        @change="handleDateSelection"
        @hover="handleHover"
        :disable-dates-before="disableDatesBefore"
        :disable-dates-after="disableDatesAfter"
        :allow-range="allowRange"
      >
      </polaris-date-picker-month>
    </div>
  </div>
</template>


<script src="./DatePicker.js"></script>
<style lang="scss" src="./DatePicker.scss"></style>
