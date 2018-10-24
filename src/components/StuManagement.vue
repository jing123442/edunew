<template>
    <div class='StuManagement'>
        <div class='formBox'>
            <MyForm :formItems='formItems' @submit='submitForm'>
            </MyForm>
        </div>
        <div class='addTableRowBox clear'>
            <el-button type="primary" class='addTableRow' @click='toAddStu'>新增学员</el-button>
        </div>
        <div class='tableBox'>
            <MyTable :tableData='tableData' :theads='theads' sureButton='重置密码' cancelButton='转发' @reset='reset' @change='change'></MyTable>
        </div>
    </div>
</template>

<script>
    import MyForm from './stuAndClassManage/MyForm'
    import MyTable from './stuAndClassManage/MyTable.vue';
    import bus from './stuAndClassManage/bus.js'
    export default {
        components: {
            MyForm,
            MyTable
        },
        data() {
            return {
                theads: { //表格的表头，对应表格数据结构
                    stuCode: '学员学号',
                    stuName: '学员姓名',
                    sex: '性别',
                    className: '班级名称',
                    profName: '专业名称',
                    schoolName: '学校名称',
                    tel: "联系电话",
                    state: "学籍状态"
                },
                tableData: [{ //表格的数据，对应表头数据结构
                    stuCode: '学员1',
                    stuName: '学员姓名',
                    sex: '性别',
                    className: '班级名称',
                    profName: '专业名称',
                    schoolName: '学校名称',
                    tel: "联系电话",
                    state: "学籍状态"
                }, {
                    stuCode: '学员2',
                    stuName: '学员姓名',
                    sex: '性别',
                    className: '班级名称',
                    profName: '专业名称',
                    schoolName: '学校名称',
                    tel: "联系电话",
                    state: "学籍状态"
                }, {
                    stuCode: '学员学号',
                    stuName: '学员姓名',
                    sex: '性别',
                    className: '班级名称',
                    profName: '专业名称',
                    schoolName: '学校名称',
                    tel: "联系电话",
                    state: "学籍状态"
                }],
                formItems: [{ //表单结构
                    label: '所属学校', //标签名
                    code: 'schools', //正则匹配规则名,唯一
                    type: 'select', //input标签的类型，默认text
                    value: '青岛',
                    option: ['青岛', '西安'], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '所属专业', //标签名
                    code: 'professions', //正则匹配规则名,唯一
                    type: 'select', //input标签的类型，默认text
                    value: '',
                    option: ['移动互联前端开发', 'Java'], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '班级名称', //标签名
                    code: 'className', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: '',
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '班级编码', //标签名
                    code: 'classCode', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: '',
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '学员学号', //标签名
                    code: 'stuCode', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: '',
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '学员姓名', //标签名
                    code: 'stuName', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: '',
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '学籍状态', //标签名
                    code: 'schoolStatus', //正则匹配规则名,唯一
                    type: 'checkbox', //input标签的类型，默认text
                    value: ['旁听'],
                    option: ['旁听', '在读', '休学', '退学', '已毕业', '已结业', ], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '学籍记录', //标签名
                    code: 'schoolRecord', //正则匹配规则名,唯一
                    type: 'checkbox', //input标签的类型，默认text
                    value: [],
                    option: ['曾休学', '曾留级', '曾重读'], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '缴费记录', //标签名
                    code: 'payRecord', //正则匹配规则名,唯一
                    type: 'checkbox', //input标签的类型，默认text
                    value: [],
                    option: ['预付', '全款', '退费'], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '入学日期', //标签名
                    code: 'entranceDate', //正则匹配规则名,唯一
                    value: '',
                    type: 'myTimePicker', //input标签的类型，默认text
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '至', //标签名
                    code: 'endDate', //正则匹配规则名,唯一
                    value: '',
                    type: 'myTimePicker', //input标签的类型，默认text
                    option: [], //这一项长度大于0的为select标签，没有为input
                }]
            };
        },
        methods: {
            submitForm(data, bool) {
                console.log(data, bool)
            },
            toAddStu() {},
            reset(item, index) {
                const h = this.$createElement;
                var that = this;
                this.$msgbox({
                    title: '提示',
                    message: h('p', null, [
                        h('span', null, '确定要为选中的学生重置密码吗 '),
                        h('i', {
                            style: 'color: rgba(240, 151, 56, 1)'
                        })
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '执行中...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            },
            change(item, index) {}
        }
    }
</script>
<style lang='scss'>
    .StuManagement {
        // 表单的样式
        .formBox {
            width: 12rem;
            margin-left: 0.3rem;
        } // 新增按钮的
        .addTableRowBox {
            position: relative;
            height: 0.55rem;
            margin-left: 0.3rem;
            .addTableRow {
                position: absolute;
                top: 0;
                padding: 0.1rem 0.1rem;
            }
        } // 表格的样式
        .tableBox {
            width: 11rem;
            margin-left: 0.3rem;
        }
    }
</style>