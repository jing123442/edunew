<template>
  <div class='mjjformtool'>
    <el-form ref="form" :model="form" :label-width="item.style.labelWidth||'100px'" :rules='item.rules' :label-position='item.style.labelPosition' :inline='item.style.inLine||false'>
      <el-form-item :label="item.name" v-if='item.type==1'>
        <el-input v-model="form.value" @submit.native.prevent @input='blured'></el-input>
      </el-form-item>
      <!-- input -->
      <el-form-item :label="item.name" v-if='item.type==2' prop=rule>
        <el-select v-model="form.value" placeholder="请选择" @input='blured'>
          <el-option :label="content" v-for='(content,index) in item.arr' :key='index' :value='content'></el-option>
        </el-select>
      </el-form-item>
      <!-- select -->
      <el-form-item :label="item.name" v-if='item.type==3'>
        <el-checkbox-group v-model="form.checkboxvalue" @input='blured'>
          <el-checkbox :label="content" v-for='(content,index) in item.arr' :key='index'></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <!-- checkbox -->
      <el-form-item :label="item.name" v-if='item.type==4'>
        <el-radio-group v-model="form.value" @input='blured'>
          <el-radio :label="content" v-for='(content,index) in item.arr' :key='index'></el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- redio -->
      <el-form-item :label="item.name" v-if='item.type==5'>
        <el-col :span="item.style.width">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.value" style="width: 100%;" @input='blured'></el-date-picker>
        </el-col>
      </el-form-item>
      <!-- datapick -->
      
      <el-form-item v-if='item.type==6'>
        <el-button :type="item.style.buttontype"   @click='chufa'>{{item.name}}</el-button>
        <el-button v-if='item.style.buttonTwo ||false' :style='{marginLeft:item.style.buttonTwoMargenLeft || "30px"}' @click='chufa'>取消</el-button>
      </el-form-item>
      <!-- button -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: "formtool",

  props: ["item"],
 
  data() {
    return {
      form: {
        value: "",
        checkboxvalue:[]
      }
    };
  },
  methods: {
     blured:function(){
       this.$emit('keyValue',this.item.englishname,this.form)
      //  console.log(this.form.checkboxvalue)
     },
     chufa:function(){
       this.$emit('bubbling');
       
     }
    
    

  }
};
</script>

<style>

.mjjformtool .el-select {
    display: inline-block;
    position: relative;
    width: 100%;
  }


</style>