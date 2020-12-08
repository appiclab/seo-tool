import PolarisDatePickerWeekday from '../DatePickerWeekday/DatePickerWeekday.vue';
import PolarisDatePickerDay from '../DatePickerDay/DatePickerDay.vue';
import dateUtils from '../../data/date-utils.js';

export default {
  components: {
    PolarisDatePickerWeekday,
    PolarisDatePickerDay
  },
  data () {
    return {
      weekdays: dateUtils.weekdays.slice()
    };
  },
  props: {
    focusedDate: Date,
    selected: [Date, Object],
    hoverDate: Date,
    month: Number,
    year: Number,
    disableDatesBefore: Date,
    disableDatesAfter: Date,
    allowRange: Boolean,
    monthName: String,
    weekdayName: String
  },
  computed: {
    titleClasses () {
      return {
        'Polaris-DatePicker__Title': 1,
        'Polaris-DatePicker__Month--current': this.current
      };
    },
    current () {
      return new Date().getMonth() === this.month;
    },
    weeks () {
      const firstOfMonth = new Date(this.year, this.month, 1);
      const firstDayOfWeek = firstOfMonth.getDay();
      const weeks = [[]];

      let currentWeek = weeks[0];
      let currentDate = firstOfMonth;

      for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push(null);
      }

      while (currentDate.getMonth() === this.month) {
        if (currentWeek.length === 7) {
          currentWeek = [];
          weeks.push(currentWeek);
        }

        currentWeek.push(currentDate);
        currentDate = new Date(this.year, this.month, currentDate.getDate() + 1);
      }

      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }

      return weeks;
    },
    realMonthName () {
      return dateUtils.months[this.month];
    }
  },
  methods: {
    handleHoverEmptyDay () {
      const lastDayOfMonth = new Date(this.year, this.month + 1, 0);
      this.$emit('hover', lastDayOfMonth);
    },
    handleHover (day) {
      this.$emit('hover', day);
    },
    handleFocus (day) {
      this.$emit('focus', day);
    },
    handleDayClick (day) {
      let newValue = null;

      if (!this.selected) {
        newValue = {
          start: day,
          end: day
        };
      } else {
        const start = this.selected.start;
        const end = this.selected.end;

        if (end && start !== end) {
          newValue = {
            start: day,
            end: day
          };
        } else if (start) {
          if (day < start) {
            newValue = {
              start: day,
              end: day
            };
          } else {
            newValue = {
              start: start,
              end: day
            };
          }
        } else if (end) {
          if (day < end) {
            newValue = {
              start: day,
              end: end
            };
          } else {
            newValue = {
              start: day,
              end: day
            };
          }
        } else {
          newValue = {
            start: day,
            end: day
          };
        }
      }
      this.$emit('change', newValue);
    },

    dateIsDisabled (day) {
      return this.disableDatesBefore && (day < this.disableDatesBefore)
        || (this.disableDatesAfter && (day > this.disableDatesAfter));
    },
    dateIsSelected (day) {
      if (!day) {
        return false;
      }

      if (this.selected instanceof Date) {
        return this.isSameDay(day, this.selected);
      }

      const start = this.selected.start;
      const end = this.selected.end;

      return Boolean((start && this.isSameDay(start, day))
        || (end && this.isSameDay(end, day)));
    },
    dateIsInRange (day) {
      if (!day) {
        return false;
      }

      const start = this.selected.start;
      const end = this.selected.end;

      return Boolean((start && day > start) && (end && day < end));
    },
    isSameDay (day1, day2) {
      return (
        (day1.getDate() === day2.getDate()) &&
        (day1.getMonth() === day2.getMonth()) &&
        (day1.getFullYear() === day2.getFullYear())
      );
    },
    abbreviateWeekday (day) {
      return day.substring(0, 2);
    },
    isInHoveringRange (day) {
      if (!this.allowRange) {
        return false;
      }

      if (!day) {
        return false;
      }

      return Boolean((this.selected.start === this.selected.end)
        && (day > this.selected.start)
        && (day <= this.hoverDate));
    }
  }
};
