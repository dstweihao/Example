<template>
<div>
		<h-cell title="样式一" @hcellClicked="clicked1"></h-cell>
    <h-cell title="样式二" @hcellClicked="clicked2" showIcon="true" ></h-cell>
    <h-cell title="样式三" @hcellClicked="clicked3" showTextImage="true"  content="只显示文本" ></h-cell>
    <h-cell title="样式四" @hcellClicked="clicked4" showTextImage="true" showIcon="true"  content="显示文本+箭头" ></h-cell>
    <h-cell title="样式五" @hcellClicked="clicked5" showTextImage="true" showIcon="true" showLine="false"  content="不显示分割线" ></h-cell>
    <h-cell title="样式六" @hcellClicked="clicked6" showTextImage="true"  :image="imageUrl"  ></h-cell>
    <h-cell title="样式七" @hcellClicked="clicked7" showTextImage="true" showIcon="true"  :image="imageUrl"  ></h-cell>
    <h-cell title="样式八" @hcellSwitchChange="clicked8" showSwitch="true"  :checked='true' ></h-cell>
</div>
</template>
<script>
import HCell from "Components/HCell.vue";
export default {
  components: {
    HCell
  },
  created() {},
  data() {
    return {
      imageUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534415755808&di=324c41aabbd0882c7f2f4ff781953e72&imgtype=0&src=http%3A%2F%2Fi.shangc.net%2F2017%2F0120%2F20170120012800820.jpg"
    };
  },
  methods: {
    toast(string) {
      this.$notice.toast({
        message: string
      });
    },
    clicked1() {
      this.toast("只显示标题");
    },
    clicked2() {
      this.toast("只显示箭头");
    },
    clicked3() {
      this.toast("只显示文本");
    },
    clicked4() {
      this.toast("显示文本+箭头");
    },
    clicked5() {
      this.toast("不显示分割线");
    },
    clicked6() {
      this.toast("显示图片");
    },
    clicked7() {
      this.toast("显示图片+箭头");
    },
    clicked8(event) {
      this.toast("显示滑动菜单 === " + event);
    }
  }
};
</script>
<style scoped>
.toolbar {
  width: 750px;
  height: 150px;
  align-items: center;
  justify-content: center;
  background-color: #40b0ff;
}
.text {
  margin-top: 40px;
  color: #ffffff;
}
</style>