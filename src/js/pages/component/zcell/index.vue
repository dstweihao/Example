<template>
  <div>
    <z-cell title="样式一" :cellStyle="cellStyle" value="只显示文本" :valueStyle="valueStyle"></z-cell>

  </div>
</template>
<script>
import ZCell from 'Components/ZCell.vue'
export default {
  components: {
    ZCell
  },
  created() {},
  data() {
    return {
      cellStyle: {
        height: '88px'
      },
      valueStyle: {
        color: '#8e8e93'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>