<template>
  <div id="upfiles">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资源库" name="first"></el-tab-pane>
    </el-tabs>
    <h2>上传资源</h2>
    <div class="classifytitle">分类信息</div>
    <div class="classifyinfo">
      <el-row class="classify">
        <span class="classifylabel"><span class="red">*</span>分类：</span>
        <el-select v-model="classify.first" placeholder="请选择一级分类">
          <el-option
            v-for="item in firstOptios"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="classify.second" placeholder="请选择二级分类">
          <el-option
            v-for="item in firstOptios"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="classify.third" placeholder="请选择三级分类">
          <el-option
            v-for="item in firstOptios"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <el-row class="type">
        <span class="typelabel"><span class="red">*</span>类型：</span>
        <el-select v-model="type" placeholder="请选择" @change="typeChange">
          <el-option
            v-for="item in typeList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-row>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      classify: {
        first: "",
        second: "",
        third: ""
      },
      firstOptios: [
        {
          value: "选项1",
          label: "IT互联网"
        },
        {
          value: "选项2",
          label: "物联网"
        }
      ],
      secondOptios: [],
      thirdtOptios: [],
      typeList: ["讲义","视频","案例","资料"],
      type: ''
    };
  },
  methods: {
    typeChange(){
      console.log(this.type);
      if(this.type=="讲义"){
        this.$router.push({
          path: "/sourceLab/upfiles/handouts",
          query:{
            id: '111'
          }
        })
      }
    }
  }
};
</script>
<style lang="less" scoped>
#upfiles {
  margin: 20px 260px 20px 40px;
  h2{
    text-align: center;
    margin: 25px 0;
  }
  .classifytitle{
    width: 110px;
    color: #fff;
    background-color: rgb(154, 195, 227);
    line-height: 36px;
    text-align: center;
  }
  .classifyinfo{
    height: 130px;
    border: 1px solid rgb(230, 240, 249);
    .classify{
      margin-top: 20px;
      .classifylabel{
        margin: 0 30px 0 20px;
      }
    }
    .type{
      margin-top: 20px;
      .typelabel{
        margin: 0 30px 0 20px;
      }
      .el-select{
        width: 110px;
      }
    }
    .red{
      color: red;
    }
  }
}
</style>
