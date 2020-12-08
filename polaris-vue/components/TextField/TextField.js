import ComponentHelpers from '../ComponentHelpers.js';
import DynamicTag from '../DynamicTag.js';

import PolarisTextFieldResizer from '../TextFieldResizer/TextFieldResizer.vue';
import PolarisTextFieldSpinner from '../TextFieldSpinner/TextFieldSpinner.vue';
import PolarisConnected from '../Connected';

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {
    DynamicTag,
    PolarisTextFieldResizer,
    PolarisTextFieldSpinner,
    PolarisConnected,
  },
  props: {
    prefix: String,
    suffix: String,
    prefixIcon: String,
    placeholder: String,
    value: [String, Number],
    helpText: String,
    label: String,
    labelAction: Object,
    labelHidden: Boolean,
    disabled: Boolean,
    readOnly: Boolean,
    autoFocus: Boolean,
    multiline: [Boolean, Number],
    error: [Boolean, String],
    connectedRight: String,
    connectedLeft: String,
    type: String,
    name: String,
    id: String,
    step: String,
    autoComplete: Boolean,
    max: Number,
    maxLength: Number,
    min: Number,
    minLength: Number,
    pattern: String,
    spellCheck: Boolean,
    focused: Boolean,
  },
  data() {
    return {
      height: null,
      focus: false,
    };
  },
  watch: {
    focused() {
      if (this.focused && !this.focus) {
        this.$refs.input.focus();
      } else if (!this.focused && this.focus) {
        this.$refs.input.blur();
      }
    }
  },
  computed: {
    realId() {
      return this.id || 'PolarisTextField'+this._uid;
    },
    describedBy() {
      const r = [];

      if (this.error && typeof this.error === 'string') {
        r.push(this.realId+'Error');
      }
      if (this.helpText) {
        r.push(this.realId+'HelpText');
      }

      return r.join(' ');
    },
    labelledBy() {
      const r = [];

      if (this.prefix) {
        r.push(this.realId+'Prefix');
      }
      if (this.suffix) {
        r.push(this.realId+'Suffix');
      }
      
      return r.join(' ');
    },
    classes() {
      var r = ComponentHelpers.makeComponentClass('Polaris-TextField', [
        'disabled',
        'readOnly',
        'multiline',
        'focus',
      ], this);
      
      if (this.error) {
        r['Polaris-TextField--error'] = true;
      }
      
      if (this.value) {
          r['Polaris-TextField--hasValue'] = true;
      }
      
      return r;
    }
  },
  methods: {
    onFocus(e) {
      this.focus = true;
      this.$emit('focus', e.target);
    },
    onBlur(e) {
      this.focus = false;
      this.$emit('blur', e.target);
    },
    onClick() {
      this.$refs.input.focus();
    },
    handleExpandingResize(e) {
      this.height = e;
    },
    handleChange(e) {
      this.$emit('change', (e.target || e.srcElement).value);
    },
    handleInputFocus() {
      this.$refs.input.focus();
    },
    handleNumberChange(steps) {
      const numericValue = this.value ? parseFloat(this.value) : 0;

      if (isNaN(numericValue)) { 
        return; 
      }
      
      const min = this.min || -Infinity;
      const max = this.max || +Infinity;
      const step = this.step || 1;
      const newValue = Math.min(max, Math.max(min, numericValue + (steps * step)));

      this.$emit('change', newValue);
    }
  }
};
