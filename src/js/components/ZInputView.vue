<template>
    <div style="flex: 1">
        <list>
            <cell style="padding-top: 15px;">
                <div class="input-cell">
                    <z-input v-model="value" :type="type" :placeholder="placeholder" @return="clickOkBtn" 
                    :return-key-type="returnKeyType" :value="value" :input-style="inputStyle" 
                    :close-icon="$imageUrlTransform('textfile_delete@3x.png', true)"
                    :input-icon="leftImage" :input-icon-style="{'margin-right': '18px'}"></z-input>
                </div>
            </cell>
            <cell class="row-center-center">
                <z-button :title="$t('ok')" @click="clickOkBtn" class="bottom-button"></z-button>
            </cell>
        </list>
    </div>
</template>

<script>
import ZButton from 'Components/ZButton.vue'
import ZInput from 'Components/ZInput.vue'

export default {
    components: {
        ZButton,
        ZInput
    }, 
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
            type: String,
            default: ''
        },
        returnKeyType: {
            type: String,
            default: 'done'
        },
        leftImage: {
            type: String,
        }
    },
    data() {
        return {
            inputStyle: {
                'font-size': '36px',
                height: '80px',
                color: 'black',
                'text-align': 'left',
            }
        }
    },
    methods: {
        clickOkBtn() {
            const value = this.value.toString()
            if (value == '') {
                this.$notice.toast({message: this.$t('common.plaseInputValue')})
                return
            }
            this.$emit('finish', value.trim())
        }
    }
}
</script>

<style scoped>
.input-text {
  flex: 1;
  font-size: 36px;
  height: 80px;
  color: black;
  text-align: left;
}
.input-cell {
  padding-top: 5px;
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  background-color: white;
}
.button {
    width: 100px;
}
</style>
<style lang="sass" src="Css/base.scss"></style>