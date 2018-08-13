<template>
    <div class="classify">
      <el-select v-model="firstValue" @change="firstChange" placeholder="请选择一级分类" v-show="level>0">
        <el-option
          v-for="item in firstList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
          >
        </el-option>
      </el-select>
      <el-select v-model="secondValue" @change="secondChange" placeholder="请选择二级分类" v-show="level>1">
        <el-option
          v-for="item in secondList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="thirdValue" @change="thirdChange" placeholder="请选择三级分类" v-show="level>2">
        <el-option
          v-for="item in thirdList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <br/>
      <br/>
      <el-select v-model="fourthValue" class="fourthValue" placeholder="请选择能力达成" v-show="level>3">
        <el-option
          v-for="item in fourthList"
          :key="item.id"
          :label="item.name"
          :value="item.id">

        </el-option>
      </el-select>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      firstList: [],
      secondList: [],
      thirdList: [],
      fourthList: [],
      firstValue: "",
      secondValue: "",
      thirdValue: "",
      fourthValue: ""
    };
  },
  created() {
    //获取一级分类
    this.getFistClassify();
  },
  props: {
    level: {
      type: Number,
      default: 3
    }
  },
  methods: {
    ////根据父类id查询子集
    getClassifyByPid(pid) {
      return this.$http.get("/369manage/yzh/manage/inter/getClassifyByPid", {
        params: { pid: pid }
      });
    },
    getFistClassify() {
      this.$http
        .get("/369manage/yzh/manage/inter/getClassifyByLevel", {
          params: { level: 1 }
        })
        .then(data => {
          this.firstList = data.data.classifies;
        });
    },
    firstChange(value) {
      this.getClassifyByPid(value).then(data => {
        this.secondList = data.data.classifies;
      });
    },
    secondChange(value) {
      this.getClassifyByPid(value).then(data => {
        this.thirdList = data.data.classifies;
      });
    },
    thirdChange(value) {
      this.$emit('changeCode',this.thirdValue);
      if (this.level > 3) {
        this.getClassifyByPid(value).then(data => {
          this.fourthList = data.data.classifies;
        });
      }
    }
  }
};
</script>
<style lang='less' scoped>
.classify {
  height: 36px;
  line-height: 0;
  display: inline-block;
}
.el-select{
  width: 197px;
}
.fourthValue{
  margin-top: 10px;
}
</style>