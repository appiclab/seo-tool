export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    activeTab: ''
  }),
  computed: {
    tabNames () {
      return Object.keys(this.$slots);
    }
  },
  watch: {
    tabNames () {
      this.loadActiveTab();
    },
    activeTab () {
      this.$emit('change', this.activeTab);
    },
    value () {
      this.activeTab = this.value;
    }
  },
  created () {
    if(this.value && this.tabNames.indexOf(this.value) > -1) {
      this.activeTab = this.value;
    } else {
      this.loadActiveTab();
    }
  },
  methods: {
    loadActiveTab () {
      if (!this.activeTab && this.tabNames.length > 0) {
        this.activeTab = this.tabNames[0];
      }
    }
  },
};
