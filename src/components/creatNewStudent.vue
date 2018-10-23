<template>
  <div class='root'>
    <div class='head'><span>新增学员</span></div>
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
      <div class='container'>
        <span class='floor2Text'>所属班级：</span>
        <formtool :item='floorTworenderbutton' @click.native='floorTwoClickShow'></formtool>
        <div class='alertSelectClass' v-show='floorTwoVShow'>
          <alertform :item='floorTwoalertStyleaRender' @canceled='floorTwoClickCancel'></alertform>
        </div>
        <div class='floor2DataShow'>
          <!-- <div>{{this.newStuInformation.class}}</div> -->
          <!-- <div>入班时间：{{}}</div> -->
        </div>
      </div>
    </div>
    <div class='floor floor3'>
      <div class='floortitle'>学籍信息</div>
      <div class='container'></div>
    </div>
    <div class='floor floor4'>
      <div class='floortitle'>学籍记录</div>
      <div class='container'></div>
    </div>
  </div>
</template>

<script>
  import {
    isMobil
  } from "./mjjTools/reg.js";
  import {
    isSelected
  } from './mjjTools/reg.js';
  import {
    isID
  } from "./mjjTools/reg.js";
   import {
    isNormalText
  } from "./mjjTools/reg.js";
  import formtool from "./mjjTools/formtool";
  import alertform from "./mjjTools/alertform";
  export default {
    name: "creatNewStudent",
    data() {
      return {
        // 获取到的value值均存在下面的对象中
        newStuInformation: {},
        // 第一层数据*****************************
        // 第二层数据*****************************
        //alert选择框 显示控制
        floorTwoVShow: false,
        //第二层所在班级展示
        ///////////////////////////////////////////以下为第一层formtool数据渲染/////////////////////////////////////////////////////////////////////////////////
        floorOneRender: [
          //formtool传入数据格式：{type:'(01)',name:'输入提示',arr:[select/checkbox等选项],style:{样式},rule:{require:'true',message:'',}},
          // 所属学校渲染
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
                message: '请选择所属学校',
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
                message: '请选择所属专业',
                trigger: "blur"
              }]
            }
          },
          // 学员学号自动生成  后台生成？？前端自己写？？
          {
            type: "01",
            name: "学员学号:",
            englishname: "stuId",
            style: {
              labelWidth: "100px",
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
            name: "姓名:",
            englishname: "stuName",
            style: {
              labelWidth: "100px",
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
            name: "身份证:",
            englishname: "stuIDCard",
            style: {
              labelWidth: "100px",
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
                rule: [
                  {
                    required: true,
                    validator: isSelected,
                    trigger: "blur"
                  }
                ]
              }
          },
          {
            type: "02",
            englishname: "stuSex",
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
                trigger: "blur"
              }]
            }
          },
          {
            type: "01",
            name: "毕业学校:",
            englishname: "stuSelfSchoolName",
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
          },
          {
            type: "01",
            name: "专业:",
            englishname: "stuSelfProfessionName",
            style: {
              labelWidth: "100px",
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
            name: "手机:",
            englishname: "stuPhone",
            style: {
              labelWidth: "100px",
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
        ],
        ////////////////////////////////////////////////以下为第二层formtool渲染数据///////////////////////////////////////////////////////
        floorTworenderbutton: {
          type: "06",
          name: "添加班级",
          style: {
            labelWidth: "110px",
            labelPosition: "left",
            width: "",
            buttontype: "primary"
          }
        },
        floorTwoalertStyleaRender: {
          // alertform需传入样式：头部padding（默认30px），内容宽度，弹出框总宽度
          style: {
            // selectWidth:'',
            // width:'',
            // paddingTop:''
          },
          alertRender: [{
              type: "02",
              englishname: "localschool",
              name: "选择学校：",
              arr: ["青岛", "西安"],
              style: {
                labelWidth: "110px",
                labelPosition: "right",
                width: "7",
                inLine: ""
              }
            },
            {
              type: "02",
              englishname: "localschool",
              name: "选择学校：",
              arr: ["青岛", "西安"],
              style: {
                labelWidth: "110px",
                labelPosition: "right",
                width: "7",
                inLine: ""
              }
            },
            {
              type: "02",
              englishname: "localschool",
              name: "选择班级：",
              arr: ["青岛", "西安"],
              style: {
                labelWidth: "110px",
                labelPosition: "right",
                width: "7",
                inLine: ""
              }
            },
            {
              type: "06",
              name: "确定",
              style: {
                labelWidth: "110px",
                labelPosition: "left",
                width: "",
                buttontype: "primary",
                buttonTwo: true,
                buttonTwoMargenLeft: "30px"
              }
            }
          ]
        }
      };
    },
    components: {
      formtool,
      alertform
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
      },
      //点击添加班级后 alertform显示
      floorTwoClickShow: function() {
        this.floorTwoVShow = true;
        console.log("156456");
      },
      //alertform中 取消 点击触发
      floorTwoClickCancel: function() {
        this.floorTwoVShow = false;
        console.log("jignjing");
      },
      // alerform中 确定 点击触发
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
  }
  .floor2DataShow {
    position: absolute;
    left: 125px;
    top: 150px;
  }
</style>