<template>
  <div id="upfiles">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资源库" name="first"></el-tab-pane>
    </el-tabs>
    <h2>上传资源</h2>
    <div class="classifytitle">分类信息</div>
    <div class="classifyinfo">
      <el-row class="classifybox">
        <span class="classifylabel"><span class="red">*</span>分类：</span>
      <classify @changeCode="classifyinfo" />
      </el-row>
      <el-row class="type">
        <span class="typelabel"><span class="red">*</span>类型：</span>
        <el-select v-model="typeid" placeholder="请选择" @change="typeChange">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-row>
      <div id="uphandouts" v-show="showState>0">
    <div class="contenttitle" >内容信息</div>
    <div class="contentinfo" :style="showState>1? 'height: 1110px':'height: 650px'">
      <el-row class="name">
        <span class="namelabel"><span class="red">*</span>名称：</span>
        <el-input v-model="name" placeholder="30个汉字以内"></el-input>
      </el-row>
      <el-row class="difficulty">
        <span class="difficultylabel"><span class="red">*</span>难度：</span>
        <el-select v-model="difficultyid" placeholder="请选择" @change="difficultyChange">
          <el-option
            v-for="item in difficulty"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-row>
      <div v-show="showState>1">
        <el-row class="classifybox">
          <span class="classifylabel"><span class="red">*</span>能力达成：</span>
          <classify :level="4"/>
        </el-row>
        <el-row class="classifybox">
          <span class="classifylabel"><span class="red">*</span>质量标准：</span>
          <el-input
          type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </el-row>
        <el-row class="res_file">
          <span class="namelabel"><span class="red">*</span>需求文档：</span>
          <!-- <div class="up_file">选择文件</div> -->
          <el-upload
            class="up_file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
        </el-row>
        <el-row class="">
          <span class="namelabel"><span class="red">*</span>原型：</span>
          <!-- <div class="up_file">选择文件</div> -->
          <el-upload
            class="up_file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
        </el-row>
        <el-row class="">
          <span class="namelabel"><span class="red">*</span>案例资源：</span>
          <!-- <div class="up_file">选择文件</div> -->
          <el-upload
            class="up_file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
        </el-row>
        <el-row class="">
          <span class="namelabel"><span class="red">*</span>标准代码：</span>
          <!-- <div class="up_file">选择文件</div> -->
          <el-upload
            class="up_file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
        </el-row>
        <el-row class="">
          <span class="namelabel"><span class="red">*</span>参考视频：</span>
          <!-- <div class="up_file">选择文件</div> -->
          <el-upload
            class="up_file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">+</el-button>
          </el-upload>
        </el-row>
        <el-row class="">
          <span class="namelabel"><span class="red">*</span>参考文档：</span>
          <!-- <div class="up_file">选择文件</div> -->
          <el-upload
            class="up_file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">+</el-button>
          </el-upload>
        </el-row>
      </div>


      <el-row class="" v-show="showState==1">
        <span class="namelabel"><span class="red">*</span>资源文件：</span>
        <!-- <div class="up_file">选择文件</div> -->
        <el-upload
          class="up_file"
          action="/369education/yzh/education/inter/uploadFile"
          multiple
          :limit="3"
          :on-success="filesuccess">
          <el-button size="small" type="primary">选择文件</el-button>
        </el-upload>
      </el-row>
      <el-row class="">
        <span class="namelabel"><span class="red">*</span>缩略图：</span>
        <!-- <div class="up_file">选择文件</div> -->
        <!-- <div class="up_file_bg">    -->
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
        <!-- </div> -->
      </el-row>
      <!-- <el-row class="thumb">
        <span class="namelabel"><span class="red">*</span>简介：</span>
        <div class="thumb_bg">
            <div class="up_picture">上传图片</div>
        </div>
      </el-row> -->
      <el-row class="intro">
        <span class="namelabel">简介：</span>
        <textarea v-model="intro" class="introcentent" placeholder="300个汉字以内"></textarea>
      </el-row>
    </div>
      <el-row class="operation_btn">
        <div class="put" @click="put">创建</div>
        <div class="cancel">取消</div>        
      </el-row>
    
  </div>
  
    </div>
    
  </div>
</template>
<script>
import classify from "../../components/Classify";
export default {
  data() {
    return {
      //分类id
      classifyid:"",
      //难度集合及id
      difficulty: [],
      difficultyid: "",
      //类型集合及id
      typeList: [],
      typeid: "",
      // 资源文件id
      resourceFile: "",
      intro: "",
      fileList: [],
      showState: 0,
      textarea: "",
      name: "",
      activeName: "",

      // 上传图片点击展示大图时触发变量
      dialogImageUrl: '',
      dialogVisible: false,
      //缩略图id
      thumbnailId:"",
      //资源文件id
      resourceFileId:""
    };
  },
  created() {
    this.getTypes();
    this.getdifficulty();
  },
  methods: {
    //获取类型数据
    getTypes() {
      this.$http
        .get("/369manage/yzh/manage/inter/getDictByTypeCode", {
          params: { typeCode: 1 }
        })
        .then(data => {
          this.typeList = this.typeList.concat(data.data.dictionaries);
        });
    },
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
    },
    filesuccess(data){
      this.resourceFileId=data.filePath;
      console.log(this.resourceFileId);
    },
    handleRemove() {},
    beforeRemove() {},
    handleExceed(data) {},
    typeChange(value) {
      var name = "";
      if (value) {
        this.typeList.forEach(item => {
          if (item.id == value) {
            name = item.name;
          }
        });
        if (name == "案例") {
          this.showState = 2;
        } else {
          this.showState = 1;
        }
      } else {
        this.showState = 0;
      }
    },
    difficultyChange(value) {},
    //获取难度数据
    getdifficulty() {
      this.$http
        .get("/369manage/yzh/manage/inter/getDictByTypeCode", {
          params: { typeCode: 2 }
        })
        .then(data => {
          this.difficulty = this.difficulty.concat(data.data.dictionaries);
        });
    },
    put(){
      console.log(
        this.classifyid,
        this.name,
        this.typeid,
        this.difficultyid,
        this.resourceFileId,
        this.thumbnailId,
        this.intro,
        sessionStorage.getItem('keyId')
        )
      this.$http.post(
        '/369education/yzh/education/inter/addResource',
        this.qs.stringify({
          classifyid:this.classifyid,
          typeid: this.typeid,
          name: this.name,
          defficultyid: this.difficultyid,
          resourceFile: this.resourceFileId,
          thumbnail: this.thumbnailId,
          intro: this.intro,
          createUser: sessionStorage.getItem('keyId')
          })
      ).then((data)=>{
         this.$alert('上传资源成功', '提示信息', {
            confirmButtonText: '确定',
          }).then(()=>{
            this.$router.push({path:'/sourceLab/resource'});
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
#upfiles {
  margin: 20px 260px 20px 40px;
  .el-row>span,div>span{
    padding-top:5px;
    display: inline-block;
    margin-left: 20px;
    width: 100px;
    vertical-align: top;
  }
  .el-textarea{
    width: 600px;
  }
  .up_file_bg{
    width: 210px;
    height: 28px;
    text-align: center;
    background-color: rgb(242,242,242);
    padding: 46px 0; 
    display: inline-block;
  }
  .up_img{
    display: inline-block;
  }
  h2 {
    text-align: center;
    margin: 25px 0;
  }
  .classifytitle {
    width: 110px;
    color: #fff;
    background-color: rgb(154, 195, 227);
    line-height: 36px;
    text-align: center;
  }
  .classifyinfo {
    height: 130px;
    border: 1px solid rgb(230, 240, 249);
    .classifybox {
      margin-top: 20px;
    }
    .type {
      margin-top: 20px;
      .el-select {
        width: 110px;
      }
    }
    .red {
      color: red;
    }
  }
}
#uphandouts {
  margin-top: 40px;
}
.contenttitle {
  width: 110px;
  color: #fff;
  background-color: rgb(154, 195, 227);
  line-height: 36px;
  text-align: center;
}
.contentinfo {
  height: 580px;
  border: 1px solid rgb(230, 240, 249);
  .red {
    color: red;
  }
  .el-row {
    margin-top: 30px;
  }
  .name {
    .el-input {
      width: 600px;
    }
  }
  .intro {
    .introcentent {
      width: 600px;
      height: 170px;
      border: 1px solid #bfcbd9;
    }
  }
  .thumb {
    .thumb_bg {
      width: 210px;
      height: 120px;
      display: inline-block;
      background-color: rgb(242, 242, 242);
      margin-left: 15px;
      .up_picture {
        width: 80px;
        height: 34px;
        background-color: rgb(1, 104, 183);
        color: #fff;
        line-height: 34px;
        text-align: center;
        border-radius: 8px;
        margin: 43px auto 0;
        cursor: pointer;
      }
    }
  }
  .up_file {
    width: 80px;
    height: 34px;
    // background-color: rgb(1, 104, 183);
    // color: #fff;
    // line-height: 34px;
    // text-align: center;
    // border-radius: 8px;
    cursor: pointer;
    display: inline-block;
  }
  .res_file {
    display: inline-block;
  }
}
.operation_btn {
  width: 500px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  .put,
  .cancel {
    width: 80px;
    height: 34px;
    background-color: rgb(1, 104, 183);
    color: #fff;
    line-height: 34px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
  }
  .cancel {
    color: #333;
    background-color: #fff;
  }
}
</style>
