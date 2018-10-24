<template>
    <div class='root' v-if='showNum==1||showNum==3||showNum==11'>
        <formtool :item='stuEventName3' @keyValue='getKeyValue' v-if='showNum==3'></formtool>
        <formtool :item='stuEventName1' @keyValue='getKeyValue' v-if='showNum==1'></formtool>
        <formtool :item='stuEventName11' @keyValue='getKeyValue' v-if='showNum==11'></formtool>
        <formtool :item='button' @cancel='canceled' @submitSecond='submitSecond' class='buttonposition' ></formtool>
    </div>
</template>

<script>
    import formtool from '../formtool.vue'
    export default {
        name: 'alertTwoPart',
        props: ['showNum'],
        getKeyValues: {},
        components: {
            formtool,
        },
        methods: {
            getKeyValue: function(key, value) {
                this.getKeyValues[key] = value.value;
            },
            canceled() {
                this.$emit('canceled')
            },
            submitSecond() {
                this.$emit('floorFourClickSubmit', this.getKeyValues)
            }
        },
        data() {
            return {
                stuEventName: '3',
                // 入学事件渲染
                stuEventName1: {
                    type: "01",
                    name: "说明",
                    inputPlaceholder: '请记录入班时重点事件，如学费缴纳情况等',
                    inputType: 'textarea',
                    englishname: "stuEvent1Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                },
                // 旁听事件 渲染
                stuEventName3: {
                    type: "01",
                    name: "说明",
                    inputPlaceholder: '旁听事件的详细说明',
                    inputType: 'textarea',
                    englishname: "stuEvent3Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                    // 毕业资格无效
                },
                stuEventName11: {
                    type: "01",
                    name: "说明",
                    inputPlaceholder: '毕业资格无效具体情况说明',
                    inputType: 'textarea',
                    englishname: "stuEvent11Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                },
                button: {
                    type: "06",
                    name: "添加",
                    style: {
                        labelWidth: "110px",
                        labelPosition: "left",
                        width: "",
                        buttontype: "primary",
                        buttonTwo: true,
                        buttonTwoMargenLeft: "30px"
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .root {
        margin-left: 10px;
        height: 250px;
        width: 450px;
    }
    .buttonposition{
        position: absolute;
         top:260px;
    }
</style>