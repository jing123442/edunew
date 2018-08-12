<template>
  <el-row >
      <span class="lab"><span class="red">*</span>能力达成：</span>
      <el-select v-model="firstValue" @change="firstChange" placeholder="请选择一级分类">
        <el-option
          v-for="item in firstList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
          >
        </el-option>
      </el-select>
      <el-select v-model="secondValue" @change="secondChange" placeholder="请选择二级分类">
        <el-option
          v-for="item in secondList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="thirdValue" placeholder="请选择三级分类">
        <el-option
          v-for="item in thirdList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </el-row>
</template>
<script>
export default {
  data() {
    return {
        firstList:[],
        secondList:[],
        thirdList:[],
        firstValue:'',
        secondValue:'',
        thirdValue:''
    }
  },
  created(){
    //获取一级分类
    this.getFistClassify();
  },
 
  methods:{
      ////根据父类id查询子集
      getClassifyByPid(pid){
          return  this.$http.get('/369manage/yzh/manage/inter/getClassifyByPid',{params:{pid:pid}})
      },
    getFistClassify(){
        this.$http.get('/369manage/yzh/manage/inter/getClassifyByLevel',{params:{level:1}}).then((data)=>{
           this.firstList = data.data.classifies;
        })
    },
    firstChange(value){
       this.getClassifyByPid(value).then((data)=>{
           this.secondList = data.data.classifies;
       })
    },
    secondChange(value){
       this.getClassifyByPid(value).then((data)=>{
           this.thirdList = data.data.classifies;
       })
    }
  }

}
</script>
<style lang='less' scoped>
.lab{
  margin:0 17px 0 20px;
}
.red {
      color: red;
    }

</style>