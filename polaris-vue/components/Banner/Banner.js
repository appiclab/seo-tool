import ComponentHelpers from '../ComponentHelpers';
import PolarisIcon from "../Icon";
import PolarisButton from "../Button";
import PolarisButtonGroup from "../ButtonGroup";
import PolarisHeading from "../Heading";

import successIcon from '../../resources/banner/circle-check-mark.svg';
import fallbackIcon from '../../resources/banner/flag.svg';
import warningIcon from '../../resources/banner/circle-alert.svg';
import criticalIcon from '../../resources/banner/circle-barred.svg';
import infoIcon from '../../resources/banner/circle-information.svg';
import dismissIcon from '../../resources/dismiss-icon.svg';

export const STATUS = ['default', 'success', 'info', 'warning', 'critical']
export default {
  components: {
    PolarisIcon,
    PolarisButton,
    PolarisButtonGroup,
    PolarisHeading
  },
  props: {
    title: String,
    icon: String,
    status: {
      type: String,
      default: 'default',
      validator: v => STATUS.indexOf(v) !== -1
    },
    action: Object,
    secondaryAction: Object,
    children: String
  },
  data() {
    return {
      dismissIcon
    };
  },
  methods: {
    handleAction(action, handleUrl) {
      if (action.onAction) {
        action.onAction();
      }
      if (handleUrl && action.url) {
        window.location.href = action.url;
      }
    },
    onDismiss() {
      this.$emit('dismiss');
    }
  },
  computed: {
    hasOnDismissHandler() {
      return this._events['dismiss'] && this._events['dismiss'].length > 0;
    },
    realId() {
      return 'Banner' + this._uid;
    },
    finalIconSource() {
      return this.iconSource;
    },
    iconSource() {
      const icon = this.icon;

      if (!icon) {
        switch (this.status) {
          case 'success':
            return successIcon;
          case 'info':
            return infoIcon;
          case 'warning':
            return warningIcon;
          case 'critical':
            return criticalIcon;
          default:
            return fallbackIcon;
        }
      }

      return icon;
    },
    iconColor() {
      switch (this.status) {
        case 'success':
          return 'greenDark';
        case 'info':
          return 'tealDark';
        case 'warning':
          return 'yellowDark';
        case 'critical':
          return 'redDark';
        default:
          return 'inkLighter';
      }
    },
    classes() {
      const r = ComponentHelpers.makeComponentClass(
        'Polaris-Banner',
        ['status'],
        this
      );

      if (this.hasOnDismissHandler) {
        r['Polaris-Banner--hasDismiss'] = true;
      }

      return r;
    }
  }
};
