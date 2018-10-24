<template>
    <div class='whTable'>
        <el-table :data="tableData" border style="width: 100%" :highlight-current-row='true'>
            <el-table-column type="index" label="序号" :index="indexMethod" width="60">
            </el-table-column>
            <el-table-column v-for='(item,index) in theads' :key='index' :prop="index" :label="item">
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                                            <el-button type="primary" plain  @click='reSet(scope)'>{{sureButton}}</el-button>
                                            <el-button type="primary" plain @click='change(scope)'>{{cancelButton}}</el-button>
</template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Array,
                default: []
            },
            theads: {
                type: Object,
                default: {}
            },
            sureButton: {
                type: String,
                default: '确定'
            },
            cancelButton: {
                type: String,
                default: '取消'
            }
        },
        data() {
            return {
                eventName: ''
            }
        },
        methods: {
            reSet(scope) {
                this.$emit('reset', scope.row, scope.$index)
            },
            change(scope) {
                this.$emit('change', scope.row, scope.$index)
            },
            indexMethod(index) {
                return index + 1;
            }
        }
    }
</script>

<style lang='scss'>
    .whTable {
        width: 100%;
        .el-table th.gutter {
            display: table-cell!important;
        }
        .el-table {
            th {
                background: #409EFF;
                color: #fff;
            }
            tr,
            th {
                height: 0.36rem;
                text-align: center;
                .cell {
                    text-align: center;
                }
            }
            td {
                box-sizing: border-box;
            }
            .el-button {
                height: 0.25rem;
                padding: 0 0.1rem;
            }
        }
    }
</style>