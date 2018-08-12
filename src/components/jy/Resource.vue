<template>
  <div id="resource">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资源库" name="first"></el-tab-pane>
    </el-tabs>
    <el-row class="classify">
      <span class="classifylabel">分类：</span>
      <el-select v-model="firstValue" placeholder="请选择一级分类">
        <el-option
          v-for="item in firstOptios"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="secondValue" placeholder="请选择二级分类">
        <el-option
          v-for="item in firstOptios"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="thirdValue" placeholder="请选择三级分类">
        <el-option
          v-for="item in firstOptios"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-row>
    <el-row class="type">
      <span class="typelabel">类型：</span>
      <el-button v-for="item in type" :key="item" size="small" v-model="typeItem">{{item}}</el-button>
    </el-row>
    </el-row>
    <el-row class="difficulty">
      <span class="typelabel">难度：</span>
      <el-button v-for="item in difficulty" :key="item" size="small" v-model="difficultyItem" :class="{btnbg: btnstyle}" @click.native="btnStyle">{{item}}</el-button>
    </el-row>
    <el-row class="search">
      <el-select v-model="lessonValue" placeholder="名称">
        <el-option v-for="item in lessonName" :key="item"  :value="item">{{item}}</el-option>
      </el-select>
      <el-input v-model="searchContent" placeholder="请输入搜索内容" clearable></el-input>
      <el-button type="primary">查询</el-button>
    </el-row>
    <p class="cuttingLine"></p>
    <el-row class="coursewareshow">
      <div class="createLesson" @click = "createLesson">
        <p>创建课件</p>
      </div>
      <div class="courseware" v-for=" item in 9" :key="item">
        <img src="../../assets/images/u183.png" alt="缩略图">
        <h3>课件标题</h3>
        <p class="issuename"><span>发布者：{牛立新}</span><span>类型：{视频}</span></p>
        <p class="issueinfo">{视频简介-本课程以新闻APP为例，手把手教你用平台开发APP，包括项目介绍、界面开发与数据交互等。}</p>
        <p class="issuebtn">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="primary" size="small">删除</el-button>
        </p>
      </div>
    </el-row>
    <div class="block">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :total="100">
      </el-pagination>
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
      firstValue: "",
      secondOptios: [],
      secondValue: "",
      thirdtOptios: [],
      thirdValue: "",
      btnstyle: false,
      type: ["全部", "讲义", "视频"],
      typeItem: "",
      difficulty: ["全部", "入门", "初级"],
      difficultyItem: "",
      lessonName: ["发布者", "简介"],
      lessonValue: "",
      searchContent: "",
      currentPage: 5,
    };
  },
  methods: {
    createLesson(){
      this.$router.push({
        path:'/sourceLab/upfiles',
        query:{
          id: 123
        }
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
.btnbg {
  color: rgb(66, 162, 235);
  background-color: #cff;
}

#resource {
  margin: 20px 260px 20px 40px;
}
.el-row {
  margin-bottom: 15px;
}
.classifylabel,.typelabel {
  font-weight: bold;
}
.el-select {
  margin: 0 3px;
}
.search {
  div {
    display: inline-block;
    vertical-align: middle;
  }
  .el-select {
    width: 120px;
  }
  .el-input {
    width: 300px;
  }
  .el-button {
    width: 80px;
    margin-left: 8px;
  }
}
.cuttingLine {
  border-top: 1px solid #d1dbe5;
}
.coursewareshow{
  height: 640px;
  display: flex;
  flex-wrap: wrap;
  div{
    width: 210px;
    height: 300px;
    margin: 15px 40px 0 0;
    cursor: pointer;
  }
  .createLesson{
    border: 1px solid rgb(204,204,204);
    background: url(../../assets/images/addgray.png) no-repeat 75px 75px;
    p{
      color: #ccc;
      font-size: 18px;
      text-align: center;
      margin-top: 230px;
    }
    &:hover{
      background-color: #f2f2f2;
    }
  }
  .courseware{
    border: 1px solid transparent;
    &:hover{
      border: 1px solid rgb(204,204,204);
    }
    img{
      width: 210px;
      height: 120px;
    }
    p{
      margin: 0 4px;
    }
    h3{
      margin: 4px;
    }
    .issuename{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .issueinfo{
      color: #999;
      height: 57px;
      overflow: hidden;
    }
    .issuebtn{
      margin-top: 15px;
      display: flex;
      justify-content: space-around;
    }
  }
}
.block{
  width: 500px;
  margin: 0 auto;
}
</style>
