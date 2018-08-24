<template>
  <div>
    <div class="selecCell">
      <text class="text">{{text}}</text>
    </div>
    <list>
      <cell>
        <div class="wrapper">
          <text class="text">样式一</text>
        </div>
        <h-radio :list="listData" v-on:value="getValue"></h-radio>
        <div class="wrapper">
          <text class="text">样式二</text>
        </div>
        <h-radio :list="listData" showType="button" v-on:value="getValue"></h-radio>
        <div class="wrapper">
          <text class="text">样式三</text>
        </div>
        <h-radio :list="listData" showType="shadow" v-on:value="getValue"></h-radio>
      </cell>
    </list>
  </div>
</template>
<script>
import HRadio from 'Components/HRadio.vue'
export default {
  components: {
    HRadio
  },
  data() {
    return {
      text: '选中的内容',
      listData: [
        { title: 'Python' },
        { title: 'C++' },
        { title: 'C' },
        { title: 'Java' },
        { title: 'C#' },
        { title: 'PHP' },
        { title: 'R' },
        { title: 'JavaScript' },
        { title: 'Go' },
        { title: 'Assembly' }
      ]
    }
  },
  methods: {
    getValue(value) {
      this.text = value
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 750px;
  height: 80px;
  justify-content: center;
  background-color: #40b0ff;
}
.selecCell {
  width: 750px;
  height: 80px;
  justify-content: center;
  background-color: red;
}
.text {
  color: #ffffff;
  margin-left: 28px;
}
</style>