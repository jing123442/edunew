<template>
  <div id="criculumdesign">
      <el-tabs v-model="activeName">
      <el-tab-pane label="课程设计" name="first"></el-tab-pane>
    </el-tabs>
    <el-row class="classify">
      <span class="classifylabel">分类：</span>
      <classify @changeCode="classifyinfo" />
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
      <el-button type="primary" @click="search">查询</el-button>
    </el-row>
    <p class="cuttingLine"></p>
    <div class="teachplan"> 
      <div class="createEvaluations" @click="designLink">
        <p>创建教案</p>
      </div>
      <div class="courseware" v-for="item in coursewaremsg" :key="item.id">
        <img :src="'http://123.58.241.223:9999/'+item.cover" alt="缩略图">
        <h3>{{item.name}}</h3>
        <ul class="issuename"><li>发布者：{{item.createUser}}</li><li>状态：{{item.checkstatedis}}</li></ul>
        <p class="issueinfo" :title="item.intro">{{item.intro}}</p>
        <p class="issuebtn">
          <el-button type="primary" size="small" v-if="item.checkstatedis=='草稿'" @click="compile(item.id)">编辑</el-button>
          <el-button type="primary" size="small" v-if="item.checkstatedis=='草稿'" @click="del(item.id)">删除</el-button>
          <el-button type="primary" size="small" v-if="item.checkstatedis=='待审核'">撤回</el-button>
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
import classify from "../../components/Classify";

export default {
  data() {
    return {
      activeName: "first",
      classifyid: "",
      btnstyle: false,
      publishers: ["胡文飞", "牛立新"],
      publisherValue: "",
      searchContent:"",
      status: ["使用中", "审核通过", "未审核"],
      statusValue: "",
      currentPage: 1,
      coursewaremsg: [],
      
    };
  },
  created() {
    //* 默认渲染列表
    this.load()
  },
  methods: {
    //* 默认加载或删除后调用重新加载
    load(){
      this.$http.get('/369education/yzh/education/inter/getTeachPlanByCondition',{
        params: {
          pageNum: 1,
          pageSize: 9
        }
      }).then(data=>{
        console.log(data);
        this.coursewaremsg = data.data.data.result;
        console.log(this.coursewaremsg)
      })
    },
    //* 三层菜单调用
    classifyinfo(val) {
      this.classifyid = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //* 根据条件查询教案
    search(){
      console.log(this.classifyid);
      //  this.$http.get('/369education/yzh/education/inter/delDirect',{
      //     params: {
      //       pageNum: 1,
      //       pageSize:9,
      //       classifyid: this.classifyid,

      //     }
      // }).then(data=>{
    //     console.log(data);
    //   })
    },
    //* 创建教案
    designLink() {
      this.$router.push({
        path: "/sourceLab/createplan"
      });
    },
    //* 编辑教案
    compile(id){
      sessionStorage.setItem("planId",id);
      this.$router.push({
        path: "/sourceLab/createplan/basicinfo"
      });
    },
    //* 删除教案
    del(id){
      console.log(id);
      this.$http.post('/369education/yzh/education/inter/delTeachPlan',
        this.qs.stringify({
          id: id
          })
        ).then(data=>{
          console.log("删除后返回数据===",data);
          //* 删除后渲染列表
          this.load();
        })
    }
  },
  components: {
    classify
  }
};
</script>
<style lang="less" scoped>
.btnbg {
  color: rgb(66, 162, 235);
  background-color: #cff;
}

#criculumdesign {
  margin: 20px 260px 20px 40px;
}
.el-row {
  margin-bottom: 15px;
}
.classifylabel {
  width: 56px;
  display: inline-block;
  font-weight: bold;
  vertical-align: top;
  margin-top: 8px;  
}
.el-select {
  margin: 0 3px;
}
.search {
  span {
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
.teachplan {
  height: 640px;
  display: flex;
  flex-wrap: wrap;
  .createEvaluations {
    border: 1px solid rgb(204, 204, 204);
    background: url(../../assets/images/addgray.png) no-repeat 75px 75px;
    p {
      color: #ccc;
      font-size: 18px;
      text-align: center;
      margin-top: 230px;
    }
    &:hover {
      background-color: #f2f2f2;
    }
  }
  div {
    width: 210px;
    height: 300px;
    margin: 15px 40px 0 0;
    cursor: pointer;
  }
  .courseware {
    box-shadow: 0 0 3px 0 #ddd;
    img {
      width: 210px;
      height: 120px;
      display: block;
    }
    p {
      margin: 0 4px;
    }
    h3 {
      margin: 4px;
    }
    .issuename {
      margin: 0 0 10px 4px;
    }
    .issueinfo {
      color: #999;
      height: 57px;
      overflow: hidden;
    }
    .issuebtn {
      margin-top: 7px;
      display: flex;
      justify-content: space-around;
    }
  }
}
.block {
  width: 500px;
  margin: 20px auto 0;
}
</style>

