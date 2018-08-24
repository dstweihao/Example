<template>
    <div>
        <!-- <div class="toolbar">
    <text class="text">目录</text>
  </div> -->
        <list>
            <cell v-for="(mc, index) in mineCells" :key="index">
                <h-cell showTextImage="true" showIcon="true" :title="mc.leftText" :content="mc.rightText" @hcellClicked="hcellClicked(index)"></h-cell>
            </cell>
        </list>
    </div>
</template>
<script>
import HCell from 'Components/HCell.vue'
var wxModuleTools = weex.requireModule('WXModuleTools')
export default {
  components: {
    HCell
  },
  created() {},
  data() {
    return {
      mineCells: [
        {
          leftText: 'Android 6.0 动态权限',
          rightText: 'weex页面进行检查和请求'
        },
        {
          leftText: '检查更新',
          rightText: '目前只有Android端，IOS暂无'
        }
        // {
        //   leftText: "ZCell",
        //   rightText: "列表Cell"
        // },
        // {
        //   leftText: "ZInput",
        //   rightText: "输入框"
        // },
        // {
        //   leftText: "ZInputView",
        //   rightText: "输入界面"
        // },
        // {
        //   leftText: "ZNormalCell",
        //   rightText: "基于ZCell的常用列表Cell"
        // },
        // {
        //   leftText: "ZliderCell",
        //   rightText: "iOS样式的滑动Cell"
        // },
        // {
        //   leftText: "ZToolBar",
        //   rightText: "iOS样式的Tabbar工具栏"
        // },
        // {
        //   leftText: "HCell",
        //   rightText: "多样式单元格cell"
        // },
        // {
        //   leftText: "HRadio",
        //   rightText: "单选"
        // }
      ]
    }
  },
  methods: {
    hcellClicked(index) {
      switch (this.mineCells[index].leftText) {
        case 'Android 6.0 动态权限':
          if (weex.config.env.platform === 'android') {
            wxModuleTools.checkPermission(
              'android.permission.CALL_PHONE',
              result => {
                if (result.hasPermission) {
                  // 检查权限已成功获取
                  this.$notice.toast({
                    message: '检查,已经获取权限！'
                  })
                } else {
                  wxModuleTools.requestPermission(
                    'android.permission.CALL_PHONE',
                    result => {
                      if (!result.errorMsg) {
                        // 申请权限成功
                        this.$notice.toast({
                          message: '申请权限成功！'
                        })
                      } else {
                        callback()
                      }
                    }
                  )
                }
              }
            )
          } else if (weex.config.env.platform === 'iOS') {
          }
          break
        case '检查更新':
          if (weex.config.env.platform === 'android') {
            wxModuleTools.checkPermission(
              'android.permission.WRITE_EXTERNAL_STORAGE',
              result => {
                if (result.hasPermission) {
                  // 检查权限已成功获取
                  wxModuleTools.uptateApp(
                    'http://www.lofter.com/rsc/android/lofter.apk'
                  )
                } else {
                  wxModuleTools.requestPermission(
                    'android.permission.WRITE_EXTERNAL_STORAGE',
                    result => {
                      if (!result.errorMsg) {
                        // 申请权限成功
                        wxModuleTools.uptateApp(
                          'http://www.lofter.com/rsc/android/lofter.apk'
                        )
                      } else {
                        callback()
                      }
                    }
                  )
                }
              }
            )
          } else if (weex.config.env.platform === 'iOS') {
          }

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