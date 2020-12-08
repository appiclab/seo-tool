import ComponentHelpers from "../ComponentHelpers.js";

export default {
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    title: String,
    titleHidden: Boolean,
    choices: {
      type: Array,
      default () {
        return [];
      }
    },
    selected: {
      type: Array,
      default () {
        return [];
      }
    },
    name: String,
    allowMultiple: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  computed: {
    finalName () {
      return this.allowMultiple ? this.name + "[]" : this.name;
    },
    classes () {
      return ComponentHelpers.makeComponentClass("Polaris-ChoiceList", ["titleHidden"], this);
    }
  },
  methods: {
    choiceIsSelected (choice) {
      if (!this.selected) {
        return false;
      }
      return this.selected.indexOf(choice.value) >= 0;
    },
    handleChange (e, choice) {
      var newSelected = [];


      if (e) {
        if (this.allowMultiple) {
          newSelected = (this.selected || []).slice();
          newSelected.push(choice.value);
        } else {
          newSelected = [choice.value];
        }
      } else {
        newSelected = (this.selected || []).slice().filter((item) => {
          return item !== choice.value;
        });
      }

      this.$emit("change", newSelected);
    }
  }
};
