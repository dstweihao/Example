<template>
  <div class="wrapper">
    <image v-if="inputIcon" :src="inputIcon" class="input-image" :style="inputIconStyle" resize="contain" />
    <input ref="input" class="input" :type="type" :value="value" :placeholder="placeholder" :disabled="disabled" :autofocus="autofocus"
    :max-length="maxLength" :maxlength="maxlength" :return-key-type="returnKeyType" :singleline="singleline"
    :lines="lines" :max="max" :min="min" :style="inputStyle" @input="oninput" @change="onchange" @focus="onfocus"
    @blur="onblur" @return="onreturn" />
    <image v-if="showClose && closeIcon" class="close-image" :src="closeIcon" :closeIconStyle="closeIconStyle" resize="contain" @click="onclickCloseIcon" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    autofocus: {
      type: Boolean
    },
    maxlength: {
      type: Number
    },
    returnKeyType: {
      type: String
    },
    singleline: {
      type: Boolean,
      default: true
    },
    maxLength: {
      type: Number
    },
    lines: {
      type: Number
    },
    max: {

    },
    min: {

    },
    inputStyle: {
      type: Object
    },
    inputIcon: {
      type: String,
    },
    inputIconStyle: {
      type: Object
    },
    closeIcon: {
      type: String
    },
    closeIconStyle: {
      type: Object
    }
  },
  data() {
    return {
      showClose: false,
    }
  },
  methods: {
    oninput(e) {
      this.$emit('input', e.value)
      this.showClose = e.value.length > 0
    },
    onchange(e) {
      this.$emit('change', e.value)
    },
    onfocus(e) {
      this.$emit('focus', e)
      this.showClose = this.value.length > 0
    },
    onblur(e) {
      this.$emit('blur', e)
      this.showClose = false
    },
    onreturn(e) {
      this.$emit('return', e)
      this.showClose = false
    },
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
    },
    setSelectionRange(selectionStart,selectionEnd) {
      this.$refs.input.setSelectionRange(selectionStart,selectionEnd)
    },
    getSelectionRange(callback) {
      this.$refs.input.getSelectionRange(callback)
    },
    setTextFormatter(params) {
      this.$refs.input.setTextFormatter(params)
    },
    setTextFormatter(params) {
      this.$refs.input.setTextFormatter(params)
    },
    onclickCloseIcon() {
      this.value = ''
      this.$emit('input', '')
      this.showClose = false
    }
  }
}
</script>

<style scoped>
.wrapper {
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.input-image {
  margin-right: 20px; 
  width: 48px; 
  height: 48px;
}
.input {
  flex: 1;
}
.close-image {
  width: 40px; 
  height: 40px;
}
</style>
