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
            <MyTable :tableData='tableData' :theads='theads' sureButton='重置密码' cancelButton='修改' @reset='reset' @change='change'></MyTable>
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
                    state: "学籍状态",
                    buttonstate: 0
                }, {
                    stuCode: '学员2',
                    stuName: '学员姓名',
                    sex: '性别',
                    className: '班级名称',
                    profName: '专业名称',
                    schoolName: '学校名称',
                    tel: "联系电话",
                    state: "学籍状态",
                    buttonstate: 1
                }, {
                    stuCode: '学员学号',
                    stuName: '学员姓名',
                    sex: '性别',
                    className: '班级名称',
                    profName: '专业名称',
                    schoolName: '学校名称',
                    tel: "联系电话",
                    state: "学籍状态",
                    buttonstate: 2
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
            toAddStu() {
                this.$router.push({
                    path: '/newStudent'
                });
            },
            reset(item, index) {
                const h = this.$createElement;
                var that = this;
                this.$msgbox({
                    title: '提示',
                    message: h('p', null, [
                        h('i', {
                            class: 'el-icon-warning',
                            style: 'color: rgba(240, 151, 56, 1);font-size:30px;vertical-align:middle;margin-right:10px;'
                        }),
                        h('span', null, '确定要为选中的学生重置密码吗 ')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '重置',
                    confirmButtonClass: 'confirmResetButton',
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
        },
        beforeMount() {
            var that = this;
            this.$axios.get('/yzh/research/inter/getAllStuManagement').then(function(res) { //获取全部学员数据
                if (res.data && res.data.stuManagementList) {
                    var list = res.data.stuManagementList;
                    that.tableData = list.map(function(item, index) {
                        return {
                            stuCode: item.stuCode,
                            stuName: item.stuTrueName,
                            sex: item.stuSex == 'F' ? '男' : "女",
                            className: item.className,
                            profName: item.professionName,
                            schoolName: item.schoolName,
                            tel: item.stuPhone,
                            state: item.managementState,
                            buttonstate: 2
                        }
                    })
                }
            })
        }
    }
</script>
<style lang='scss'>
    .confirmResetButton {
        background: rgba(240, 151, 56, 1);
        border: 1px solid rgba(240, 151, 56, 1);
        ;
    }
    .StuManagement {
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
                padding: 10px;
            }
        } // 表格的样式
        .tableBox {
            width: 1100px;
            margin-left: 30px;
        }
    }
</style>