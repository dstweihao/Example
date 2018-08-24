<template>
  <div ref="cell" :style="{transform: `translateX(${x})`, width: 750+btnWidth}" class="flex-row-center">
    <div @horizontalpan="onPan" @click="onCellClick">
      <slot name="content"></slot>
    </div>
    <div v-if="delay" class="buttons">
      <div v-for="(item, index) in btnItems" :key="index" class="flex-row-center-center" @click="onClick(index)" 
      :style="{width: item.style.width, height: height, 'background-color': item.style['background-color']}">
        <text :style="{color: item.style.color}">{{ item.text }}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnWidth: {
      default: 0
    },
    btnItems: {
      default: []
    },
    id: {
      default: 0
    },
    sliderItem: {
      default: -1
    },
  },
  data () {
    return {
      x: 0,
      x0: 0, // pan start screenX,
      enable: true,
      bgcolor: 'white',
      height: 100,
      delay: false,
    }
  },
  watch: {
    x () {
      if (this.x === 0) {
        this.$emit('slider', false, -2)
        this.start = true
        this.sliderItem = -2
      }
    },
    sliderItem (val) {
      if (val === -1) {
        this.reset()
      } else if (val === -2) {
        this.enable = true
      } else if (val === -3) {
        this.show()
      } else if (val === -4) {
        this.hide()
      } else if (this.id === val) {
        this.enable = true
      } else {
        this.enable = false
      }
    },
  },
  methods: {
    onPan (e) {
      this.delay || weex.requireModule('dom').getComponentRect(this.$refs.cell, option => {
        this.height = option.size.height
        this.delay = true
      })
      if (!this.enable) {
        // this.$emit('click')
        return
      }
      if (e.state === 'start') {
        this.bgcolor = this.btnBgColor
        this.$emit('slider', true, this.id)
        this.x0 = e.changedTouches[0].screenX
      } else if (e.state === 'move') {
        var x1 = e.changedTouches[0].screenX
        if (x1 < this.x0) { // 左滑
          if (this.x === -this.btnWidth) return
          this.x = x1 - this.x0
          if (this.x < -this.btnWidth) this.x = -this.btnWidth
        } else if (x1 > this.x0) { // 右滑
          if (this.x === 0) return
          this.x = -this.btnWidth - this.x0 + x1
          if (this.x > 0) this.x = 0
        }
        // console.log(`x0:${this.x0},x:${this.x}`)
      } else if (e.state === 'end') {
        this.$emit('slider', true, this.id)
        if (this.x0 > e.changedTouches[0].screenX) {
          this.show()
        } else {
          if (this.x === 0) {
            this.$emit('slider', false, -2)
          } else {
            this.reset()
          }
        }
      }
    },
    reset () {
      if (this.x !== 0) {
        setTimeout(() => {
          weex.requireModule('animation').transition(this.$refs.cell, {
            styles: {
              transform: 'translateX(0)'
            },
            duration: -200 / (this.btnWidth) * this.x, // ms
            timingFunction: 'linear',
            delay: 0 // ms
          }, () => {
            this.x = 0
            this.$emit('slider', false, -2)
          })
        }, 20)
      } else {
        this.$emit('slider', false, -2)
      }
    },
    hide() {
      weex.requireModule('animation').transition(this.$refs.cell, {
        styles: {
          transform: 'translateX(0)'
        },
        duration: 0, // ms
        timingFunction: 'linear',
        delay: 0 // ms
      })
    },
    show () {
      this.delay || weex.requireModule('dom').getComponentRect(this.$refs.cell, option => {
        this.height = option.size.height
        this.delay = true
      })
      setTimeout(() => {
        weex.requireModule('animation').transition(this.$refs.cell, {
          styles: {
            transform: `translateX(${-this.btnWidth})`
          },
          duration: 200 / this.btnWidth * (this.btnWidth + this.x), // ms
          timingFunction: 'linear',
          delay: 0 // ms
        }, () => {
        this.$emit('slider', false, this.id)
        this.x = -this.btnWidth
       })
      }, 20)
    },
    onClick (index) {
      this.$emit('btnClick', index)
    },
    onCellClick () {
      this.$emit('clickCell', this.id)
      this.reset()
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped>
.flex-row-center-center {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.flex-row-center {
  flex-direction: row;
  align-items: center;
}
.buttons {
  flex-direction: row;
  align-items: center;
  background-color: white;
}
.solid-border-bottom {
  border-bottom-style: solid;
  border-bottom-color: #bebebe;
   
}
</style>
