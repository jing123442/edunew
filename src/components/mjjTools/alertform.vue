<template>
    <div class='root'>
        <!-- 内容宽度容器 -->
        <div class='container'>
            <formtool v-for='(content,index) in alertRender ' :key='index' :item='content' @cancel='canceled' @submitSecond='submitSecond' @keyValue='getKeyValue'></formtool>
        </div>
    </div>
</template>

<script>
    import formtool from './formtool'
    export default {
        name: 'alertform',
        // props: {item:{default:{style:'30px'}}},
        components: {
            formtool,
        },
        data() {
            return {
                getKeyValues: {},
          
          alertRender: [{
              type: "02",
              englishname: "schoolName",
              name: "选择学校：",
              arr: ['西安', '青岛'],
              style: {
                labelWidth: "110px",
                labelPosition: "right",
                width: "7",
                inLine: ""
              }
            },
            {
              type: "02",
              englishname: "professionName",
              name: "选择专业：",
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
              englishname: "className",
              name: "选择班级：",
              arr: ["前端1班", "前端2班"],
              style: {
                labelWidth: "110px",
                labelPosition: "right",
                width: "7",
                inLine: ""
              }
            },
            {
              type: "06",
              name: "添加",
              style: {
                labelWidth: "110px",
                labelPosition: "left",
                width: "",
                buttontype: "primary",
                buttonTwo: true,
                buttonTwoMargenLeft: "30px"
              }
            }
          ],
            }
        },
        methods: {
            getKeyValue: function(key, value) {
                this.getKeyValues[key] = value.value;
            },
            canceled() {
                this.$emit('canceled')
            },
            submitSecond() {
                this.$emit('submitThird', this.getKeyValues)  
                console.log('submitSecond',this.getKeyValues)  
            }
        },      
    }
</script>

<style scoped>
.root{
    padding-top:30px;
    width:330px;
    border:1px solid black;
     height:245px;
}
.container{
    width:292px;
}
</style>