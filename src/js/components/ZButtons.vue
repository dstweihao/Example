<template>
    <div class="buttons">
        <text :class="['text', activeIndex == index ? 'text-active' : '']" @click="clickBtn(index)" :style="textStyle" v-for="(text, index) in texts" :key="index">{{text}}</text>
    </div>
</template>

<script>
export default {
    props: {
        texts: {
            default: []
        },
        textStyle: {
            default: {}
        },
        activeIndex: {
            default: -1
        }
    },
    methods: {
        clickBtn(index) {
            this.$emit('clickButton', index)
        }
    }
}
</script>

<style scoped>
.text {
    width: 104px;
    height: 56px;
    line-height: 56px;
    font-size: 24px;
    background-color: #f3f5fa;
    border-radius: 5px;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-left: 12.4px;
    text-align: center;
    opacity: 1;
    color: black;
    border-color: #c7c7cc;
    border-style: solid;
    border-width: 1px;
}
.text-active {
    background-color: #40b0ff;  
    color: white;
    border-width: 0px;
}
.text:active {
    opacity: 0.8;
}
.buttons {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 750px;
    background-color: white;
    padding-left: 19.6px;
    padding-right: 25px;
}
</style>