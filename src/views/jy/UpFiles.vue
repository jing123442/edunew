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
      <classify />
      </el-row>
      <el-row class="type">
        <span class="typelabel"><span class="red">*</span>类型：</span>
        <el-select v-model="type" placeholder="请选择" @change="typeChange">
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
    <div class="contentinfo">
      <el-row class="name">
        <span class="namelabel"><span class="red">*</span>名称：</span>
        <el-input v-model="name" placeholder="30个汉字以内"></el-input>
      </el-row>
      <el-row class="difficulty">
        <span class="difficultylabel"><span class="red">*</span>难度：</span>
        <el-select v-model="type" placeholder="请选择" @change="difficultyChange">
          <el-option
            v-for="item in difficulty"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-row>
      <div v-show="showState>1">
      <el-row class="classify">
      <span class="classifylabel"><span class="red">*</span>能力达成：</span>
      <classify :level="4"/>
      </el-row>
      <el-row class="classify">
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
        <span class="namelabel"><span class="red">*</span>缩略图：</span>
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
          <el-button size="small" type="primary">选择图片</el-button>
        </el-upload>
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
      <el-row class="operation_btn">
        <div class="put">创建</div>
        <div class="cancel">取消</div>        
    </el-row>
    </div>
    
  </div>
  
    </div>
    
  </div>
  
</template>
<script>
import classify from "../../components/Classify";
export default {
  data() {
    return {
      difficulty: [],
      type: "",
      intro: "",
      fileList: [],
      showState: 0,
      textarea: "",
      typeList: [],
      name: "",
      activeName: ""
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
    handlePreview() {},
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
      }else{
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
    .classify {
      margin-top: 20px;
      .classifylabel {
        margin: 0 30px 0 20px;
      }
    }
    .type {
      margin-top: 20px;
      .typelabel {
        margin: 0 30px 0 20px;
      }
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
  .el-row > span {
    margin: 0 30px 0 20px;
  }
  .name {
    .namelabel {
      margin-right: 45px;
    }
    .el-input {
      width: 600px;
    }
  }
  .difficulty {
    .difficultylabel {
      margin-right: 45px;
    }
  }
  .intro {
    span {
      margin-right: 38px;
      vertical-align: top;
    }
    .introcentent {
      width: 600px;
      height: 170px;
      border: 1px solid #bfcbd9;
    }
  }
  .thumb {
    span {
      vertical-align: top;
    }
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
    span:first {
      margin-right: 20px;
    }
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
