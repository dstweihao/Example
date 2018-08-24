<template>
    <div>
        <div>
            <div class="slidercell" ref="menuItem" v-for="(item,index) in list" @swipe="slideMenu($event,index)" :key="index" @click="chooseItem(index)">
                <div class="cell">
                    <text class="margin">{{item.title}}</text>
                    <text class="margin">{{item.sex}}</text>
                    <text class="margin">{{item.phone}}</text>
                    <text class="margin">{{item.location}}</text>
                </div>
                <div class="row-center-center">
                    <div class="edit">
                        <text class="text">{{item.control}}</text>
                    </div>
                    <div class="delete">
                        <text class="text">{{item.delete}}</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const animation = weex.requireModule('animation')
export default {
  data() {
    return {
      open: false,
      list: [
        {
          title: '收货人',
          sex: 'xxx',
          phone: 'xxxxxxx',
          location: '某某省某某市某某区',
          control: '编辑',
          delete: '删除'
        },
        {
          title: '收货人',
          sex: 'xxx',
          phone: 'xxxxxxx',
          location: '某某省某某市某某区',
          control: '编辑',
          delete: '删除'
        },
        {
          title: '收货人',
          sex: 'xxx',
          phone: 'xxxxxxx',
          location: '某某省某某市某某区',
          control: '编辑',
          delete: '删除'
        },
        {
          title: '收货人',
          sex: 'xxx',
          phone: 'xxxxxxx',
          location: '某某省某某市某某区',
          control: '编辑',
          delete: '删除'
        }
      ]
    }
  },
  methods: {
    chooseItem(index) {
      this.$notice.toast({
        message: '点击的是' + index
      })
      if (this.open === true) {
        this.rightSlide()
      }
    },

    slideMenu(e, index) {
      let listItems = this.$refs.menuItem
      let ele = this.$refs.menuItem[index]
      let direction = e.direction
      if (direction == 'left') {
        this.leftSlide(ele)
      } else if (direction == 'right') {
        this.rightSlide(ele)
      }
    },
    leftSlide(ele) {
      this.rightSlide()
      animation.transition(ele, {
        styles: {
          transform: 'translateX(-300px)'
        },
        duration: 150,
        timingFunction: 'linear',
        needLayout: false,
        delay: 0
      })
      this.open = true
    },
    rightSlide() {
      let listItems = this.$refs.menuItem
      for (let i = 0; i < listItems.length; i++) {
        animation.transition(listItems[i], {
          styles: {
            transform: 'translateX(0px)'
          },
          duration: 150,
          timingFunction: 'linear',
          needLayout: false,
          delay: 0
        })
      }
      return false
    }
  }
}
</script>


<style scoped>
.slidercell {
  width: 1050px;
  height: 180px;
  border-bottom-width: 1px;
  border-bottom-color: #336a04;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.cell{
    width: 750px;
}
.row-center-center {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.edit {
  width: 150px;
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: #00a040;
}
.delete {
  width: 150px;
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: red;
}
.text {
  color: #ffffff;
}
.margin {
  margin-left: 55px;
}
</style>
