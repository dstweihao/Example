<template>
  <div>
    <z-buttons :texts="list" :activeIndex="activeIndex" v-on:clickButton="getIndex"></z-buttons>
  </div>
</template>
<script>
import ZButtons from 'Components/ZButtons.vue'
export default {
  components: {
    ZButtons
  },
  created() {},
  data() {
    return {
      activeIndex: -1,
      list: [
        'Python',
        'C++',
        'C',
        'Java',
        'C#',
        'PHP',
        'R',
        'JavaScript',
        'Go',
        'Assembly'
      ]
    }
  },
  methods: {
    getIndex(clickButton) {
      this.activeIndex = clickButton
      this.$notice.toast({
        message: this.list[clickButton]
      })
    }
  }
}
</script>
<style scoped>
</style>