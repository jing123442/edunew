<template>
  <div id="resource">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资源库" name="first"></el-tab-pane>
    </el-tabs>
     <el-row class="classifybox">
      <span class="classifylabel">分类：</span>
    <classify  @changeCode="classifyinfo"/>
     </el-row>
    <el-row class="type">
      <span class="typelabel">类型：</span>
      <button v-for="(item,index) in type" :key="item.id" size="small" :class="{btnstyle:true,btnactive:index==typeIndex}" @click="typeChange(index,item.id)">{{item.name}}</button>
    </el-row>
    <el-row class="difficulty">
      <span class="typelabel">难度：</span>
      <button v-for="(item,index) in difficulty" :key="item.id" size="small" :class="{btnstyle:true,btnactive:index==difficultyIndex}" @click="difficultyChange(index,item.id)">{{item.name}}</button>
    </el-row>
    <el-row class="search">
      <el-select v-model="lessonValue" placeholder="名称">
        <el-option v-for="item in lessonName" :key="item"  :value="item">{{item}}</el-option>
      </el-select>
      <el-input v-model="searchContent" placeholder="请输入搜索内容" clearable></el-input>
      <el-button type="primary" @click="search">查询</el-button>
    </el-row>
    <p class="cuttingLine"></p>
    <el-row class="coursewareshow">
      <div class="createLesson" @click = "createLesson">
        <p>创建课件</p>
      </div>
      <div class="courseware" v-for=" (item) in resourceList" :key="item.id">
        <img :src="'http://123.58.241.223:9999/'+item.thumbnail" alt="课件缩略图">
        <h3>{{item.name}}</h3>
        <p class="issuename"><span>发布者：{{item.createid}}</span><span>类型：{{item.typeid}}</span></p>
        <p class="issueinfo">{{item.intro}}</p>
        <p class="issuebtn">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="primary" size="small" @click="del(item.id)">删除</el-button>
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
import classify from '../../components/Classify'
export default {
  data() {
    return {
      activeName: "first",
      classifyid: '',
      typeIndex: 0,
      difficultyIndex:0,
      btnstyle: '',
      type: [{name:"全部",id:''}],
      typeItem: "",
      difficulty: [{name:"全部",id:''}],
      difficultyItem: "",
      lessonName: ["名称","发布者", "简介"],
      lessonValue: "",
      searchContent: "",
      currentPage: 5,
      resourceList:[],
      paramsvalue: {}
    };
  },
  created() {
   this.getCourseware();
  },
  mounted(){
   this.getTypes();
   this.getdifficulty();
  },
  methods: {
    //获取课件数据
    getCourseware(){
      var that = this;
      this.$http.get(
        '/369education/yzh/education/inter/getResourceByCondition'
      ).then((data)=>{
        that.resourceList = data.data.resourceList;
        console.log(that.resourceList);
      })
    },
    //获取类型数据
    getTypes(){
      this.$http.get('/369manage/yzh/manage/inter/getDictByTypeCode',{params:{typeCode:1}}).then((data)=>{
           this.type = this.type.concat(data.data.dictionaries);
        })
    },
    classifyinfo(val){
      this.classifyid = val;
    },
    typeChange(index,id){
      // console.log(index,id);
      this.typeIndex = index;
      this.typeItem = id;
    },
    difficultyChange(index,id){
      console.log(index,id);
      this.difficultyIndex = index;
      this.difficultyItem = id;
    },
    //获取难度数据
    getdifficulty(){
      this.$http.get('/369manage/yzh/manage/inter/getDictByTypeCode',{params:{typeCode:2}}).then((data)=>{
           this.difficulty = this.difficulty.concat(data.data.dictionaries);
        })
    },
    search(){
      var that = this;
      if(this.classifyid!=''){
        this.paramsvalue.classifyid =this.classifyid;
      }
      if(this.typeItem!=''){
        this.paramsvalue.typeid =this.typeItem;
      } else{
        delete this.paramsvalue.typeid;
      }
      if(this.difficultyItem!=''){
        this.paramsvalue.defficultyid =this.difficultyItem;
      } else{
        delete this.paramsvalue.defficultyid;
      }
      if(this.lessonValue== '名称'){
        delete this.paramsvalue.intro;
        delete this.paramsvalue.createUser;
        this.paramsvalue.name = this.searchContent
      } else if(this.lessonValue== '发布者'){
        delete this.paramsvalue.name;
        delete this.paramsvalue.intro;
        this.paramsvalue.createUser = this.searchContent
      } else if(this.lessonValue== '简介'){
        delete this.paramsvalue.name;
        delete this.paramsvalue.createUser;
        this.paramsvalue.intro = this.searchContent
      }
      this.$http.get(
        '/369education/yzh/education/inter/getResourceByCondition',
        {params:this.paramsvalue})
        .then(function(data){
        console.log(data);
        that.resourceList = data.data.resourceList;
      })
    },
    del(id){
      var that = this;
      this.$http.post(
        '/369education/yzh/education/inter/deleteResource',
        this.qs.stringify({id: id})
        )
        .then(function(data){
          console.log(data);
          that.getCourseware();
          that.$alert(data.data.msg, '提示信息', {
            confirmButtonText: '确定',
          })
      })
    },
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
  },
  components:{
    classify
  }
};
</script>
<style lang="less" scoped>
.btnstyle{
    outline: none;
    cursor: pointer;
    padding: 7px 9px;
    margin-right: 10px;
    font-size: 12px;
    line-height: 12px;
    color: #1f2d3d; 
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #c4c4c4;
}
.btnactive {
  color: rgb(66, 162, 235);
  background-color: #cff;
}

#resource {
  margin: 20px 260px 20px 40px;
}
.el-row {
  margin-bottom: 15px;
}

.el-select {
  margin: 0 3px;
}
.classifylabel{
  display: inline-block;
  vertical-align: top;
  padding-top: 5px;
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
      display: block;
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


#uphandouts {
    margin-top: 40px;
}
</style>
