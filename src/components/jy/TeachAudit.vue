<template>
  <div id="teachaudit">
      <el-tabs v-model="activeName">
      <el-tab-pane label="教案管理" name="first"></el-tab-pane>
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
    <el-row class="search">
      <span>发布者：</span>
      <el-select v-model="publisherValue" placeholder="名称">
        <el-option v-for="item in publishers" :key="item"  :value="item">{{item}}</el-option>
      </el-select>
      <span>状态：</span>
      <el-select v-model="statusValue" placeholder="名称">
        <el-option v-for="item in status" :key="item"  :value="item">{{item}}</el-option>
      </el-select>
      <span>名称：</span>
      <el-input v-model="searchContent" placeholder="请输入搜索内容" clearable></el-input>
      <el-button type="primary">查询</el-button>
    </el-row>
    <p class="cuttingLine"></p>
    <div class="teachplan"> 
      <div class="courseware" v-for="item in 3" :key="item">
        <img src="../../assets/images/u633.png" alt="缩略图">
        <h3>课件标题</h3>
        <ul class="issuename"><li>发布者：{牛立新}</li><li>类型：{视频}</li></ul>
        <p class="issueinfo">{视频简介-本课程以新闻APP为例，手把手教你用平台开发APP，包括项目介绍、界面开发与数据交互等。}</p>
        <p class="issuebtn">
          <el-button type="primary" size="small" v-if="item==1">通过</el-button>
          <el-button type="primary" size="small" v-if="item==1">驳回</el-button>
          <el-button type="primary" size="small" v-if="item==2">退回</el-button>
        </p>
      </div>
    </div>
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
      publishers: ["胡文飞", "牛立新"],
      publisherValue: "",
      status: ["使用中", "审核通过","未审核"],
      statusValue: "",
      currentPage:1,
    };
  },
  methods: {
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

#teachaudit {
  margin: 20px 260px 20px 40px;
}
.el-row {
  margin-bottom: 15px;
}
.classifylabel {
  width: 56px;
  display: inline-block;
  font-weight: bold;
}
.el-select {
  margin: 0 3px;
}
.search {
  span{
    font-weight: bold;
  }
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
.teachplan{
  height: 640px;
  display: flex;
  flex-wrap: wrap;
   div{
    width: 210px;
    height: 300px;
    margin: 15px 40px 0 0;
    cursor: pointer;
  }
  .courseware{
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
      margin: 0 0 10px 4px;
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

