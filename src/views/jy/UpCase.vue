<template>
  <div id="uphandouts">
    <div class="contenttitle">内容信息</div>
    <div class="contentinfo">
      <el-row class="name">
        <span class="namelabel"><span class="red">*</span>名称：</span>
        <el-input v-model="name" placeholder="30个汉字以内"></el-input>
      </el-row>
      <el-row class="difficulty">
        <span class="difficultylabel"><span class="red">*</span>难度：</span>
        <el-select v-model="type" placeholder="请选择" @change="typeChange">
          <el-option
            v-for="item in typeList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-row>
      <el-row class="res_file">
        <span class="namelabel"><span class="red">*</span>需求文档：</span>
        <div class="up_file">选择文件</div>
      </el-row>
      <el-row class="thumb">
        <span class="namelabel"><span class="red">*</span>简介：</span>
        <div class="thumb_bg">
            <div class="up_picture">上传图片</div>
        </div>
      </el-row>
      <el-row class="intro">
        <span class="namelabel">缩略图：</span>
        <textarea v-model="intro" class="introcentent" placeholder="300个汉字以内"></textarea>
      </el-row>
    </div>
    <el-row class="operation_btn">
        <div class="put">创建</div>
        <div class="cancel">取消</div>        
    </el-row>
  </div>
</template>
<script>

export default {
  data() {
    return {
        name: '',
        intro: ''
    }
  },
  methods: {
  },
  components:{
     
  }
};
</script>
<style lang="less" scoped>
#uphandouts {
    margin-top: 40px;
}
.contenttitle{
    width: 110px;
    color: #fff;
    background-color: rgb(154, 195, 227);
    line-height: 36px;
    text-align: center;
}
.contentinfo{
    height: 580px;
    border: 1px solid rgb(230, 240, 249);
    .red{
        color: red;
    }
    .el-row{
        margin-top: 30px;
    }
    .el-row>span{
        margin: 0 30px 0 20px;
    }
    .name{
        .namelabel{
            margin-right: 45px;
        }
        .el-input{
            width: 600px;
        }
    }
    .difficulty{
        .difficultylabel{
            margin-right: 45px;
        }
    }
    .intro {
        span{
            margin-right: 38px;
            vertical-align: top;
        }
        .introcentent{
            width: 600px;
            height: 170px;
            border: 1px solid #bfcbd9;
        }
    }
    .thumb{
        span{
            vertical-align: top;
        }
        .thumb_bg{
            width: 210px;
            height: 120px;
            display: inline-block;
            background-color: rgb(242, 242, 242);
            margin-left: 15px;
            .up_picture{
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
    .res_file{
        display: inline-block;
        span:first{
            margin-right: 20px;
        }
        .up_file{
            width: 80px;
            height: 34px;
            background-color: rgb(1, 104, 183);
            color: #fff;
            line-height: 34px;
            text-align: center;
            border-radius: 8px;
            cursor: pointer;
            display: inline-block;
        }
    }
}
.operation_btn{
    width: 500px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    .put, .cancel{
        width: 80px;
        height: 34px;
        background-color: rgb(1, 104, 183);
        color: #fff;
        line-height: 34px;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
    }
    .cancel{
        color: #333;
        background-color: #fff;
    }
}
</style>
