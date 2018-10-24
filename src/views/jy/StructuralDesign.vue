<template>
  <div id="structuraldesign">
    <el-button type="primary" class="addmodule" @click="addModule">添加模块</el-button>
    <!-- 树形菜单结构 -->
    <el-tree :data="menu" default-expand-all :props="defaultProps" @node-click="handleNodeClick" @node-contextmenu="firstMenu"></el-tree>
    <!-- 树形菜单结构结束 -->
    <ul class="rightclick" :style="{left:rightClick.left,top:rightClick.top,display: rightClick.display}">
      <li @click="add" v-if="rightData.level==3?true:true">新建目录</li>
      <li @click="del">删除目录</li>
      <li @click="rename">重命名</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      //* 右键点击位置，菜单是否展示
      rightClick:{
        left: 0,
        top: 0,
        display: 'none'
      },
      //* element树形菜单设置变量用来确定和展示子级目录
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      //!菜单数据形式
      menu: [],
      // menu:[{ 
      //     id: "111",
      //     name:"0",
      //     title: '我是第一条',
      //     childRen:[{
      //       id: "111222", 
      //       title: '我是第一条第一个',
      //       name: '0_0',
      //       childRen:[
      //         {
      //           id: "1112223331",
      //           name: '0_0_0',
      //           title: '第三层第一条'
      //         },
      //         {
      //           id: "111222332",
      //           name: '0_0_1',
      //           title: '第三层第二条'
      //         },
      //         {
      //           id: "111222333",
      //           name:'0_0_2',
      //           title: '第三层第三条'
      //         }
      //       ]
      //     }]
      //   }],
      //* 右键点击菜单返回信息
      rightData: {},
      //* 教案所属ID
      planId: ''
    }
  },
  created() {
    this.planId = sessionStorage.getItem('planId');
    //* 默认加载菜单
    this.planId && this.load();
    window.addEventListener('contextmenu',this.winClick,true);
    window.addEventListener('click',this.winClick,true);
  },
  methods: {
    //*默认加载
    load(){
      this.$http.get('/369education/yzh/education/inter/getDirectByLevel',{
        params: {
          level:1,
          planId: this.planId
        }
      }).then(data=>{
        console.log('一级目录：',data);
        this.menu = data.data.data;
        //!如果一级目录没有数据则不加载二级/三级目录
        this.menu.length && this.$http.get('/369education/yzh/education/inter/getDirectByLevel',{
          params: {
            level:2,
            planId: this.planId
          }
        }).then(data=>{
          // console.log('二级目录：',data);
          for(var i = 0; i < this.menu.length; i++){
            var children = [];
            for(var j = 0; j< data.data.data.length; j++){
              if(this.menu[i].id == data.data.data[j].pid){
                children.push(data.data.data[j]);
              }
              this.$set(this.menu[i],'children',children);
            }
          }
          this.$http.get('/369education/yzh/education/inter/getDirectByLevel',{
            params: {
              level:3,
              planId: this.planId
            }
          }).then(data=>{
            // console.log('三级目录',data);
            for(var i = 0; i < this.menu.length; i++){
              //* 如果没有三级菜单则不执行
              if(!this.menu[i].children){
                continue;
              }
               for(var j = 0; j< this.menu[i].children.length; j++){
                //* 收集与父级对应的子元素
                var children = [];
                for(var m = 0; m< data.data.data.length; m++){
                  //* 对比id
                  if(this.menu[i].children[j].id == data.data.data[m].pid){
                    children.push(data.data.data[m]);
                  }
                }
                this.$set(this.menu[i].children[j],'children',children);
              }
            }
            // console.log("menu三层菜单===",this.menu);
          })
        })
      })
    },
    //* 左键点击
    handleNodeClick(data) {
      // console.log("左键点击返回信息===",data);
    },
    //* window绑定的左,右键菜单隐藏
    winClick(){
      this.rightClick.display = 'none';
    },
    //* 添加新的教案模块
    addModule(){
      this.$prompt('请输入标题', '提示信息', {
        confirmButtonText: '确定',
      }).then((data)=>{
        var title = data.value;
        console.log(data);
        this.$http.post('/369education/yzh/education/inter/addDirect',
        this.qs.stringify({
          name: title,
          level: 1,
          planid: this.planId,
          orderCode: 1
          })
        ).then(data=>{
          console.log(data);
          this.load();
        })
      }).catch((data)=>{
         this.$message({
          message: '已取消创建',
          type: 'warning'
        });
      })
    },
    //*右键点击显示菜单
    firstMenu(e,data){
      e.preventDefault();
      //* 存储右键点击信息
      this.rightData = data;
      //* 确定菜单坐标并显示
      this.rightClick.left = e.pageX+'px';
      this.rightClick.top = e.pageY+'px';
      this.rightClick.display = 'block';
    },
    //*新建目录
    add(){
      this.$prompt('请输入标题', '提示信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(data=>{
        this.$http.post('/369education/yzh/education/inter/addDirect',
        this.qs.stringify({
          name: data.value,
          level: this.rightData.level+1,
          pid: this.rightData.id,
          planid: this.planId,
          orderCode: 1
          })
        ).then(msg=>{
          console.log(this.rightData)
          this.rightData.children.push({
            id: msg.data.id,
            name: data.value,
            level: this.rightData.level+1,
            pid: this.rightData.id,
            planid: this.planId,
          });
        })
      }).catch(data=>{
        this.rightClick.display = 'none';
        this.$message({
          type: 'info',
          message: '取消创建'
        }); 
      })
    },
    //* :删除教案目录
    del(){
      this.$confirm('您确定要删除么？', '提示信息', {
        confirmButtonText: '确定',
      }).then(data=>{
        this.$http.post('/369education/yzh/education/inter/delDirect',
        this.qs.stringify({
          id: this.rightData.id
        })).then(msg=>{
          //* 获取菜单删除选中项
          //! 最多支持三层删除
          switch(this.rightData.level){
            case 1 : for(var i = 0; i < this.menu.length; i++){
              if(this.menu[i].id == this.rightData.id){
                this.menu.splice(i,1);
              }
            };break;
            case 2 : for(var i = 0; i < this.menu.length; i++){
              if(!this.menu[i].children){
                continue;
              }
              for(var j = 0; j < this.menu[i].children.length; j++){
                if(this.menu[i].children[j].id == this.rightData.id){
                  this.menu[i].children.splice(j,1);
                }
              }
            };break;
            case 3 : for(var i = 0; i < this.menu.length; i++){
              if(!this.menu[i].children){
                continue;
              }
              for(var j = 0; j < this.menu[i].children.length; j++){
                for(var n = 0; n < this.menu[i].children[j].children.length; n++){
                  if(this.menu[i].children[j].children[n].id == this.rightData.id){
                    this.menu[i].children[j].children.splice(n,1);
                  }
                }
              }
            };break;
          }
          this.rightClick.display = 'none';
        })
      })
    },
    //重命名
    rename(){
      this.$prompt('请输入重命名的标题', '提示信息', {
        confirmButtonText: '确定',
      }).then(data=>{
        this.$http.post('/369education/yzh/education/inter/updateDirect',
        this.qs.stringify({
          id: this.rightData.id,
          name: data.value,
          planid: this.planId
        })).then(msg=>{
          //* 当接口成功后改变menu
          this.rightData.name = data.value;
          this.rightClick.display = 'none';
        })
      }).catch(data=>{
          this.rightClick.display = 'none';
      })
    }
  },
  destroyed() {
    window.removeEventListener('click',this.winClick,true);
    window.removeEventListener('contextmenu',this.winClick,true);
  },
};
</script>
<style lang="less" scoped>
#structuraldesign {
  margin: 20px;
  .addmodule {
    margin-bottom: 20px;
  }
  //* 右键展开
  .rightclick{
    width: 120px;
    background-color: #fff;
    box-shadow: 0 0 2px 1px rgb(196, 195, 195);
    position: absolute;
    li{
      line-height: 36px;
      padding-left: 10px;
      cursor: pointer;
      &:hover{
        background-color: #ddd;
      }
    }
  }
}
</style>
<style>
 /* 树形菜单样式 */
  #structuraldesign .el-tree-node__content{
    height: 35px;
  }
  #structuraldesign .el-tree-node__label{
    font-size: 20px;
  }
</style>

