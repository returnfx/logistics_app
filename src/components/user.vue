<template>
    <div class="hello">
        <span>基本信息</span>
        <div class="item" v-for="(item, index) in data" :key="index">
            <span>{{item.title}}</span>
            <nut-textinput
                    v-model="item.value"
                    placeholder="输入内容"
                    :clearBtn="true"
                    :disabled="false"
            />、        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
        },
        data: function () {
            return {
                data: [
                    {
                        title: '公司名称',
                        value: ''
                    },
                    {
                        title: '车牌号',
                        value: ''
                    },
                    {
                        title: '司机姓名',
                        value: ''
                    },
                    {
                        title: '手机号码',
                        value: ''
                    },
                    {
                        title: '备注信息',
                        value: ''
                    }
                ]
            }
        }
    };
</script>

<style scoped>
</style>
