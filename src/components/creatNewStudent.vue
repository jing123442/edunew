<template>
  <div class='root'>
    <div class='head'><span>新增学员</span></div>
    <div class='floor floor1'>
      <div class='floortitle'>基本信息</div>
      <div class='container'>
        <div class='widthCon'>
          <formtool v-for='(content,key) in floorOneRender' :key='key' :item='content' @keyValue='getKeyValue'></formtool>
        </div>
      </div>
    </div>
    <div class='floor floor2'>
      <div class='floortitle' >班级信息</div>
      <div class='container'>
        <span class='floor2CeckText'>所属班级：</span>
        <formtool  :item='floorTworender' ></formtool>
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
  import formtool from "./mjjTools/formtool";
  export default {
    name: "creatNewStudent",
    data() {
      return {
        newStuInformation: {},
        ///////////////////////////////////////////以下为第一层数据/////////////////////////////////////////////////////////////////////////////////
        floorOneRender: [
          //formtool传入数据格式：{type:'(01)',name:'输入提示',arr:[select/checkbox等选项],style:{样式},rule:{require:'true',message:'',}},
          {
            type: "02",
            englishname: 'localschool',
            name: "所属学校：",
            arr: ["青岛", "西安"],
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7",
              inLine: ''
            },
            rules: {
              rule: [{
                require: "true",
                message: "请输入",
                trigger: "blur"
              }]
            }
          },
          {
            type: "02",
            englishname: 'localmajor',
            name: "所属专业：",
            arr: ["前端", "大数据"],
            style: {
              labelWidth: "110px",
              labelPosition: "right",
              width: "7"
            },
            rule: {
              require: "true",
              message: ""
            }
          },
          {
            type: "01",
            name: "姓名",
            englishname: 'dgh',
            arr: ["青岛", "西安"],
            style: {
              labelWidth: "100px",
              labelPosition: "right",
              width: "7"
            },
            rules: {
              rule: [{
                require: "true",
                message: "请输入",
                trigger: "blur"
              }]
            }
          },
          {
            type: "03",
            englishname: 'dddr',
            name: "噗噗",
            arr: ["前端", "大数据"],
            style: {
              labelWidth: "100px",
              labelPosition: "right",
              width: "7"
            },
            rule: {
              require: "true",
              message: ""
            }
          }, {
            type: "04",
            name: "呵呵",
            englishname: 'dddr',
            arr: ["前端", "大数据"],
            style: {
              labelWidth: "100px",
              labelPosition: "right",
              width: "7"
            },
            rule: {
              require: "true",
              message: ""
            }
          },
          {
            type: "05",
            name: "按钮",
            style: {
              // labelWidth: "100px",
              // labelPosition: "right",
              // width: "7"
            },
          }
        ],
        ////////////////////////////////////////////////以下为第二层数据///////////////////////////////////////////////////////
        floorTworender: {
          type: "06",
          name: "添加班级",
          style: {
              labelWidth: "110px",
              labelPosition: "left",
              width: ""
            },
          // rules: {
          //   rule: [{
          //     require: "true",
          //     message: "请输入",
          //     trigger: "blur"
          //   }]
          // }
        },
        
      };
    },
    components: {
      formtool
    },
    methods: {
      // 一层所有信息获取，对象形式存入newStuInformation中
      getKeyValue: function(key, value) {
        if (value.checkboxvalue.length) {
          this.newStuInformation[key] = value.checkboxvalue;
        } else {
          this.newStuInformation[key] = value.value;
        }
      },
      hideOrShow:function(){
        
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
  /* ////////////////////////以上为根元素及公共样式////////////////////////////////////////// */
  .widthCon{
    width:350px;
  }
  /* /////////////////////////以上为第一层样式///////////////////////////// */
.floor2{
  position: relative;;
}
.floor2CeckText{
  position:absolute;
  left:30px;
  top:75px;
  display:block;

  
}
</style>