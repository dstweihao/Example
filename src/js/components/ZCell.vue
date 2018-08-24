<template>
    <div class="cell" :style="cellStyle" v-on="this.$listeners">
        <slot name="title">
            <text class="title" :style="titleStyle">{{title}}</text>
        </slot>
        <slot name="center"></slot>
        <slot name="value">
            <text class="value" :style="valueStyle">{{value}}</text>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        cellStyle: {
            type: Object,
        },
        title: {
            default: ''
        },
        titleStyle: {
            type: Object,
        },
        value: {
            default: ''
        },
        valueStyle: {
            type: Object
        },
    }
}
</script>

<style scoped>
.cell {
    width: 750px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.title {
    margin-left: 32px;
}
.value {
    margin-right: 32px;
}
</style>
