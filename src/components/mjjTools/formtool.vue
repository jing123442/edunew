<template>
  <div class='mjjformtool'>
    <el-form v-if='mounting' ref="form" :model="form" :label-width="item.style.labelWidth||'100px'" :rules='rules2' :label-position='item.style.labelPosition || right' :inline='item.style.inLine||false'>
      <el-form-item :label="item.name" v-if='item.type==1' prop='rule'>
        <el-input v-model="form.value" @submit.native.prevent @input='blured'></el-input>
      </el-form-item>
      <!-- input -->
      <el-form-item :label="item.name" v-if='item.type==2' prop='rule'>
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
      <el-form-item v-if='item.type==6' prop='rule'>
        <el-button :type="item.style.buttontype" @click='submited'>{{item.name}}</el-button>
        <el-button v-if='item.style.buttonTwo ||false' :style='{marginLeft:item.style.buttonTwoMargenLeft || "30px"}' @click='cancel'>取消</el-button>
      </el-form-item>
      <!-- button -->
    </el-form>
  </div>
</template>
<script>
  export default {
    name: "formtool",
    props: ["item"],
    watch: {
      form: {
<<<<<<< HEAD
        value: "",
        checkboxvalue: [],
       
      },
      rules2: {},
      mounting: false
    };
  },
  methods: {
    blured: function() {
      this.$emit("keyValue", this.item.englishname, this.form);
      
=======
        handler(newValue, oldValue) {
          console.log(newValue);
        },
        deep: true
      },
      item() {}
>>>>>>> e93bca3c448bdd8f51a1d80381b7abdec37b7c83
    },
    beforeMount() {},
    mounted() {
      var that = this;
      if (typeof this.item.rules == 'object') {
        this.rules2 = Object.assign({}, this.item.rules);
        for (var i = 0; i < this.rules2.rule.length; i++) {
          if (this.rules2.rule[i].validator) {
            this.rules2.rule[i].validator = this.item.rules.rule[i].validator.bind(
              this
            );
          }
        }
      }
      this.$nextTick(function() {
        that.mounting = true;
      })
    },
<<<<<<< HEAD
    //确定按钮点击事件
    submited: function() {
      this.$emit("submited");
    }
  }
};
=======
    data() {
      return {
        form: {
          value: "",
          checkboxvalue: []
        },
        rules2: {},
        mounting: false
      };
    },
    methods: {
      blured: function() {
        this.$emit("keyValue", this.item.englishname, this.form);
        //  console.log(this.form.checkboxvalue)
      },
      //取消按钮点击事件
      cancel: function() {
        this.$emit("cancel");
      },
      //确定按钮点击事件
      // submit: function() {
      //   this.$emit("submit");
      // }
    }
  };
>>>>>>> e93bca3c448bdd8f51a1d80381b7abdec37b7c83
</script>

<style>
  .mjjformtool .el-select {
    display: inline-block;
    position: relative;
    width: 100%;
  }
</style>