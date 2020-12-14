import SvgSource from '../SvgSource.js';
import {
  add,
  adjust,
  alert,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowUpDown,
  calendar,
  cancel,
  cancelSmall,
  caretDown,
  caretUp,
  checkmark,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  circleCancel,
  circleChevronDown,
  circleChevronLeft,
  circleChevronRight,
  circleChevronUp,
  circlePlus,
  conversation,
  delete as deleteIcon,
  disable,
  dispute,
  duplicate,
  edit,
  embed,
  export as exportIcon,
  external,
  help,
  horizontalDots,
  import as importIcon,
  notes,
  print,
  refresh,
  risk,
  save,
  search,
  subtract,
  view
} from '../../resources/icons';

export const BUNDLED_ICONS = {
  add,
  alert,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowUpDown,
  adjust,
  calendar,
  cancel,
  cancelSmall,
  caretDown,
  caretUp,
  checkmark,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  circleCancel,
  circleChevronDown,
  circleChevronLeft,
  circleChevronRight,
  circleChevronUp,
  circlePlus,
  conversation,
  delete: deleteIcon,
  disable,
  dispute,
  duplicate,
  edit,
  embed,
  export: exportIcon,
  external,
  help,
  horizontalDots,
  import: importIcon,
  notes,
  print,
  refresh,
  risk,
  save,
  search,
  subtract,
  view
};

export default {
  props: {
    color: { 
      type: String,
      default: ""
    },
    accessibilityLabel: { 
      type: String,
      default: ""
    },
    backdrop: { 
      type: Boolean,
      default: false
    },
    source: {
      type: String,
      default: "",
      required: true
    }
  },
  computed: {
    finalSource() {
      let svgSource = this.source;
  
      if (typeof this.source === 'string') {
        const bundled = BUNDLED_ICONS[this.source];
  
        if (bundled) {
          svgSource = bundled;
        }
      }
  
      try {
        return SvgSource.parseSVG(svgSource);
      } catch (e) {
        return null;
      }
    },
    classes() {
      const r = {
        'Polaris-Icon': true,
        'Polaris-Icon--hasBackdrop': this.backdrop
      };
  
      if (this.color) {
        const valueTag = this.color.charAt(0).toUpperCase() + this.color.slice(1);
  
        r['Polaris-Icon--color' + valueTag] = true;
      }
  
      return r;
    }
  }
};