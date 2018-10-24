<template>
    <div style='width:100%;' class='whFormComponents clear'>
        <el-form :model="formData" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm" v-if='show'>
            <!-- 这里的prop='pass',则调用rules2.pass.validator的校验规则 -->
            <!-- input或select部分 -->
            <el-form-item label-width='75px' :label="item.label" :prop="item.code" v-for='(item,index) in initFormData' :key='index' v-if='item.type!="checkbox"&&item.type!="radio"&&item.type!="checkbox"&&item.type!="radio"&&item.type!="myTimePicker"' class='myInputSelect'>
                <el-input :type="item.type||'text'" v-model="formData[item.code]" autocomplete="off" v-if='item.option.length==0'></el-input>
                <el-select v-model="formData[item.code]" placeholder="请选择" v-else>
                    <el-option v-for="(val,key) in item.option" :key="key" :value="val">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- checkbox与radio部分 -->
            <el-form-item label-width='75px' class='myCheckboxRadio' :label="item.label" :prop="item.code" v-for='(item,index) in initFormData' :key='index+"cr"' v-if='item.type=="checkbox"||item.type=="radio"'>
                <el-checkbox v-model="formData[item.code]" :label='val' v-for='(val,key) in item.option' :key='"checkbox"+key' v-if='item.type=="checkbox"'>{{val}}</el-checkbox>
                <el-radio v-model="formData[item.code]" :label='v' v-for='(v,k) in item.option' :key='"radio"+k' v-if='item.type=="radio"'>{{v}}</el-radio>
            </el-form-item>
            <!-- 时间选择器部分 -->
            <el-form-item label-width='75px' class='myTimePicker' :class='["myTimePicker"+(index-initFormData.length+2)]' v-if='item.type=="myTimePicker"' :label="item.label" :prop="item.code" v-for='(item,index) in initFormData' :key='index+"time"'>
                <el-date-picker v-model="formData[item.code]" type="date" placeholder="请选择日期" align="right" :picker-options="pickerOptions1">
                </el-date-picker>
            </el-form-item>
            <!-- 按钮部分 -->
            <el-form-item label-width='0' class='myButton' key='myButton'>
                <el-button type="primary" @click="submitForm('ruleForm2')">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang='scss'>
    .whFormComponents {
        margin: 10px 0 20px 0;
        padding-bottom:10px;
        border-bottom: 1px solid #ccc;
        .el-form-item.myInputSelect,
        .el-form-item.myButton {
            margin-right:20px;
            margin-bottom: 10px;
            width: 250px;
            height: 35px;
            float: left;
            box-sizing: border-box;
            label {
                text-align: left;
                width: 350px;
                line-height: 35px;
                padding: 0;
            }
            .el-form-item__content {
                margin-left: 350px;
                margin-bottom: 0;
                height: 35px;
                line-height: 35px;
                .el-select,
                .el-input,
                .el-input__inner,
                .el-button,
                span {
                    height: 35px;
                    line-height: 35px;
                }
                .el-button {
                    padding: 0 20px;
                }
            }
        }
        .myCheckboxRadio {
            width: 100%;
            float: left;
            margin-bottom: 10px;
            label {
                text-align: left;
                padding: 0;
            }
        }
        .myTimePicker {
            width: 250px;
            height: 35px;
            float: left;
            box-sizing: border-box;
            margin-bottom: 10px;
            .el-form-item__label {
                text-align: left;
                width: 350px;
                line-height: 35px;
                padding: 0;
            }
            .el-form-item__content {
                margin-left: 350px;
                height: 35px;
                line-height: 35px;
                .el-date-editor {
                    height: 35px;
                    width: 100%;
                    input {
                        width: 100%;
                        line-height: 35px;
                        height: 100%;
                    }
                }
            }
        }
        .myTimePicker1 {
           margin-right:20px;
            .el-form-item__label {
                text-align: center;
                width: 350px;
                line-height:35px;
                padding: 0;
            }
        }
    }
</style>
<script>
    import * as validators from './validate.js'
    export default {
        props: {
            formItems: {
                type: Array,
                default: []
            }
        },
        beforeMount() { //导入校验规则
            var that = this
            var obj = {};
            for (var k in validators) {
                obj[k] = validators[k].map(function(item) {
                    var newitem = Object.assign({}, item);
                    if (typeof item.validator == 'function') {
                        newitem.validator = item.validator.bind(that);
                    }
                    return newitem;
                })
            }
            this.rules = obj;
        },
        data() {
            return {
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                show: true,
                formData: {}, //储存数据
                rules: {} //这是整个表单各个项的校验规则，各个项目的prop要与这里面的某个key值相同，就会调用该key下的value中的validator规则，trigger是触发的事件类型
            };
        },
        computed: {
            initFormData() { //初始化表单数据
                var arr = [];
                var obj = {};
                if (this.formItems && this.formItems.length) {
                    arr = this.formItems.map(function(item) {
                        if (item.value !== undefined) {
                            obj[item.code] = item.value;
                            return item;
                        } else {
                            obj[item.code] = '';
                            item.value = '';
                            return item;
                        }
                    })
                    this.formData = obj;
                }
                return arr;
            },
        },
        methods: {
            submitForm(formName) { //这里是整体校验的启动方法
                var that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', that.formData, true)
                    } else {
                        this.$emit('submit', that.formData, false)
                        return false;
                    }
                });
            },
            resetForm(formName) { //初始化表单
                this.$refs[formName].resetFields();
            }
        }
    }
</script>