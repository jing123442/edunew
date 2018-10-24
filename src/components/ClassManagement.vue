<template>
    <div class='ClassManagement'>
        <div class='formBox'>
            <MyForm :formItems='formItems' @submit='submitForm'>
            </MyForm>
        </div>
        <div class='addTableRowBox clear'>
            <el-button type="primary" class='addTableRow' @click='toAddClass'>新建班级</el-button>
        </div>
        <div class='tableBox'>
            <MyTable :tableData='tableData' :theads='theads' sureButton='开启' cancelButton='修改' @reset='reset' @change='change'></MyTable>
        </div>
    </div>
</template>

<script>
    import MyForm from './stuAndClassManage/MyForm'
    import MyTable from './stuAndClassManage/MyTable.vue';
    export default {
        components: {
            MyForm,
            MyTable
        },
        data() {
            return {
                theads: { //表格的表头，对应表格数据结构
                    className: '班级名称',
                    classCode: '班级编码',
                    profName: '专业名称',
                    courseName: '课程名称',
                    teachers: '架构师',
                    managers: "项目经理",
                    stuNum: "班级人数",
                    state: "状态"
                },
                tableData: [{ //表格的数据，对应表头数据结构
                    className: '班级名称',
                    classCode: '班级编码',
                    profName: '专业名称',
                    courseName: '课程名称',
                    teachers: '架构师',
                    managers: "项目经理",
                    stuNum: "班级人数",
                    state: "状态"
                }, {
                    className: '班级名称',
                    classCode: '班级编码',
                    profName: '专业名称',
                    courseName: '课程名称',
                    teachers: '架构师',
                    managers: "项目经理",
                    stuNum: "班级人数",
                    state: "状态"
                }, {
                    className: '班级名称',
                    classCode: '班级编码',
                    profName: '专业名称',
                    courseName: '课程名称',
                    teachers: '架构师',
                    managers: "项目经理",
                    stuNum: "班级人数",
                    state: "状态"
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
                    label: '班级状态', //标签名
                    code: 'stuCode', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: '',
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '架构师', //标签名
                    code: 'stuName', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: '',
                    option: [], //这一项长度大于0的为select标签，没有为input
                }, { //表单结构
                    label: '项目经理', //标签名
                    code: 'schoolStatus', //正则匹配规则名,唯一
                    type: 'text', //input标签的类型，默认text
                    value: ['旁听'],
                    option: [], //这一项长度大于0的为select标签，没有为input
                }]
            };
        },
        methods: {
            submitForm(data, bool) {
                console.log(data, bool)
            },
            toAddClass() {
                this.$router.push({
                    path:'/newClass'
                });
            },
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
    .ClassManagement {
        // 表单的样式
        .formBox {
            width: 1200px;
            margin-left: 30px;
        } // 新增按钮的
        .addTableRowBox {
            position: relative;
            height: 55px;
            margin-left: 30px;
            .addTableRow {
                position: absolute;
                top: 0;
                padding: 10px 10px;
            }
        } // 表格的样式
        .tableBox {
            width: 1100px;
            margin-left: 30px;
        }
    }
</style>