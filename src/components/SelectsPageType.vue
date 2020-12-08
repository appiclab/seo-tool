<template>
  <div>

  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    addMask: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  watch: {
    type() {
      this.$emit('page-change', this.type)
    }
  },

  methods: {
   
};
</script>