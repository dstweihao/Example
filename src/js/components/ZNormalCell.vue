<template>
  <z-cell @click="$emit('clickCell')" class="cell" style="height: 88px;">
    <template v-if="item.type == 'switch'">
      <div slot="title" class="title">
        <image v-if="item.leftImage" class="left-image" resize="contain" :src="item.leftImage" />
        <text>{{item.title}}</text> 
      </div>
      <am-switch v-if="isLoad" style="margin-right: 20px;" slot="value" @change="onchange" :value="checked"></am-switch>
    </template>
    <template v-else-if="item.type == 'value'">
      <div slot="title" class="title">
        <image v-if="item.leftImage" class="left-image" resize="contain" :src="item.leftImage" />
        <text>{{item.title}}</text> 
      </div>
      <div class="value" slot="value">
        <text v-if="item.value" class="value-text overflow-text gray-color" :style="{width: (600 - item.title.length * 32) + 'px'}">{{item.value}}</text> 
        <image v-if="item.rightImage" style="width: 40px; height: 40px;" resize="contain" :src="item.rightImage" />
      </div>
    </template>
    <template v-else-if="item.type == 'button'">
      <text slot="center">{{item.title}}</text>
    </template>
    <template v-else-if="item.type == 'subtitle'">
      <div slot="title" class="subtitle">
        <image v-if="item.leftImage" class="subtitle-image" resize="contain" :src="item.leftImage" />
        <div class="subtitle-content">
          <text class="overflow-text" style="font-size: 32px; margin-bottom: 18px;">{{item.title}}</text>
          <text class="overflow-text gray-color" style="font-size: 28px;">{{item.subtitle}}</text>
        </div>
      </div>
    </template>
  </z-cell>
</template>

<script>
import ZCell from "Components/ZCell.vue";
import { AmSwitch } from 'weex-amui'

export default {
  components: {
    ZCell,
    AmSwitch,
  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      isLoad: false
    }
  },
  computed: {
    checked() {
      if (weex.config.env.platform == 'iOS') {
        return this.item.checked ? 'true' : 'false'
      }
      return this.item.checked
    }
  },
  mounted() {
    // 等待其他组件渲染完后再渲染switch组件，否则内部如果checked = false 马上变化为 true, switch显示异常。
    setTimeout(() => {
      this.isLoad = true
    }, 1);
  },
  methods: {
    onchange(e) {
      this.$emit('onchange', {value: e})
    }
  }
}
</script>

<style scoped>
.cell:active {
  background-color: rgb(240, 240, 240);
}
.title {
  margin-left: 32px; 
  flex-direction: row; 
  align-items: center;
}
.value {
  margin-right: 20px; 
  flex-direction: row; 
  align-items: center;
}
.left-image {
  width: 48px; 
  height: 48px; 
  margin-right: 18px;
}
.gray-color {
  color: #8e8e93;
}
.overflow-text {
  lines: 1;
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
}
.value-text {
  text-align: right;
}
.subtitle {
  flex-direction: row;
  align-items: center;
}
.subtitle-image {
  width: 48px; 
  height: 48px; 
  margin-left: 26px;
}
.subtitle-content {
  flex-direction: column; 
  justify-content: center; 
  margin-left: 32px;
}
</style>