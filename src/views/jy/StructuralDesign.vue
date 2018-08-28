<template>
  <div id="structuraldesign">
    <el-button type="primary" class="addmodule" @click="addModule">添加模块</el-button>
    <!--第一层 -->
    <ul class="menu" v-for="item in menu " :key="item.id">
      <h3 @click="switchIcon($event)" @contextmenu="firstMenu($event,item.id,1)"><i class="el-icon-caret-right"></i>{{item.name}}</h3>
      <li>
        <!-- 第二层 -->
        <ul class="menu-second" v-for="item_1 in item.childRen" :key="item_1.id">
          <h3 @contextmenu="firstMenu($event,item_1.id,2)"><i class="el-icon-caret-right"></i>{{item_1.name}}</h3>
          <li>
            <!-- 第三层 -->
            <div @contextmenu="firstMenu($event.item_1_1.id,3)" class="menu-third" v-for="item_1_1 in item_1.childRen" :key="item_1_1.id">{{item_1_1.name}}</div>
            <!-- 第三层结束 -->
          </li>
        </ul>
        <!-- 第二层结束 -->
      </li>
    </ul>
    <!-- 第一层结束 -->
    <ul class="rightclick" :style="{left:rightClick.left,top:rightClick.top,display: rightClick.display}">
      <li @click="add">新建目录</li>
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
      rightClick:{
        left: 0,
        top: 0,
        display: 'none'
      },
      menu: [
        { 
          id: "111",
          name:"0",
          title: '我是第一条',
          childRen:[{
            id: "111222", 
            title: '我是第一条第一个',
            name: '0_0',
            childRen:[
              {
                id: "1112223331",
                name: '0_0_0',
                title: '第三层第一条'
              },
              {
                id: "111222332",
                name: '0_0_1',
                title: '第三层第二条'
              },
              {
                id: "111222333",
                name:'0_0_2',
                title: '第三层第三条'
              }
            ]
          }]
        }
      ],
      selectedId: '',
      selectedLevel: ''
    }
  },
  created() {
    this.planid = sessionStorage.getItem('planId');
    this.load();
  },
  methods: {
    //刷新或默认加载
    load(){
      this.$http.get('/369education/yzh/education/inter/getDirectByLevel',{
        params: {
          level:1
        }
      }).then(data=>{
        this.menu = data.data.data;
        this.$http.get('/369education/yzh/education/inter/getDirectByLevel',{
          params: {
            level:2
          }
        }).then(data=>{
          console.log(data);
          // this.menu = data.data.data;
        })
      })
    },
    //左键点击展开
    switchIcon(e){
      // if(e.target.querySelector('i').className == 'el-icon-caret-right'){
      //   e.target.querySelector('i').className = 'el-icon-caret-bottom'
      // } else if(e.target.querySelector('i').className == 'el-icon-caret-bottom'){
      //   e.target.querySelector('i').className = 'el-icon-caret-right'
      // } else if(e.target.className == 'el-icon-caret-right'){
      //   e.target.className = 'el-icon-caret-bottom'
      // } else if(e.target.className == 'el-icon-caret-bottom'){
      //   e.target.className = 'el-icon-caret-right'
      // }
      
    },
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
          planid: this.planid
          })
        ).then(data=>{
          console.log(data);
          this.menu.push({
            id: data.data.id,
            title: title,
            childRen:[]
          })
        })
      }).catch((data)=>{
         this.$message({
          message: '已取消创建',
          type: 'warning'
        });
      })
    },
    firstMenu(e,pid,level){
      e.preventDefault();
      this.selectedId = pid;
      this.selectedLevel = level;
      this.rightClick.left = e.pageX+'px';
      this.rightClick.top = e.pageY+'px';
      this.rightClick.display = 'block';
    },
    //新建目录
    add(){
      this.$prompt('请输入标题', '提示信息', {
        confirmButtonText: '确定',
      }).then(data=>{
        console.log(data.value,this.level,sessionStorage.getItem('planId'));
        this.$http.post('/369education/yzh/education/inter/addDirect',
        this.qs.stringify({
          name: data.value,
          level: this.selectedLevel+1,
          planid: sessionStorage.getItem('planId')
        })).then(data=>{
          this.load();
          this.rightClick.display = 'none';
        })
      })
    },
    //删除教案目录
    del(){
      this.$prompt('请输入标题', '提示信息', {
        confirmButtonText: '确定',
      }).then(data=>{
        this.$http.post('/369education/yzh/education/inter/delDirect',
        this.qs.stringify({
          id: this.selectedId
        })).then(data=>{
          this.load();
          this.rightClick.display = 'none';
        })
      })
    },
    //重命名
    rename(){
      this.$prompt('请输入标题', '提示信息', {
        confirmButtonText: '确定',
      }).then(data=>{
        this.$http.post('/369education/yzh/education/inter/updateDirect',
        this.qs.stringify({
          id: this.selectedId,
          name: data.value,
          planid: sessionStorage.getItem('planId')
        })).then(data=>{
          this.load();
          this.rightClick.display = 'none';
        })
      }).catch(data=>{
          this.rightClick.display = 'none';
      })
    }
  }
};
</script>
<style lang="less" scoped>
#structuraldesign {
  margin: 20px;
  .addmodule {
    margin-bottom: 20px;
  }
  .menu {
    margin-bottom: 15px;
  }
  .menu h3 {
    font-size: 17px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 8px;
    background-color: rgb(215, 215, 215);
  }
  .menu i {
    margin: 0 10px;
  }
  .menu h3,div {
    cursor: pointer;
  }
  .menu:last-child {
    margin-bottom: 0;
  }
  .menu-second h3 {
    font-size: 16px;
    padding-left: 8px;
    background-color: rgb(228, 228, 228);
  }
  .menu-third {
    height: 44px;
    font-size: 15px;
    line-height: 44px;
    font-weight: bold;
    border: 1px solid #dfe6ec;
    background-color: rgb(242, 242, 242);
    padding-left: 53px;
    margin-bottom: 10px;
  }
  .menu-third:last-child {
    margin-bottom: 0;
  }

  //右键展开
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
