<template>
  <div role="grid" class="Polaris-DatePicker__Month">
    <div :class="titleClasses">{{ realMonthName }} {{ year }}</div>
    <div role="rowheader" class="Polaris-DatePicker__WeekHeadings">
      <polaris-date-picker-weekday
        v-for="(dayName, dayIndex) in weekdays"
        :key="dayIndex"
        :title="abbreviateWeekday(dayName)"
        :current="current && new Date().getDay() === dayIndex"
        :label="dayName"
      />
    </div>
    <div
        v-for="(week, index) in weeks"
        :key="index"
        role="row"
        class="Polaris-DatePicker__Week"
      >
        <template v-for="(day, dayIndex) in week">
          <polaris-date-picker-day
            v-if="!day"
            :key="dayIndex"
            @hover="handleHoverEmptyDay"
          />
          <polaris-date-picker-day
            v-if="day"
            :focused="focusedDate && isSameDay(focusedDate, day)"
            :day="day"
            :selected="selected && dateIsSelected(day)"
            :in-range="selected && dateIsInRange(day)"
            :disabled="dateIsDisabled(day)"
            :in-hovering-range="selected && hoverDate && isInHoveringRange(day)"
            @click="handleDayClick(day)"
            @focus="handleFocus(day)"
            @hover="handleHover(day)"
          />
        </template>
      </div>
  </div>
</template>

<script src="./DatePickerMonth.js"></script>
