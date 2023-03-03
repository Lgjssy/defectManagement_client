<template>
<div id="app">

 <el-container style="background-color: #e5f2ff;height:720px;margin:0px">
  <el-header background-color="white" style="background-color: #e5f2ff;padding:0px;margin:0px">
    <div style="background-color:white;position:absolute;width:100%"></div>
    <el-row background-color="white" style="background-color: #e5f2ff;">
       
      <el-col :span="6"  style="background-color:white" >
        <div  style="background-image: url(./assets/logo.png);wideth:100px;height:100px;z-index:100;font-size:20px;color:black;text-align:center;margin-top:5%">项目管理系统</div>
      </el-col>
      <el-col :span="15">
         <el-menu
          :default-active="5"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="white"
          text-color="black"
          active-text-color="#0060d6">
          <el-menu-item index="1">工作台</el-menu-item>
          <el-menu-item index="2">合同</el-menu-item>    
          <el-menu-item index="3">项目</el-menu-item>
          <el-menu-item index="4">需求</el-menu-item>
          <el-menu-item index="5">缺陷</el-menu-item>
          <el-menu-item index="6">PMO</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3" style="background-color:white;margin:0px;padding:0px;height:100px;text-align:center">
        <el-button icon="el-icon-user" style="font-size:15px;text-align:center" type="text" >userID</el-button>
      </el-col>
    </el-row>
  </el-header>
 <el-container>
    <el-header style="background-color: #e5f2ff;padding:0px;margin:0px">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="white"
      text-color="black"
      active-text-color="#0060d6">
      <el-menu-item index="1">
          <router-link to="/Bug">Bug</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/UseCase">测试用例</router-link>
      </el-menu-item>    
      <el-menu-item index="3">
      <router-link to="/Plan">测试计划</router-link>
      </el-menu-item>
      <el-menu-item index="4">
      <router-link to="/Chart">报表</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>

  <el-container style="background-color: #e5f2ff;height:100%;margin:0px">
    <el-aside id="side"  width="300px" style="padding:10px;margin:10px;height:100%" >
        <el-select v-model="value" placeholder="请选择" style="margin-top:25px;margin-left:30px">       
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <h4 style="margin-left:10px;color:black">模块列表</h4>
      <div style="display:flex;justify-content:flex-end">
        <el-link type="primary" @click="methodManage" v-show="leftShow1" style="margin-right:20px;margin-bottom:10px">模块管理</el-link>
       <el-link type="primary" @click="dialogFormVisible = true" v-show="leftShow2" style="margin-right:20px;margin-bottom:10px">+增加模块</el-link>
              
    
<el-dialog title="添加模块" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="模块名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="模块描述" :label-width="formLabelWidth">
     <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

       
        <el-link type="primary" @click="methodManage" v-show="leftShow3" style="margin-right:20px;margin-bottom:10px">取消</el-link>
      </div>
    <div class="custom-tree-container">
        <div class="block">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
        </div>
      </div>
    </el-aside>
    <router-view></router-view>
     </el-container>
  </el-container>
</el-container>

</div>
</template>
<style>
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
   .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
 .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
.test{
border:1px solid  #eaff00;
}
.kqtlt{
      text-align: center;
    line-height: 60px;
}

.el-header, .el-footer {
    background-color: white;
    color: #D3DCE6;

  }
  
  .el-aside {
    background-color: white;
    color: #D3DCE6;

  }
  
  .el-main {
    background-color: white;
    color: #D3DCE6;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<script>

let id = 1000;
 /*new Vue({
    el:'app',
    data:{
      return:{
      tabType:true,
      }
    },
    component:{
    watch:{
      $route:function(r){
        this.tabType = r.path !== '/';
      }
    }
  },
    
  });*/
export default {
 
  
  methods: {
    //顶层标签页切换
    handleSelect(key, keyPath) 
      {
        console.log(key, keyPath);
      },

    //模块管理
    methodManage () {
      this.leftShow1 = !this.leftShow1,
      this.leftShow2 = !this.leftShow2,
      this.leftShow3 = !this.leftShow3
    },
    methodIncrease(){

    },
    //模块选择树
    append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          BugData,
        //编辑方法为空
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button icon="el-icon-circle-plus-outline" size="mini" type="text" on-click={ () => this.append(data) }></el-button>
              <el-button icon="el-icon-edit" size="mini" type="text" ></el-button>
              <el-button icon="el-icon-delete" size="mini" type="text" on-click={ () => this.remove(node, data) }></el-button>
            </span>
          </span>);
      },

  },
  data () {

    //模块选择树部分
    const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
    return {
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        
       circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //顶层标签页切换
      activeIndex2: '1',
      //左侧模块
      //树部分
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
      //模块管理部分
      leftShow1: true,
      leftShow2: false,
      leftShow3: false,
      //项目选择部分
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
       props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
    }
  },
  
}
</script>
