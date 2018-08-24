
<template>
  <div class="hcell" v-bind:style="{'border-bottom-color':((showLine==='true')?'#c7c7cc':'#ffffff')}" @click="cellClicked">
    <slot name="tilte">
      <div class="row-center">
        <text class="margin-left-32">{{title}}</text>
        <text class="titleIcon" v-if="titleIcon">{{titleIcon}}</text>
      </div>
    </slot>
    <div class="row-center margin-right-32">
      <!-- 显示文本/图片+箭头 -->
      <div v-if="showTextImage==='true'?true:false" class="row-center">
        <slot name="content">
          <div v-if="content">
            <text class="gray-color">{{content}}</text>
          </div>
        </slot>
        <slot name="image">
          <div v-if="image">
            <image class="avatar" resize="cover" :src="image" />
          </div>
        </slot>
        <!-- <image class="icon" src="bmlocal://assets/cellright@3x.png"/> -->
      </div>
      <!-- 显示滑动菜单 -->
      <div v-if="showSwitch==='true'?true:false">
        <am-switch :value="checked" @change="onChange"></am-switch>
      </div>
       <image v-if="showIcon==='true'?true:false" class="icon" src="bmlocal://assets/cellright@3x.png"/>
    </div>
  </div>

</template>
<script>
import { AmSwitch } from "weex-amui";
export default {
  components: { AmSwitch },
  props: {
    title: {
      type: String,
      default: ""
    },
    titleIcon: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    showTextImage: {
      type: String,
      default: ""
    },
    showSwitch: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: ""
    },
    showText: {
      type: String,
      default: ""
    },
    showLine: {
      type: String,
      default: "true"
    },
    showIcon: {
      type: String,
      default: "false"
    }
  },
  created() {
    // //如果想要手动设置switch的checked状态。
    // this.checkedSwitch = this.onSetSwithChecked(checkedSwitch)
  },
  data() {
    return {
      // checkedSwitch: false,
      // switchType: ''
    };
  },
  methods: {
    onChange(event) {
      // event 的值是true或false
      // this.checkedSwitch = this.onSetSwithChecked(event)
      this.$emit("hcellSwitchChange", event);
    },
    cellClicked(event) {
      this.$emit("hcellClicked", { event });
    }
    // 设置滑动开关的显示状态,因为IOS端只能通过字符串true和false的方式判断。
    // onSetSwithChecked(checked) {
    //   if (weex.config.env.platform == 'iOS') {
    //     return checked ? 'true' : 'false'
    //   } else {
    //     return checked
    //   }
    // }
  }
};
</script>
<style scoped>
.hcell {
  width: 750px;
  height: 88px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom-width: 1px;
}
.hcell:active {
  background-color: rgb(240, 240, 240);
}
.row-center {
  flex-direction: row;
  align-items: center;
}
.margin-left-32 {
  margin-left: 32px;
}
.margin-right-32 {
  margin-right: 30px;
}
.font-size-32 {
  font-size: 32px;
}
.gray-color {
  color: #8e8e93;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 125px;
}
.titleIcon {
  color: #ffffff;
  background-color: red;
  border-radius: 50;
  width: 60;
  font-size: 25px;
  padding-top: 3px;
  padding-bottom: 5px;
  text-align: center;
  margin-left: 20;
}
.icon {
  width: 35px;
  height: 35px;
}
</style>

