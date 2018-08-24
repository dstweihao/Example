<template>
  <div>

    <div v-if="showShadow" v-for="(item,index) in list" :key="index" v-bind:style="{'background-color':((index === currentIndex)?'#dddddd':'#ffffff')}" @click="onRadio(index)">
      <div class="cell row-center line">
        <text class="title">{{item.title}}</text>
      </div>
    </div>
    <div v-if="showImage" v-for="(item,index) in list" :key="index" @click="onRadio(index)">
      <div class="cell bg row-sb-center line">
        <text class="title">{{item.title}}</text>
        <image v-if="index === currentIndex" class="img" src="bmlocal://assets/radio@3x.png" />
      </div>
    </div>
    <div v-if="showButton" class="cell bg row-center pl22 line">
      <div @click="onRadio(index)" class="radioButton row-center-center" v-for="(item,index) in list" :key="index" v-bind:style="{'background-color':((index === currentIndex)?'#40b0ff':'#ffffff'),'border-color':(( index === currentIndex)?'#40b0ff':'#8e8e93')}">
        <text class="radioText" v-bind:style="{'color':((index === currentIndex)?'#ffffff':'#000000')}">{{item.title}}</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    showType: {
      type: String,
      default: 'image'
    }
  },
  created() {
    switch (this.showType) {
      case 'shadow':
        this.showShadow = true
        break
      case 'image':
        this.showImage = true
        break
      case 'button':
        this.showButton = true
        break
    }
  },
  data() {
    return {
      showShadow: false,
      showImage: false,
      showButton: false,
      currentIndex: 0
    }
  },
  methods: {
    onRadio(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
      } else {
        this.currentIndex = index
      }
      this.$set(this.list, index, this.list[index])
      // 选中了
      if (index === this.currentIndex) {
        this.$emit('value', this.list[index].title)
        // 未选中
      } else {
      }
    }
  }
}
</script>
<style scoped>
.title {
  margin-left: 32px;
}
.cell {
  width: 750px;
  height: 88px;
}
.row-center {
  flex-direction: row;
  align-items: center;
}
.row-center-center {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.row-sb-center {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.line {
  border-bottom-width: 1px;
  border-bottom-color: #c7c7cc;
}
.bg {
  background-color: #ffffff;
}
.img {
  margin-right: 25px;
  width: 45px;
  height: 45px;
}
.pl22 {
  padding-left: 22px;
}
.radioButton {
  width: 100px;
  height: 60px;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 10px;
}
.radioText {
  font-size: 25px;
}
</style>