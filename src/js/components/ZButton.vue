<template>
    <text class="text" v-on="this.$listeners">{{title}}</text>
</template>

<script>
export default {
    props: {
        title: {
            default: ''
        }
    }
}
</script>

<style scoped>
.text {
    text-align: center;
    opacity: 1;
}

.text:active {
    opacity: 0.8;
}
</style>
