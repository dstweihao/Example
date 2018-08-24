<template>
  <div>
    <list>
      <cell v-for="(mc, index) in mineCells" :key="index">
        <h-cell showTextImage="true" showIcon="true" :title="mc.leftText" :content="mc.rightText" @hcellClicked="hcellClicked(index)"></h-cell>
      </cell>
    </list>
  </div>
</template>
<script>
import HCell from 'Components/HCell.vue'
export default {
  components: {
    HCell
  },
  created() {},
  data() {
    return {
      mineCells: [
        {
          leftText: 'ZButton',
          rightText: '按钮'
        },
        {
          leftText: 'ZButtons',
          rightText: '按钮组'
        },
        {
          leftText: 'ZCell',
          rightText: '列表Cell'
        },
        {
          leftText: 'ZInput',
          rightText: '输入框'
        },
        {
          leftText: 'ZInputView',
          rightText: '输入界面'
        },
        {
          leftText: 'ZNormalCell',
          rightText: '基于ZCell的常用列表Cell'
        },
        {
          leftText: 'ZSliderCell',
          rightText: 'iOS样式的滑动Cell'
        },
        {
          leftText: 'ZToolBar',
          rightText: 'iOS样式的Tabbar工具栏'
        },
        {
          leftText: 'HCell',
          rightText: '多样式单元格cell'
        },
        {
          leftText: 'HRadio',
          rightText: '单选'
        },
        {
          leftText: 'HSliderCell',
          rightText: '具有滑动菜单的Cell'
        }
      ]
    }
  },
  methods: {
    hcellClicked(index) {
      switch (this.mineCells[index].leftText) {
        case 'ZButton':
          this.$router.open({
            name: 'zbutton'
          })
          break
        case 'ZButtons':
          this.$router.open({
            name: 'zbuttons'
          })
          break
        case 'ZCell':
          this.$router.open({
            name: 'zcell'
          })
          break
        case 'ZInput':
          this.$router.open({
            name: 'zinput'
          })
          break
        case 'ZInputView':
          this.$router.open({
            name: 'zinputview'
          })
          break
        case 'ZNormalCell':
          this.$router.open({
            name: 'znormalcell'
          })
          break
        case 'ZSliderCell':
          this.$router.open({
            name: 'zslidercell'
          })
          break
        case 'ZToolBar':
          this.$router.open({
            name: 'ztoolbar'
          })
          break

        case 'HCell':
          this.$router.open({
            name: 'hcell'
          })
          break
        case 'HRadio':
          this.$router.open({
            name: 'hradio'
          })
          break
        case 'HSliderCell':
          this.$router.open({
            name: 'hslidercell'
          })
          break
      }
    }
  }
}
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