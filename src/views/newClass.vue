<template>
    <div class="newCourse">
        <div class='base-news'>
            <table class='baseNews'>
                <thead class="base-head">基本信息</thead>
                <el-form :model="formInline" class="demo-form-inline">
                    <tr>
                        <td class='tr'>
                            所属学校：
                        </td>
                        <td>
                            <el-select v-model="formInline.school" placeholder="全部学校" v-for='item in schoolList' :key='item.schoolCode' @change="get_schoolCode(item.schoolCode)">
                                <el-option :label="item.schoolName" :value="item.schoolCode"></el-option>
    
                            </el-select>
                        </td>
    
                    </tr>
                    <tr>
                        <td class='tr'>
                            所属专业：
                        </td>
                        <td>
                            <el-select v-model="formInline.professional" placeholder="全部专业" v-for='profession in professionList' :key='profession.professionCode' @change="get_professionCode(profession.professionCode)">
                                <el-option :label="profession.professionName" :value="profession.professionCode"></el-option>
                            </el-select>
    
                        </td>
                    </tr>
                    <tr>
                        <td class='tr'>
                            选择架构师：
                        </td>
                        <td>
                            <el-select v-model="formInline.jiagoushi" placeholder="全部架构师" v-for="teacher in teacherList" :key="teacher.pxTeacherId" @change="get_teacherOne(teacher.pxTeacherId)">
                                <el-option :label="teacher.pxTeacherName" :value="teacher.pxTeacherId"></el-option>
    
                            </el-select>
                        </td>
    
                    </tr>
                    <tr>
                        <td class='tr'>
                            选择项目经理：
                        </td>
                        <td>
                            <el-select v-model="formInline.PM" placeholder="全部项目经理" v-for="teacher in pmList" :key="teacher.pxTeacherId" @change="get_teacherTwo(teacher.pxTeacherId)">
                                <el-option :label="teacher.pxTeacherName" :value="teacher.pxTeacherId"></el-option>
                            </el-select>
                        </td>
    
                    </tr>
                    <tr v-show='productList.length>1'>
                        <td class='tr'>
                            所属产品：
                        </td>
                        <td>
                            <el-select v-model="formInline.product" placeholder="全部产品" v-for='list in productList' :key='list.productCode' @change="get_productCode(list.productCode)">
                                <el-option :label="list.productName" :value="list.productCode"></el-option>
                            </el-select>
    
                        </td>
                    </tr>
                </el-form>
            </table>
        </div>
        <div class='base-news'>
            <table class='baseNews'>
                <thead class="base-head">班级信息</thead>
                <tr>
                    <td class='tr'>班级名称：</td>
                    <td>
                        <el-input v-model="formInline.className" placeholder="支持中文,数字,英文,不超过40个字符"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class='tr'>开课日期：</td>
                    <td>
                        <el-date-picker
                        v-model="startDate"
                        type="datetime"
                        placeholder="选择开课日期">
                        </el-date-picker>
                    </td>
                </tr>
                <tr>
                    <td class='tr'>结课日期：</td>
                    <td>
                        <el-date-picker
                        v-model="endDate"
                        type="datetime"
                        placeholder="选择结课日期">
                        </el-date-picker>
                    </td>
                </tr>
                <!-- <tr>
                    <td class='tr'>班级编码：</td>
                    <td>
                        <el-input :disabled="true" placeholder="系统生成课程编码，用户不可修改"></el-input>
                    </td>
                </tr> -->
                <tr>
                    <td class='tr'>班级状态：</td>
                    <td colspan="2">
                        <el-select v-model="formInline.status" placeholder="请选择">
                            <el-option :label="key" :value="key" v-for="(val,key) in classState" :key="key"></el-option>
                        </el-select>
                    </td>
                </tr>
                <!-- <tr>
                    <td class='tr'>选择课程：</td>
                    <td>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <el-checkbox v-model="Recheck" @change="handleCheckNotChange">反选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group @change="handleCheckedCitiesChange" fill="#0491cd" v-model="checkedCourse">
                            <el-checkbox v-for="course in courseList" :label="course.courseId" :key="course">{{course.courseName}}</el-checkbox>
                        </el-checkbox-group>
                    </td>
                </tr> -->
                <tr>
                        <td class='tr'>
                            选择教案：
                        </td>
                        <td>
                            <el-select v-model="teachPlan" placeholder="全部教案"  >
                                <el-option v-for="teachPlan in teachPlanList" :key="teachPlan.id" :label="teachPlan.name" :value="teachPlan.id"></el-option>
                            </el-select>
                        </td>
    
                    </tr>
                    <tr>
                        <td class='tr'>
                            选择测评：
                        </td>
                        <td>
                            <el-select v-model="test" placeholder="全部测评"  >
                                <el-option v-for="test in testList" :key="test.testid" :label="test.testname" :value="test.testid"></el-option>
                            </el-select>
                        </td>
    
                    </tr>
            </table>
        </div>
        <div class="sub">
            <el-button class="btn-q" type="primary" size="large" @click='addClass'>确定</el-button>
    
            <el-button class='btn-w' type="primary" size="large" @click="back">取消</el-button>
        </div>
    
    </div>
</template>
<script>
import qs from "qs";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      formInline: {
        school: "",
        professional: "",
        product: "",
        className: "",
        courseContent: "",
        status: "",
        jiagoushi: "",
        PM: ""
      },
      classState: {
        等待开课: "W",
        开课: "S",
        结课: "E",
        失效: "N"
      },
      schoolCode: "",
      professionCode: "",
      productList: "",
      productCode: "",
      teacherList: "",
      courseList: [],
      courseName: "",
      pmList: "",
      checkAll: true,
      Recheck: false,
      checkedCourse: [],
      isIndeterminate: true,
      teachPlanList:[],
      teachPlan:'',
      testList:[],
      test:''
    };
  },
  created() {
    this.getTeacherList();
    this.getAllProduct();
    this.getpmList();
    this.getAllCourse();
    this.getTeachPlanList();
    this.getTestList();
    this.$store.dispatch("SHOW_ACTIVECLASS", "classActive");
    this.$store.dispatch("GET_SCHOOLLIST");
    this.$store.dispatch("GET_PROFESSIONLIST");
  },
  computed: {
    ...mapGetters(["schoolList", "professionList"])
  },
  methods: {
      //获取测试列表
      getTestList(){
          this.$http
            .get("/369education/yzh/education/inter/getAllTestNew")
            .then(data => {
                console.log('data.data.testQBList====',data.data.testQBList);
            this.testList = data.data.testQBList;
            });
      },
      //获取教案列表
      getTeachPlanList(){
           this.$http
        .get("/369education/yzh/education/inter/getAllTeachPlan")
        .then(data => {
            console.log(data.data);
          this.teachPlanList = data.data.data;
        });
      },
    //查询教师
    getTeacherList() {
      this.$http
        .get(
          "/369research/yzh/research/inter/getTeacherList?userid=" +
            sessionStorage.getItem("keyId") +
            "&accesstoken=" +
            sessionStorage.getItem("keyToken") +
            "&roleName=teacherJGRole"
        )
        .then(res => {
          this.teacherList = res.data.teacherList;
        });
    },
    //查询项目经理
    getpmList() {
      this.$http
        .get(
          "/369research/yzh/research/inter/getTeacherList?userid=" +
            sessionStorage.getItem("keyId") +
            "&accesstoken=" +
            sessionStorage.getItem("keyToken") +
            "&roleName=teacherXMRole"
        )
        .then(res => {
          this.pmList = res.data.teacherList;
        });
    },
    getAllProduct() {
      this.$http
        .get(
          "/369research/yzh/research/inter/getAllProduct?userid=" +
            sessionStorage.getItem("keyId") +
            "&accesstoken=" +
            sessionStorage.getItem("keyToken")
        )
        .then(res => {
          this.productList = res.data.productList;
          this.productCode = res.data.productList[0].productCode;
        })
        .catch(err => console.log(err));
    },
    get_schoolCode(a) {
      this.schoolCode = a;
    },
    get_professionCode(b) {
      this.professionCode = b;
    },
    get_productCode(c) {
      this.productCode = c;
    },
    get_teacherOne(d) {
      this.teacherCode = d;
    },
    get_teacherTwo(e) {
      this.pmCode = e;
    },
    getAllCourse() {
      this.$http
        .get(
          "/369research/yzh/research/inter/getAllCourse?userid=" +
            sessionStorage.getItem("keyId") +
            "&accesstoken=" +
            sessionStorage.getItem("keyToken")
        )
        .then(res => {
          this.courseList = res.data.courseList;
        });
    },
    addClass() {
      this.$http
        .post(
          "/369research/yzh/research/inter/addClass",
          qs.stringify({
            userid: sessionStorage.getItem("keyId"),
            accesstoken: sessionStorage.getItem("keyToken"),
            teacherOne: this.formInline.jiagoushi,
            teacherTwo: this.formInline.PM,
            className: this.formInline.className,
            classState: this.classState[this.formInline.status],
            productCode: this.productCode,
            schoolCode: this.schoolCode,
            professionCode: this.professionCode,
            courseIdListStr: JSON.stringify(this.checkedCourse)
          })
        )
        .then(res => {
          if (res.data.addClassFlag === "success") {
            this.$alert("班级添加成功", "提示信息", {
              confirmButtonText: "确定"
            }).then(() => {
              this.$router.push({ path: "/labman/classs" });
            });
          }
        });
    },
    back() {
      this.$router.go(-1);
    },
    handleCheckAllChange(event) {
      let courseArr = [];
      this.courseList.forEach(function(val) {
        courseArr.push(val.courseId);
      });
      this.checkedCourse = event.target.checked ? courseArr : [];
      this.isIndeterminate = false;
    },
    handleCheckNotChange(event) {
      let courseArr = [];
      let that = this;
      this.courseList.forEach(function(val) {
        if (that.checkedCourse.indexOf(val.courseId) === -1) {
          courseArr.push(val.courseId);
        }
      });
      this.checkedCourse = event.target.checked ? courseArr : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.courseList.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.courseList.length;
    }
  }
};
</script>
<style lang="less" scoped>
.baseNews {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  color: #111;
  .base-head {
    font-size: 18px;
    color: #44aee0;
  }
  tr {
    height: 61px;
    .el-select {
      width: 247px;
      height: 32px;
    }
    .el-input {
      width: 247px;
      height: 32px;
    }
  }

  .tr {
    text-align: right;
    width: 160px;
  }
}

.base-news {
  margin: 34px;
  width: 908px;
  border-bottom: 1px solid #ddd;
}

.sub {
  text-align: center;
  .btn-w {
    background-color: #ffffff;
    width: 120px;
    height: 40px;
    border: 1px solid #0591ce;
    color: #008dce;
    border-radius: 20px;
  }
  .btn-q {
    background-color: #0591ce;
    width: 120px;
    height: 40px;
    color: #ffffff;
    border-radius: 20px;
  }
}
</style>