<template>
    <div class="Enter">
        <span>入库-扫描钢卷码</span>
        <div class="item" v-for="(value, index) in data" :key="index">
            <span>钢卷号</span>
            <span>{{value}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Enter",
        props: {
        },
        data: function () {
            return {
                data: [
                    '2323232', '32323323','2323232', '32323323','2323232', '32323323','2323232', '32323323'
                ]
            }
        }
    };
</script>

<style scoped>
</style>
