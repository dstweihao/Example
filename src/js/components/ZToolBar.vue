<template>
  <div class="tool">
    <div v-for="(item, index) in items" :key="index" @click="$emit('clickItem', index)">
      <image :src="item.image" :style="imageStyle" class="image" resize="contain" />
      <text class="text" :style="textStyle">{{item.title}}</text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    },
    textStyle: {
      type: Object
    },
    imageStyle: {
      type: Object
    }
  }
}
</script>

<style scoped>
.tool {
  flex-direction: row;
  justify-content: space-around;
  height: 88px;
  width: 750px;
  background-color: white;
  border-top-color: gray;
}
.item {
  flex-direction: column;
  align-items: center;
}
.image {
  width: 42px; 
  height: 42px; 
  margin-bottom: 9px;
  margin-top: 9px;
}
.text {
  color: #40b0ff;
  font-size: 20px;
  text-align: center;
}
</style>
