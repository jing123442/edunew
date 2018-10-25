<template>
    <div class='root'>
        <!-- 内容宽度容器 -->
        <div class='container'>
            <formtool :item='school' @cancel='canceled' @submitSecond='submitSecond' @keyValue='getKeyValue'></formtool>
            <formtool :item='profession' @cancel='canceled' @submitSecond='submitSecond' @keyValue='getKeyValue'></formtool>
            <formtool v-for='(content,index) in alertRender ' :key='index' :item='content' @cancel='canceled' @submitSecond='submitSecond' @keyValue='getKeyValue'></formtool>
        </div>
    </div>
</template>

<script>
    import formtool from './formtool'
    export default {
        name: 'alertform',
        // props: {item:{default:{style:'30px'}}},
        components: {
            formtool,
        },
        props: ['school', 'profession'],
        // beforeMount() {
        //     var that = this;
        //     this.$axios
        //         .get("/yzh/research/inter/getAllClass", {
        //             userid: "",
        //             accesstoken: ""
        //         })
        //         .then(function(res) {
        //             var data = res.data;
        //             var classes = data.classList;
        //             var newarr = {
        //                 type: "02",
        //                 englishname: "className",
        //                 name: "选择班级：",
        //                 arr: classes.map(function(item) {
        //                     return item.className
        //                 }),
        //                 style: {
        //                     labelWidth: "110px",
        //                     labelPosition: "right",
        //                     width: "7",
        //                     inLine: ""
        //                 },
        //                 rules: {
        //                     rule: [{
        //                         required: true,
        //                     message: "请选择",
        //                     trigger: "change"
        //                     }]
        //                 }
        //             };
        //             that.alertRender.splice(0, 1, newarr);
        //         }).catch(function(res) {});
        // },
        data() {
            return {
                getKeyValues: {},
                alertRender: [{
                    type: "02",
                    englishname: "className",
                    name: "选择班级：",
                    arr: ["前端1", "前端2"],
                    style: {
                        labelWidth: "110px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    },
                    rules: {
                        rule: [{
                           
                        }]
                    }
                }, { //底部按钮
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
                }],
            }
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
                console.log('submitSecond++++++++++++++++++++', this.getKeyValues)
            }
        },
    }
</script>

<style scoped>
    .root {
        padding-top: 30px;
        width: 330px;
        border: 1px solid black;
        height: 245px;
    }
    .container {
        width: 292px;
    }
</style>