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
                        <formtool v-for='(content,index) in floor1render' :item='content' :key='index'></formtool>
                    </div>
                </div>
            </div>
            <div class='floor floor2 clear'>
                <div class='floortitle'>班级信息</div>
                <div class='container'>
                    <div class='widthCon'>
                        <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
                        <formtool></formtool>
                    </div>
                </div>
            </div>
            <div class='floor floor3'>
                <div class='floortitle'>教学信息</div>
                <div class='container'>
                    <div class='widthCon'>
                        <!-- 循环自定义form，根据传入数据生成对应的input/select/checkbox/radio/datepicher/button -->
                        <formtool></formtool>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import formtool from './mjjTools/formtool'
    export default {
        components:{
formtool,
        },
        name:'creatNewClass',
        props:['item'],
        data() {
            return {
                // 基本信息数据渲染
                floor1render:[
                    // 所属学校数据渲染
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
              rule: [
                {
                  required: true,
                  message:'请选择所属学校',
                  trigger: "blur"
                }
              ]
            }
          },
        //   所属专业数据渲染
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
              rule: [
                {
                  required: true,
                  message:'请选择所属专业',
                  trigger: "blur"
                }
              ]
            }
          },
                ],
                // 第二层数据渲染
                floor2render:[{
            type: "01",
            name: "班级名称:",
            englishname: "stuId",
            style: {
              labelWidth: "100px",
              labelPosition: "right",
              width: "7"
            },
            // rules: {
            //   rule: [
            //     {
            //       required: true,
            //       validator: isMobil,
            //       trigger: "blur"
            //     }
            //   ]
            // }
          }]
               
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