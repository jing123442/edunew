<template>
  <div id="basicinfo">
    <el-row class="name">
      <span class="namelabel"><span class="red">*</span>名称：</span>
      <el-input v-model="name" placeholder="30个汉字以内"></el-input>
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
        :on-preview="handlePreview"
        :on-success="imgsuccess">
        <el-button size="small" type="primary">选择图片</el-button>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-row>
    <el-row class="intro">
      <span class="namelabel">课程简介：</span>
      <textarea v-model="intro" class="introcentent" placeholder="300个汉字以内"></textarea>
    </el-row>
  </div>
</template>
<script>
import classify from "../../components/Classify";
export default {
  data() {
    return {
      //分类id
      classifyid:"",
      intro: "",
      name: "",
      // 上传图片点击展示大图时触发变量
      dialogImageUrl: '',
      dialogVisible: false,
      //缩略图id
      thumbnailId:""
    };
  },
  created() {
    
  },
  methods: {
    classifyinfo(val){
      this.classifyid = val;
    },
    handlePreview(file) {
      // console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    imgsuccess(data){
      this.thumbnailId=data.filePath;
      console.log(data) 
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
}
</style>
