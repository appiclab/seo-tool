import HSBColor from "./data/HSBColor.js";

import PolarisColorPickerAlphaPicker from "./components/ColorPickerAlphaPicker/ColorPickerAlphaPicker.vue";
import PolarisColorPickerHuePicker from "./components/ColorPickerHuePicker/ColorPickerHuePicker.vue";
import PolarisColorPickerSlidable from "./components/ColorPickerSlidable/ColorPickerSlidable.vue";

export default {
  model: {
    prop: "color",
    event: "change"
  },
  components: {
    PolarisColorPickerAlphaPicker,
    PolarisColorPickerHuePicker,
    PolarisColorPickerSlidable
  },
  props: {
    color: {
      type: Object,
      default () {
        return new HSBColor(0, 1, 1, 1);
      }
    },
    allowAlpha: Boolean
  },
  data () {
    return {
      pickerSize: 0
    };
  },
  mounted () {
    this.pickerSize = this.$refs.palette.clientWidth;
  },
  computed: {
    draggerX () {
      return Math.max(0, Math.min(this.pickerSize, this.color.saturation * this.pickerSize));
    },
    draggerY () {
      return Math.max(0, Math.min(this.pickerSize, this.pickerSize - (this.color.brightness * this.pickerSize)));
    },
    colorLayerStyle () {
      var hsbColor = new HSBColor(this.color.hue, 1, 1, this.color.alpha);
      var rgbColor = hsbColor.toRGB();
      return {
        background: rgbColor.toCssString()
      };
    }
  },
  methods: {
    handleHueChange (e) {
      var newColor = new HSBColor(
        e,
        this.color.saturation,
        this.color.brightness,
        this.color.alpha);

      this.$emit("change", newColor);
    },
    handleAlphaChange (e) {
      var newColor = new HSBColor(
        this.color.hue,
        this.color.saturation,
        this.color.brightness,
        e);

      this.$emit("change", newColor);
    },
    handleDraggerMove (e) {
      const saturation = Math.max(0, Math.min(1, e.x / this.pickerSize));
      const brightness = Math.max(0, Math.min(1, 1 - e.y / this.pickerSize));

      var newColor = new HSBColor(
        this.color.hue,
        saturation,
        brightness,
        this.color.alpha);

      this.$emit("change", newColor);
    }
  }
};
