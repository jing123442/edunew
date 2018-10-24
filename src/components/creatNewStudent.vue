<template>
  <div class='root'>
    <div class='head'>
      <span>新增学员</span>
    </div>
    <div class='floor floor1'>
      <div class='floortitle'>基本信息</div>
      <div class='container'>
        <!-- 控制第一层输入框/选择框等宽度的容器 -->
        <div class='widthCon'>
          <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
          <formtool v-for='(content,key) in floorOneRender' :key='key' :item='content' @keyValue='getKeyValue'></formtool>
        </div>
      </div>
    </div>
    <div class='floor floor2 clear'>
      <div class='floortitle'>班级信息</div>
      <div class='container containerfloor2'>
        <span class='floor2Text'>所属班级：</span>
        <div class='floor3Button floor2Button' style='width:88px' @click='floorTwoClickShow'>添加班级
        </div>
        <div class='alertSelectClass' v-show='floorTwoVShow'>
          <alertform @canceled='floorTwoClickCancel' @submitThird='floorTwoClickSubmit'></alertform>
        </div>
        <div class='floor2DataShow'>
          <ul v-for='(content,index) in floor2tableData' :key='index' class='floor2DataShowEach'>
            <li>{{content.className}}</li>
            <li>{{content.date}}</li>
          </ul>
        </div>
      </div>
      <!-- <table class='floor2DataShow'>
                      <tr class=''>
                        <td></td>
                        <td class='autoGetTime'>入班时间：{{new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()}}</td>
                      </tr>
                    </table> -->
    </div>
    <div class='floor floor3'>
      <div class='floortitle'>学籍信息</div>
      <div class='container floor3Container'>
        <div class='floor3CheckCard'>
          <div class='floor3Button'>班级渲染</div>
        </div>
        <div class='StuManagementShow'>
          <ul>
            <li>学籍状态：</li>
            <li>毕业资格：</li>
            <li>纪律分：</li>
            <li>未休学时：</li>
          </ul>
        </div>
      </div>
    </div>
    <div class='floor floor4'>
      <div class='floortitle'>学籍记录</div>
      <div class='container floor4Container'>
        <div class='floor3Button floor4Button' style='width:88px' @click='floorFourClickShow'>添加事件</div>
        <div class='floor4Alert' v-show='floor4Show'>
          <div class='floor4AlertHeadSelect'>
            <formtool :item=floor4render @keyValue='floor4AlertEventNum'></formtool>
          </div>
          <div class='floor4AlertBody'>
            <alertThreePart @canceled='floorFourClickCancel' @submitThired='floorFourClickSubmit' :showNum='floor4ArletNum'></alertThreePart>
            <alertTwoPart @canceled='floorFourClickCancel' @submitThired='floorFourClickSubmit' :showNum='floor4ArletNum'></alertTwoPart>
          </div>
          <alertFourPart @canceled='floorFourClickCancel' @submitThired='floorFourClickSubmit' :showNum='floor4ArletNum'></alertFourPart>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    isMobil,
    isSelected,
    isID,
    isNormalText
  } from "./mjjTools/reg.js";
  import formtool from "./mjjTools/formtool";
  import alertform from "./mjjTools/alertform";
  import alertThreePart from "./mjjTools/eventadd/alertThreePart.vue";
  import alertTwoPart from "./mjjTools/eventadd/alertTwoPart.vue";
  import alertFourPart from "./mjjTools/eventadd/alertFourPart.vue";
  export default {
    name: "creatNewStudent",
    beforeMount() {
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
                trigger: "blur"
              }]
            }
          };
          that.floorOneRender.splice(0,1,newarr);
         
        }).catch(function(res){

        });
    },
    data() {
      return {
        // 获取到的value值均存在下面的对象中
        newStuInformation: {},
        // 第一层数据***************************** 第二层数据*****************************
        // alert选择框 显示控制
        floorTwoVShow: false,
        fullData: "",
        floor2tableData: [{
          className: "wwwwwww",
          date: "1111111111111"
        }],
        //第二层所在班级展示
        stuEventName: "",
        floor4Show: false,
        floor4ArletNum: "2",
        ///////////////////////////////////////////以下为第一层formtool数据渲染///////////////////
        ////////////////////////////////////////////////////////////////
        floorOneRender: [
          //formtool传入数据格式：{type:'(01)',name:'输入提示',arr:[select/checkbox等选项],style:{样式},ru
          //le:{require:'true',message:'',}}, 所属学校渲染
          {
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
                message: "请选择所属学校",
                trigger: "blur"
              }]
            }
          },
          //  所属专业渲染
          {
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
                message: "请选择所属专业",
                trigger: "blur"
              }]
            }
          },
          // 学员学号自动生成  后台生成？？前端自己写？？
          {
            type: "01",
            name: "学员学号：",
            englishname: "stuId",
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7"
            },
            rules: {
              rule: [{
                required: true,
                validator: isMobil,
                trigger: "blur"
              }]
            }
          },
          {
            type: "01",
            name: "姓名：",
            englishname: "stuName",
            style: {
              labelWidth: "110px",
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
          },
          {
            type: "01",
            name: "身份证：",
            englishname: "stuIDCard",
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7"
            },
            rules: {
              rule: [{
                required: true,
                validator: isID,
                trigger: "blur"
              }]
            }
          },
          {
            type: "02",
            englishname: "stuSex",
            name: "性别：",
            arr: ["男", "女"],
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7",
              inLine: ""
            },
            rules: {
              rule: [{
                required: true,
                validator: isSelected,
                trigger: "blur"
              }]
            }
          },
          {
            type: "02",
            englishname: "stuQualification",
            name: "学历：",
            arr: ["硕士及以上", "本科", "专科", "高职"],
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7",
              inLine: ""
            },
            rules: {
              rule: [{
                required: true,
                validator: isSelected,
                trigger: "change"
              }]
            }
          },
          {
            type: "01",
            name: "毕业学校：",
            englishname: "stuSelfSchoolName",
            style: {
              labelWidth: "110px",
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
          },
          {
            type: "01",
            name: "专业：",
            englishname: "stuSelfProfessionName",
            style: {
              labelWidth: "110px",
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
          },
          {
            type: "01",
            name: "手机：",
            englishname: "stuPhone",
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7"
            },
            rules: {
              rule: [{
                required: true,
                validator: isMobil,
                trigger: "blur"
              }]
            }
          },
          {
            type: "01",
            name: "邮箱：",
            englishname: "stuMail",
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7"
            },
            rules: {
              rule: [{
                required: true,
                validator: isMobil,
                trigger: "blur"
              }]
            }
          }
        ],
        ////////////////////////////////////////////////以下为第二层formtool渲染数据//////////////
        // ///////////////////////////////////////// floorTworenderbutton: {   type:
        // "06",   name: "添加班级",   style: {     labelWidth: "110px",     labelPosition:
        // "left",     width: "",     buttontype: "primary"   } },
        // //////////////////////////////////////////////以下为第四层formtool渲染数据//////////////
        // ////////////////////////////////////////
        floor4render: {
          type: "02",
          englishname: "EventName",
          name: "添加事件：",
          style: {
            labelWidth: "110px",
            labelPosition: "right",
            width: ""
          },
          arr: [
            "入学进班",
            "扣除纪律分",
            "旁听",
            "休学",
            "复学",
            "留级",
            "毕业",
            "结业",
            "重读",
            "退学",
            "毕业资格无效"
          ]
        }
      };
    },
    components: {
      formtool,
      alertform,
      alertThreePart,
      alertTwoPart,
      alertFourPart
    },
    computed: {},
    methods: {
      // 一层所有信息获取，对象形式存入newStuInformation中
      getKeyValue: function(key, value) {
        if (value.checkboxvalue.length) {
          this.newStuInformation[key] = value.checkboxvalue;
        } else {
          this.newStuInformation[key] = value.value;
        }
        console.log(this.newStuInformation);
      },
      //点击添加班级后 alertform显示
      floorTwoClickShow: function() {
        this.floorTwoVShow = true;
      },
      //alertform中 取消 点击触发
      floorTwoClickCancel: function() {
        this.floorTwoVShow = false;
      },
      // alerform中 确定 点击触发
      floorTwoClickSubmit: function(obj) {
        this.floorTwoVShow = false;
        for (var key in obj) {
          this.newStuInformation[key] = obj[key];
        }
        //  var d=new Date();
        // this.fullData=d.getFullYear()+'-'(d.getMonth()+1)+'-'+d.getDate()+d.getTime();
      },
      floorFourClickShow() {
        this.floor4Show = true;
      },
      floorFourClickCancel() {
        this.floor4Show = false;
      },
      floorFourClickSubmit(obj) {
        console.log(obj, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        this.floor4Show = false;
      },
      floor4AlertEventNum(key, value) {
        switch (value.value) {
          case "入学进班":
            this.floor4ArletNum = 1;
            break;
          case "扣除纪律分":
            this.floor4ArletNum = 2;
            break;
          case "旁听":
            this.floor4ArletNum = 3;
            break;
          case "休学":
            this.floor4ArletNum = 4;
            break;
          case "复学":
            this.floor4ArletNum = 5;
            break;
          case "留级":
            this.floor4ArletNum = 6;
            break;
          case "毕业":
            this.floor4ArletNum = 7;
            break;
          case "结业":
            this.floor4ArletNum = 8;
            break;
          case "重读":
            this.floor4ArletNum = 9;
            break;
          case "退学":
            this.floor4ArletNum = 10;
            break;
          case "毕业资格无效":
            this.floor4ArletNum = 11;
            break;
        }
      }
    }
  };
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
  /* ////////////////////////以上为根元素及公共样式////////////////////////////////////////// */
  .widthCon {
    width: 350px;
  }
  /* /////////////////////////以上为第一层样式///////////////////////////// */
  .floor2 {
    position: relative;
  }
  .floor2Text {
    position: absolute;
    left: 30px;
    top: 75px;
    display: block;
  }
  .alertSelectClass {
    position: absolute;
    left: 232px;
    top: 72px;
    z-index: 100;
    background: #fff;
  }
  .floor2DataShow {
    position: absolute;
    left: 80px;
    top: 130px;
  }
  .floor2DataShow li {
    float: left;
    list-style: none;
    width: 250px;
  }
  .autoGetTime {
    color: grey;
  }
  .containerfloor2 {
    height: 230px;
  }
  .floor2Button {
    position: absolute;
    left: 115px;
    top: 65px;
  }
  /* 以上为第二层样式/////////////////////////////////////////////////////////////////////////// */
  .floor3 {
    position: relative;
  }
  .floor3CheckCard {
    position: absolute;
    left: 30px;
    top: 65px;
  }
  .floor3Container {
    height: 300px;
  }
  .floor3Button {
    width: 170px;
    height: 35px;
    border-radius: 6px;
    background-color: #0168b7;
    line-height: 35px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    font-family: "微软雅黑";
    font-weight: 400;
    margin-right: 45px;
  }
  .StuManagementShow ul {
    position: absolute;
    top: 140px;
  }
  .StuManagementShow li {
    margin-bottom: 30px;
    list-style: none;
  }
  /* 以上为第三层样式////////////////////////////////////////////////////////////////// */
  .floor4 {
    position: relative;
  }
  .floor4Container {
    height: 280px;
  }
  .floor4Button {
    position: absolute;
    top: 70px;
    left: 35px;
  }
  .floor4Alert {
    width: 480px;
    height: 310px;
    position: absolute;
    left: 140px;
    top: 55px;
    border: 1px solid black;
    background: #fff;
  }
  .floor4AlertHeadSelect {
    margin-top: 10px;
    width: 265px;
  }
</style>