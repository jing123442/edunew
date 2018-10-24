<template>
  <div id="basicinfo">
    <el-row class="name">
      <span class="namelabel"><span class="red">*</span>名称：</span>
      <el-input v-model="planInfo.name" placeholder="30个汉字以内"></el-input>
    </el-row>
    <el-row class="classifybox">
      <span class="classifylabel"><span class="red">*</span>分类：</span>
      <classify @changeCode="classifyinfo" />
    </el-row>
    
    <el-row class="thumbnail">
      <span class="namelabel"><span class="red">*</span>课程封面：</span>
      <el-upload
        class="up_img"
        action="/369education/yzh/education/inter/uploadFile"
        list-type="picture-card"
        :file-list="fileList"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="imgsuccess">
        <el-button size="small" type="primary">选择图片</el-button>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-row>
    <el-row class="intro">
      <span class="namelabel">课程简介：</span>
      <textarea v-model="planInfo.intro" class="introcentent" placeholder="300个汉字以内"></textarea>
    </el-row>
    <el-button type="primary" class="save" @click="create">保存</el-button>
  </div>
</template>
<script>
import classify from "../../components/Classify";
export default {
  data() {
    return {
      //* 分类id
      classifyid:"",
      intro: "",
      //* 上传图片点击展示大图时触发变量
      dialogImageUrl: '',
      dialogVisible: false,
      //* 默认图片上传列表
      fileList: [],
      //* 缩略图id
      thumbnailId:"",
      planId: '',
      planInfo: {}
    };
  },
  created() {
    this.planId = sessionStorage.getItem('planId');
    //根据教案id查询教案，并渲染
    this.planId && this.$http.get('/369education/yzh/education/inter/getTeachPlanById',{
        params: {
          id: this.planId
        }
      }).then(data=>{
        this.planInfo = data.data.data;
        console.log("课件基本信息===",this.planInfo);
        this.fileList.push({
          name: this.planInfo.name,
          url: "http://123.58.241.223:9999/"+this.planInfo.cover
        })
      })
  },
  methods: {
    //* 三层菜单调用返回结果
    classifyinfo(val){
      this.classifyid = val;
    },
    //* 点击文件列表中已上传文件时调用
    handlePreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //* 缩略图删除时调用
    handleRemove(file){
    },
    //* 缩略图上传成功时调用
    imgsuccess(data){
      this.thumbnailId=data.filePath;
      console.log(data);
    },
    //* 点击保存时调用
    create(){
      this.$http.post('/369education/yzh/education/inter/addTeachPlan',
      this.qs.stringify({
        name: this.planInfo.name,
        classifyid: this.classifyid,
        cover: this.thumbnailId,
        intro: this.planInfo.intro,
        createid: sessionStorage.getItem('keyId')
      })).then(data =>{
        console.log(data);
        this.$alert('创建教案成功', '提示信息', {
            confirmButtonText: '确定',
          }).then(()=>{
            //* 跳转路由前 左侧菜单调整到“教案结构设计”
            this.$emit("itemIndex",2);
            //* 存储当前教案ID
            sessionStorage.setItem('planId',data.data.id);
            //* 路由跳转
            this.$router.push(
              {
                path:'/sourceLab/createplan/structuralsesign',
                query: {id: data.data.id}
              },
            );
          });
      })
    }
  },
  components: {
    classify
  }
};
</script>

<style lang="less" scoped>
#basicinfo {
  margin-top: 30px;
  .red{
    color: red;
  }
  .el-input{
    width: 599px;
  }
  .el-row>span{
    padding-top:5px;
    display: inline-block;
    margin-left: 20px;
    width: 100px;
    vertical-align: top;
  }
  .up_img{
    display: inline-block;
  }
  .classifybox, .thumbnail, .intro{
    margin-top: 20px;
  }
  .introcentent{
    width: 600px;
    height: 170px;
    border: 1px solid #bfcbd9;
  }
  .save{
    width: 140px;
    height: 45px;
    margin: 25px 0 30px 325px;
  }
}
</style>
