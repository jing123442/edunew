<template>
    <div class='root' v-if='showNum==2||showNum==6||showNum==7||showNum==8||showNum==9||showNum==10'>
        <formtool v-for='(content,index) in stuEventName2' :item='content' :key='"stuEventName2"+index' @keyValue='getKeyValue' v-if='showNum==2'></formtool>
        <formtool v-for='(content,index) in stuEventName6' :item='content' :key='"stuEventName6"+index' @keyValue='getKeyValue' v-if='showNum==6'></formtool>
        <formtool v-for='(content,index) in stuEventName7' :item='content' :key='"stuEventName7"+index' @keyValue='getKeyValue' v-if='showNum==7'></formtool>
        <formtool v-for='(content,index) in stuEventName8' :item='content' :key='"stuEventName8"+index' @keyValue='getKeyValue' v-if='showNum==8'></formtool>
        <formtool v-for='(content,index) in stuEventName9' :item='content' :key='"stuEventName9"+index' @keyValue='getKeyValue' v-if='showNum==9'></formtool>
        <formtool v-for='(content,index) in stuEventName10' :item='content' :key='"stuEventName10"+index' @keyValue='getKeyValue' v-if='showNum==10'></formtool>
        <formtool :item='button' @cancel='canceled'  @submitSecond='submitSecond' class='buttonposition'></formtool>
    </div>
</template>

<script>
    import formtool from '../formtool.vue'
    export default {
        name: 'alertThreePart',
        components: {
            formtool,
        },
        props:['showNum'],
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
                //外部传入2，6，7，8，9，10 时分别渲染相应模块
               
                getKeyValues: {},
                // 扣除纪律分渲染
                stuEventName2: [{
                    type: "02",
                    englishname: "stuEvent2Score",
                    name: "说明",
                    arr: ["-1", "-2", "-5", "-10"],
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    }
                }, {
                    type: "01",
                    name: "",
                    inputPlaceholder: '请填写扣除纪律分原因',
                    inputType: 'textarea',
                    englishname: "stuEvent2Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                }, ],
                //   留级数据渲染
                stuEventName6: [{
                    type: "02",
                    englishname: "stuEvent6ClassId",
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
                    name: "留级原因：",
                    inputPlaceholder: '请填写留级的详细原因原因',
                    inputType: 'textarea',
                    englishname: "stuEvent6Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                }, ],
                //   就业方式渲染
                stuEventName7: [{
                    type: "02",
                    englishname: "stuEvent7Way",
                    name: "就业方式：",
                    arr: ["保障就业", "推荐就业", "自主就业"],
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    }
                }, {
                    type: "01",
                    name: "备注：",
                    inputPlaceholder: '请填写所选择就业方式的原因',
                    inputType: 'textarea',
                    englishname: "stuEvent7Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                }, ],
                //结业 渲染
                stuEventName8: [{
                    type: "02",
                    englishname: "stuEvent8Reason",
                    name: "结业原因：",
                    arr: ["纪律分低于要求", "留级次数超出上限"],
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    }
                }, {
                    type: "01",
                    name: "备注：",
                    inputPlaceholder: '请填写结业的详细原因',
                    inputType: 'textarea',
                    englishname: "stuEvent8Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                }, ],
                //   重读 的渲染
                stuEventName9: [{
                    type: "02",
                    englishname: "stuEvent9ClassId",
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
                    name: "重读原因：",
                    inputPlaceholder: '请填写重读的详细原因',
                    inputType: 'textarea',
                    englishname: "stuEvent9Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                }, ],
                //   退学的渲染
                stuEventName10: [{
                    type: "02",
                    englishname: "stuEvent10Reason",
                    name: "退学原因：",
                    arr: ["纪律分低于要求"],
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    }
                }, {
                    type: "01",
                    name: "详细说明：",
                    inputPlaceholder: '请填写退学的详细原因',
                    inputType: 'textarea',
                    englishname: "stuEvent10Intro",
                    style: {
                        labelWidth: "100px",
                        labelPosition: "right",
                        width: "7"
                    },
                }, ],
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