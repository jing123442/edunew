<template>
    <div class='root' v-if='showNum==4||showNum==5'>
        <formtool v-for='(content,index) in stuEventName4' :item='content' :key='"stuEventName4"+index' @keyValue='getKeyValue' v-if='showNum==4'></formtool>
        <formtool v-for='(content,index) in stuEventName5' :item='content' :key='"stuEventName5"+index' @keyValue='getKeyValue' v-if='showNum==5'></formtool>
        <formtool :item='button' @cancel='canceled' @submitSecond='submitSecond' class='buttonposition'></formtool>
    </div>
</template>

<script>
    import formtool from '../formtool.vue'
    export default {
        name: 'alertFourPart',
        props: ['showNum'],
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
                this.$emit('submitThird', this.getKeyValues)
            }
        },
        data() {
            return {
                getKeyValues: {},
                // 休学事件渲染
                stuEventName4: [{
                    type: "5",
                    name: "休学时间：",
                    englishname: "stuEvent4StartDate",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: 24
                    }
                }, {
                    type: "5",
                    name: "至：",
                    englishname: "stuEvent4EndDate",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: 24
                    }
                }, {
                    type: "01",
                    name: "说明",
                    inputPlaceholder: '请填写休学原因',
                    inputType: 'textarea',
                    englishname: "stuEvent4Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "15"
                    },
                }],
                // 复学事件 渲染
                stuEventName5: [{
                    type: "5",
                    name: "复学时间",
                    englishname: "stuEvent4StartDate",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: 24
                    }
                }, {
                    type: "02",
                    englishname: "stuEvent5ClassId",
                    name: "选择班级：",
                    arr: [""],
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    }
                }, {
                    type: "01",
                    name: "复学原因：",
                    inputPlaceholder: '请填写复学原因',
                    inputType: 'textarea',
                    englishname: "stuEvent5Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    }
                }],
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
        }
    }
</script>

<style scoped>
    .root {
        margin-left: 10px;
        height: 250px;
        width: 450px;
    }
    .buttonposition {
        position: absolute;
        top: 260px;
    }
</style>