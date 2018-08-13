<template>
  <div id="createplan">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资源库" name="first"></el-tab-pane>
    </el-tabs>
    <div class="classifyinfo">
      <p>草稿未提交</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: ""
    };
  },
  created() {
    
  },
  methods: {

  },
  components: {
  }
};
</script>
<style lang="less" scoped>
#createplan {
  margin: 20px 260px 20px 40px;
  .classifyinfo {
    height: 130px;
    border: 1px solid rgb(230, 240, 249);
  }
}

</style>
