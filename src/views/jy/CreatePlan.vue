<template>
  <div id="createplan">
    <el-tabs v-model="activeName">
      <el-tab-pane label="创建教案" name="first" active></el-tab-pane>
    </el-tabs>
    <h2 class="createLabel">创建教案</h2>
    <div class="submitaudit">
      <p>该教案尚未发布，还处于草稿状态，提交审核并通过后，才可以应用在教学中。</p>
      <el-button type="primary">提交审核</el-button>
    </div>
     <div class="preview">
      <img :src="imgsrc" alt="">
      <h3>大数据项目研发岗前实训20180321班</h3>
      <el-button type="info" plain>预览</el-button>
    </div>
    <div class="teachingplan">
      <div class="catalogue">
        <h3>教案信息</h3>
        <ul>
          <li :class="{liactive: liItem==1}" @click="catalogueItem(1)">基本信息</li>
        </ul>
        <h3>教案内容</h3>
        <ul>
          <li :class="{liactive: liItem==2}" @click="catalogueItem(2)">教案结构设计</li>
          <li :class="{liactive: liItem==3}" @click="catalogueItem(3)">教案内容设计</li>
        </ul>
      </div>
      <div class="main">
        <router-view @itemIndex="catalogueItem"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      imgsrc: require("../../assets/images/u633.png"),
      liItem: 1,
      keyId: sessionStorage.getItem('keyId')
    };
  },
  created() {
    this.catalogueItem(1);
  },
  methods: {
    catalogueItem(index){
      console.log("菜单栏index==",index);
      this.liItem = index;
      var path = {}
      if(index == 1){
        path = {path: '/sourceLab/createplan/basicinfo'}
      } else if(index == 2){
         path = {path: '/sourceLab/createplan/structuralsesign'}
      } else if(index == 3){
         path = {path: '/sourceLab/createplan/contentdesign'}
      }
      this.$router.push(
        path
      )
    }
  },
  components: {
  }
};
</script>
<style lang="less" scoped>
#createplan {
  margin: 20px 260px 20px 40px;
  .createLabel{
    color: #666;
    width: 1000px;
    text-align: center;
    padding: 15px 0;
  }
  .submitaudit {
    width: 1000px;
    height: 80px;
    border: 1px solid rgb(230, 240, 249);
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    p{
      margin: 30px 0 30px 30px;
    }
    .el-button{
      width: 88px;
      height: 36px;
      margin: 22px 25px 22px 0;
    }
  }
  .preview {
    width: 1000px;
    height: 120px;
    border: 1px solid rgb(230, 240, 249);
    display: flex;
    margin-top: 20px;
    img{
      width: 140px;
      height: 80px;
      margin: 20px 0 20px 20px;
    }
    h3{
      margin: 20px 0 0 15px;
    }
    .el-button{
      width: 88px;
      height: 36px;
      margin: 42px 0 42px 440px;
    }
  }
  .teachingplan{
    width: 1000px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    .catalogue{
      width: 190px;
      height: 300px;
      border: 1px solid rgb(230, 240, 249);
      h3{
        line-height: 40px;
        padding-left: 20px;
      }
      li{
        line-height: 40px;
        padding-left: 40px;
        cursor: pointer;
      }
      .liactive{
        color: #fff;
        background-color: #666;
      }
    }
    .main{
      width: 780px;
      height: auto;
      border: 1px solid rgb(230, 240, 249);
    }
  }
}

</style>
