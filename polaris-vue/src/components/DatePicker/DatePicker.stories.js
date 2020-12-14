
import DatePicker from "./DatePicker.vue";

const currentDate = new Date();
const theMidnight = new Date(currentDate.toDateString());
const initialDate =  new Date(+theMidnight);
const initialDateRange = {
  // Timestamp of 30 days in past
  start: new Date(Math.round(+theMidnight / 1000 - 3600 * 24 * 30) * 1000),
  end: new Date(+theMidnight)
};

export default {
  title: "Polaris/DatePicker",
  component: DatePicker,
  argTypes: {},
};

export const defaultView = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    "polaris-date-picker": DatePicker,
  },
  watch: {
    multiMonth() {
      console.log(this.multiMonth);
    }
  },
  template: `
    <polaris-date-picker
      v-model="datePicker"
      :multi-month="multiMonth"
      :month="month"
      :year="year"
      @monthchange="monthChange"
    />
  `
});

defaultView.args = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  datePicker: initialDate,
  monthChange: () => {
    console.log("monthChange");
  }
};