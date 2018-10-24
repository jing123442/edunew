<template>
  <div id="contentdesign">
    <el-row class="classifybox">
      <span class="classifylabel"><span class="red">*</span>分类：</span>
      <div class="classify">
        <el-select v-model="firstValue" @change="firstChange" placeholder="请选择一级分类">
          <el-option
            v-for="item in listInfo[0]"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            >
          </el-option>
        </el-select>
        <el-select v-model="secondValue" @change="secondChange" placeholder="请选择二级分类">
          <el-option
            v-for="item in listInfo[1]"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="thirdValue" @change="thirdChange" placeholder="请选择三级分类">
          <el-option
            v-for="item in listInfo[2]"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
    </el-row>
    
    <el-row class="intro">
      <span class="namelabel">学习目标：</span>
      <textarea v-model="intro" class="introcentent" placeholder="300个汉字以内"></textarea>
    </el-row>
    <el-button type="primary" class="save" @click="create">保存</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //* 三级菜单
      firstValue: "",
      secondValue: "",
      thirdValue: "",
      //* 三级分类选中 id
      selected: '',
      //分类id
      classifyid:"",
      intro: "",
      name: "",
      // 上传图片点击展示大图时触发变量
      dialogImageUrl: '',
      dialogVisible: false,
      //缩略图id
      thumbnailId:"",
      //* 像子组件传递的数据
      listInfo:[],
      //* 教案ID
      planId: ''
    };
  },
  created() {
    //* 默认加载三级菜单
    this.load();
  },
  methods: {
    load(){
      this.planId = sessionStorage.getItem('planId');
      this.$http.get('/369education/yzh/education/inter/getDirectByLevel',{
        params:{
          level: 1,
          planId: this.planId
        }
      }).then(data =>{
        this.listInfo.push(data.data.data);
        console.log('教案层级===',data.data.data);
      })
    },
    //* 根据id查询子级
    getDirectByPid(val){
      this.$http.get('/369education/yzh/education/inter/getDirectByPid',{
        params:{
          pid: val,
          planId: this.planId
        }
      }).then(data =>{
        console.log(data);
        this.listInfo.push(data.data.data);
      })
    },
    //* 三级菜单
    firstChange(value) {
      //* 数组删除 并将后两项置为空
      this.listInfo.splice(1,)
      this.secondValue = '';
      this.thirdValue = '';
      this.getDirectByPid(value);
    },
    secondChange(value) {
      //* 数组删除 并将后一项置为空
      this.listInfo.splice(2,);
      this.thirdValue = '';
      this.getDirectByPid(value);
    },
    thirdChange(value) {
      this.selected = value
    },
    //* 上传文件
    handlePreview(file) {
      // console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    imgsuccess(data){
      this.thumbnailId=data.filePath;
      console.log(data) 
    },
    //* 提交教案
     create(){
      // this.$http.post('/369education/yzh/education/inter/addTeachPlanContent',
      // this.qs.stringify({
      //   kpoint: this.selected,
      //   ltarget: this.intro,
      //   ltarget: this.planId,
      //！ 未写
      //   resourceList: "关联资源id"
      // })).then(data =>{
      //  console.log(data);
      // })
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
#contentdesign {
  margin-top: 30px;
  .red{
    color: red;
  }
  .el-row>span{
    padding-top:5px;
    display: inline-block;
    margin-left: 20px;
    width: 100px;
    vertical-align: top;
  }
  .classifybox, .intro{
    margin-top: 20px;
  }
  .classify{
    display: inline-block;
  }
  .el-select{
    width: 198px;
  }
  .introcentent{
    width: 600px;
    height: 170px;
    border: 1px solid #bfcbd9;
  }
  .save{
    width: 140px;
    height: 45px;
    margin: 60px 0 30px 325px;
  }
}
</style>
