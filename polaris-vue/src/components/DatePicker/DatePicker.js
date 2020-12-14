import PolarisDatePickerMonth from './components/DatePickerMonth/DatePickerMonth.vue';
import dateUtils from './data/date-utils.js';

import arrowLeft from '../../resources/icons/arrow-left.svg';
import arrowRight from '../../resources/icons/arrow-right.svg';

export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  components: {
    PolarisDatePickerMonth
  },
  props: {
    selected: [Date, Object],
    month: {
      type: Number,
      default () {
        return (new Date()).getMonth();
      }
    },
    year: {
      type: Number,
      default () {
        return (new Date()).getFullYear();
      }
    },
    disableDatesBefore: Date,
    disableDatesAfter: Date,
    multiMonth: Boolean
  },
  data () {
    return {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight,

      hoverDate: null,
      focusDate: null
    };
  },
  computed: {
    allowRange () {
      return this.selected && !(this.selected instanceof Date);
    },
    prevMonthChangeLabel () {
      const prevMonthName = dateUtils.months[this.prevMonth];

      return 'Show previous month, ' + prevMonthName + ' ' + this.prevMonthYear;
    },
    nextMonthChangeLabel () {
      const nextMonthName = dateUtils.months[this.nextMonth];

      return 'Show next month, ' + nextMonthName + ' ' + this.nextMonthYear;
    },
    prevMonth () {
      let month = this.month;

      if (month === 0) {
        month = 11;
      } else {
        month--;
      }

      return month;
    },
    prevMonthYear () {
      const month = this.month;
      let year = this.year;

      if (month === 0) {
        year--;
      }

      return year;
    },
    nextMonth () {
      let month = this.month;

      if (month === 11) {
        month = 0;
      } else {
        month++;
      }

      return month;
    },
    nextMonthYear () {
      const month = this.month;
      let year = this.year;

      if (month === 11) {
        year++;
      }

      return year;
    }
  },
  methods: {
    handleDateSelection (e) {
      this.hoverDate = e.end;
      this.focusDate = new Date(e.end);

      if (this.allowRange) {
        this.$emit('change', e);
      } else {
        this.$emit('change', e.end);
      }
    },
    handleKeyDown (e) {

    },
    handleKeyUp (e) {

    },
    handlePrevMonthClick () {
      this.focusDate = null;
      this.$emit('monthchange', {
        month: this.prevMonth,
        year: this.prevMonthYear
      });
    },
    handleNextMonthClick () {
      this.focusDate = null;
      this.$emit('monthchange', {
        month: this.nextMonth,
        year: this.nextMonthYear
      });

    },
    handleFocus () {

    },
    handleHover () {

    }
  }
};
