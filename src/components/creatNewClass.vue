<template>
    <div>
        <div class='root'>
            <div class='head'><span>创建班级</span></div>
            <div class='floor floor1'>
                <div class='floortitle'>基本信息</div>
                <div class='container'>
                    <!-- 控制第一层输入框/选择框等宽度的容器 -->
                    <div class='widthCon'>
                        <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
                        <formtool v-for='(content,index) in floor1render' :item='content' :key='"floor1"+index' @keyValue='getKeyValue'></formtool>
                    </div>
                </div>
            </div>
            <div class='floor floor2 '>
                <div class='floortitle'>班级信息</div>
                <div class='container'>
                    <div class='widthCon'>
                        <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
                        <formtool v-for='(content,index) in floor2render' :item='content' :key='"floor2"+index' @keyValue='getKeyValue'></formtool>
                    </div>
                </div>
            </div>
            <div class='floor floor3'>
                <div class='floortitle'>教学信息</div>
                <div class='container'>
                    <div class='widthCon'>
                        <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
                        <formtool v-for='(content,index) in floor3render' :item='content' :key='"floor3"+index' @keyValue='getKeyValue'></formtool>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        isSelected,
        isNormalText
    } from "./mjjTools/reg.js";
    import formtool from './mjjTools/formtool'
    export default {
        components: {
            formtool,
        },
        name: 'creatNewClass',
        props: ['item'],
        methods: {
            getKeyValue: function(key, value) {
                this.getKeyValues[key] = value.value;
                console.log('creatNewClass', this.getKeyValues)
            },
        },
        beforeMount() {
            //获取所有学校
            var that = this;
            this.$axios
                .get("/yzh/research/inter/getAllSchool", {
                    userid: "",
                    accesstoken: ""
                })
                .then(function(res) {
                    var data = res.data;
                    var schools = data.schoolList;
                    var newarr = {
                        type: "02",
                        englishname: "schoolName",
                        name: "所属学校：",
                        arr: schools.map(function(item) {
                            return item.schoolName;
                        }),
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: "7",
                            inLine: ""
                        },
                        rules: {
                            rule: [{
                                required: true,
                                message: "请选择所属学校",
                                trigger: "change"
                            }]
                        }
                    };
                    that.floor1render.splice(0, 1, newarr);
                }).catch(function(res) {});
            //获取所有专业
            this.$axios
                .get("/yzh/research/inter/getAllProfession", {
                    userid: "",
                    accesstoken: ""
                })
                .then(function(res) {
                    var data = res.data;
                    var professions = data.professionList;
                    var newarr = {
                        type: "02",
                        englishname: "professionName",
                        name: "所属专业：",
                        arr: professions.map(function(item) {
                            return item.professionName
                        }),
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: "7"
                        },
                        rules: {
                            rule: [{
                                required: true,
                                message: "请选择所属专业",
                                trigger: "blur"
                            }]
                        }
                    };
                    that.floor1render.splice(1, 1, newarr);
                }).catch(function(res) {});
            //获取所有架构师
            this.$axios
                .get("/yzh/research/inter/getAllSchool", {
                    userid: "",
                    accesstoken: "",
                    roleName: 'teacherJGRole'
                })
                .then(function(res) {
                    var data = res.data;
                    var teacherOne = data.teacherList;
                    var newarr = {
                        type: "02",
                        englishname: "teacherOne",
                        name: "架构师：",
                        arr: teacherOne.map(function(item) {
                            return item.pxTeacherName;
                        }),
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: "7",
                            inLine: ""
                        },
                        rules: {
                            rule: [{
                                required: true,
                                message: "请选择架构师",
                                trigger: "blur"
                            }]
                        }
                    };
                    that.floor3render.splice(1, 1, newarr);
                }).catch(function(res) {});
            //获取所有项目经理
            this.$axios
                .get("/yzh/research/inter/getAllSchool", {
                    userid: "",
                    accesstoken: "",
                    roleName: 'teacherXMRole'
                })
                .then(function(res) {
                    var data = res.data;
                    var teacherTwo = data.teacherList;
                    var newarr = {
                        type: "02",
                        englishname: "teacherTwo",
                        name: "项目经理：",
                        arr: teacherOne.map(function(item) {
                            return item.pxTeacherName;
                        }),
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: "7",
                            inLine: ""
                        },
                        rules: {
                            rule: [{
                                required: false,
                                message: "",
                                trigger: ""
                            }]
                        }
                    };
                    that.floor3render.splice(0, 1, newarr);
                }).catch(function(res) {});
        },
        data() {
            return {
                getKeyValues: {},
                // 基本信息数据渲染
                floor1render: [{ // 所属学校数据渲染
                    type: "02",
                    englishname: "schoolName",
                    name: "所属学校：",
                    arr: ["青岛", "西安"],
                    style: {
                        labelWidth: "110px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    },
                    rules: {
                        rule: [{
                            required: true,
                            message: '请选择所属学校',
                            trigger: "change"
                        }]
                    }
                }, { //所属专业数据渲染
                    type: "02",
                    englishname: "professionName",
                    name: "所属专业：",
                    arr: ["前端", "大数据"],
                    style: {
                        labelWidth: "110px",
                        labelPosition: "right",
                        width: "7"
                    },
                    rules: {
                        rule: [{
                            required: true,
                            message: '请选择所属专业',
                            trigger: "change"
                        }]
                    }
                }],
                floor2render: [ // 第二层数据渲染
                    { // 班级名称
                        type: "01",
                        name: "班级名称:",
                        englishname: "className",
                        inputPlaceholder: '中英文、数字，20个字符以内',
                        style: {
                            labelWidth: "100px",
                            labelPosition: "right",
                            width: "7"
                        },
                        rules: {
                            rule: [{
                                required: true,
                                validator: isNormalText,
                                trigger: "blur"
                            }]
                        }
                    }, { // 班级编码
                        type: "01",
                        name: "班级编码:",
                        englishname: "classCode",
                        inputPlaceholder: '系统生成班级编码，用户不可修改',
                        style: {
                            labelWidth: "100px",
                            labelPosition: "right",
                            width: "7"
                        },
                        rules: {
                            rule: [{
                                required: true,
                            }]
                        }
                    }, { // 开课时间
                        type: "5",
                        name: "开课时间：",
                        englishname: "",
                        style: {
                            labelWidth: "100px",
                            labelPosition: "right",
                            width: 24
                        }
                    }, { // 结课时间
                        type: "5",
                        name: "结课时间：",
                        englishname: "",
                        style: {
                            labelWidth: "100px",
                            labelPosition: "right",
                            width: 24
                        }
                    }
                ],
                floor3render: [ //第三层数据渲染
                    { //架构师渲染
                        type: "02",
                        englishname: "teacherOne",
                        name: "架构师：",
                        arr: ["胡文飞", "牛立新"],
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: "7"
                        },
                        rules: {
                            rule: [{
                                required: true,
                                message: '请选择架构师',
                                trigger: "change"
                            }]
                        }
                    }, { //项目经理渲染
                        type: "02",
                        englishname: "teacherTwo",
                        name: "项目经理：",
                        arr: ["胡文飞", "牛立新"],
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: "7"
                        },
                        rules: {
                            rule: [{
                                required: false,
                                message: '请选择架构师',
                                trigger: "change"
                            }]
                        }
                    }, { //项目经理渲染
                        type: "02",
                        englishname: "teacherTwo",
                        name: "选择教案：",
                        arr: ["前端实训", "大数据实训"],
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: ""
                        },
                        rules: {
                            rule: [{
                                required: true,
                                message: '请选择教案',
                                trigger: "change"
                            }]
                        }
                    }, { //项目经理渲染
                        type: "02",
                        englishname: "teacherTwo",
                        name: "选择评测：",
                        arr: ["前端实训", "大数据实训"],
                        style: {
                            labelWidth: "110px",
                            labelPosition: "right",
                            width: ""
                        },
                        rules: {
                            rule: [{
                                required: true,
                                message: '请选择评测',
                                trigger: "change"
                            }]
                        }
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    .head {
        font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
        font-weight: 700;
        width: 1000px;
        text-align: center;
        font-size: 20px;
        height: 100px;
    }
    .head span {
        display: block;
        padding-top: 50px;
    }
    .floor {
        margin-left: 50px;
        margin-bottom: 15px;
    }
    .floortitle {
        width: 110px;
        height: 36px;
        background: #9ac3e3;
        color: #fff;
        line-height: 36px;
        text-align: center;
    }
    .container {
        width: 1000px;
        border: 1px solid rgba(230, 240, 249, 1);
        padding-top: 30px;
        background-color: rgba(255, 255, 255, 1);
    }
    .clear:after {
        content: ".";
        clear: both;
        display: block;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
    .widthCon {
        width: 350px;
    }
</style>