<template>
  <div class="wrapper">
    <z-input :inputStyle="inputStyle" value="xasas"></z-input>
  </div>
</template>
<script>
import ZInput from 'Components/ZInput.vue'
export default {
  components: {
    ZInput
  },
  created() {},
  data() {
    return {
      inputStyle: {
        width: '750px',
        height: '100px'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.wrapper {
  width: 750px;
  height: 100px;
}
</style>