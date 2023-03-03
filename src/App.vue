<template>
 <el-container style="background-color: #e5f2ff;height:720px;margin:0px">
 
  <el-header background-color="white" style="background-color: #e5f2ff;padding:0px;margin:0px">
    <div style="background-color:white;position:absolute;width:100%"></div>
    
    <el-row background-color="white" style="background-color: #e5f2ff;">
    
        <el-col :span="8"  style="background-color:white" >
         <div  style="height:100px;z-index:100;font-size:20px;color:black;text-align:left;margin-top:-15px"><img src="./images/icon.png" width="50" height="50" style="position: relative;top: 15px;"/>科大国创项目管理系统</div>  </el-col>
      <el-col :span="13">
         <el-menu

          default-active="bug"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="black"
          

          active-text-color="#ffffff">
          <el-menu-item class="el-menu-demo" index="workdesk">工作台</el-menu-item>
          <el-menu-item class="el-menu-demo"  index="bargin">合同</el-menu-item>    
          <el-menu-item class="el-menu-demo"  index="project">项目</el-menu-item>
          <el-menu-item  class="el-menu-demo" index="requirement">需求</el-menu-item>
          <el-menu-item class="el-menu-demo"  index="bug" background-color="#0060d6" style="background-color:#38B7FF">缺陷</el-menu-item>
          <el-menu-item  class="el-menu-demo" index="pmo">PMO</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3" style="background-color:white;margin:0px;padding:0px;height:100px;text-align:center">
        <el-button icon="el-icon-user" style="font-size:15px;text-align:center" type="text" @click="logoutComfirm">退出</el-button>
      </el-col>/
    </el-row>
  </el-header>
  <div style="z-index:100;border:0.5px solid  lightgray;width:100%;"></div>
 <el-container  style="margin:0px;min-height:860px">
    <el-header  style="background-color: #e5f2ff;padding:0px;margin:0px">
    <div class="line"></div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="white"
      text-color="black"
      active-text-color="#0060d6">
      <el-menu-item index="/Bug" @select="routerToBug">
        Bug
      </el-menu-item>
      <el-menu-item index="/UseCase">
        测试用例
      </el-menu-item>    
      <el-menu-item index="/Plan">
        测试计划
      </el-menu-item>
      <el-menu-item index="/Chart">
        报表
      </el-menu-item>
    </el-menu>
  </el-header>

  <el-container  style="background-color: #e5f2ff;height:100%;margin:0px">
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
      <el-button type="text" @click="methodManage" v-show="leftShow1" style="margin-right:20px;margin-bottom:10px">模块管理</el-button>
      <el-button type="text" @click="methodManage();dialogFormVisible = true" v-show="leftShow2" style="margin-right:20px;margin-bottom:10px">+增加模块</el-button>
        
        <!--弹窗部分-->
        <el-dialog title="添加模块" :visible.sync="dialogFormVisible" >
          <el-form :model="form">
          <el-form-item label="模块名称" :label-width="formLabelWidth">
            <el-input  v-model="form_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="模块描述" :label-width="formLabelWidth">
            <el-input v-model="form_description" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer" >
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="NewModuleGo();dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>


      <el-button type="text" @click="methodManage" v-show="leftShow3" style="margin-right:20px;margin-bottom:10px">取消</el-button>
    </div>
 
   <!-- 导航菜单 -->
    <div class="custom-tree-container">
      <div class="block">
        <!-- <p>使用 scoped slot</p> -->
        
        <el-tree
          :data="data"
         @node-click="findBugByModule()"
          node-key="id"
          :expand-on-click-node="false"
         
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
        >
          <span
            class="custom-tree-node"
            slot-scope="{ node, data }"
            @mouseenter="onMouseOver($event)"
            @mouseleave="onMouseOut($event)"
          >
            <span v-if="!data.isEdit">{{ node.label }}</span>
            <span class="isEdit">
              <!-- 编辑状态 -->
              <div v-if="data.isEdit">
                <el-input
                  v-model="data.label"
                  autofocus
                  size="mini"
                  :ref="'slotTreeInput' + data[id]"
                  @blur.stop="handleInput(node, data)"
                  @keyup.enter.native="handleInput(node, data)"
                ></el-input>
              </div>
              <!-- 非编辑状态 -->
              <div v-else>
                <!-- 名称： 新增节点增加class（is-new） -->
                <span
                  :class="[
                    data[id] < NODE_ID_START ? 'is-new' : '',
                    'comp-tr-node--name',
                  ]"
                >
                </span>
              </div>
 
              <span class="comp-tr-node--btns" v-show="false">
                <el-dropdown trigger="click" @visible-change="handleDropdown">
                  <i class="el-icon-more"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="() => append(node, data)">
                      <i class="el-icon-circle-plus-outline"></i
                      >新增</el-dropdown-item
                    >
                    <el-dropdown-item @click.native="handleEdit(node, data)"
                      ><i class="el-icon-edit"></i>编辑</el-dropdown-item
                    >
                    <el-dropdown-item @click.native="() => remove(node, data)"
                      ><li class="el-icon-delete"></li>
                      删除</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </span>
          </span>
        </el-tree>
      
        
      </div>
    </div>

    </el-aside>
    <router-view></router-view>
     </el-container>
  </el-container>
</el-container>
</template>
<style >
<!--主界面 激活菜单-->
.el-menu-item {
  background-color: #ffffff;
}
.el-menu-item.is-active .el-menu-demo{
  background-color: #38B7FF !important;
}

  .allCase {
    margin-left: 8px;
    color: #606266;
    font-size: 14px;
  }


.el-icon-plus {
  margin: 10px 0 0 22px;
  color: #606266;
  font-size: 14px;
  cursor: pointer;
}




.el-tree {
  height: 100%;
  
    }
  

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
import axios from 'axios'
let id = 1000;
export default {
  methods: {

    handleNodeClick(e){
     
      alert(e)
    },

    logoutComfirm(){
       this.$confirm('要退出登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已退出登录'
          });
          this.$router.replace({path: '/'});
          location.reload();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作'
          });          
        });
    },

     //所有用例列表接口
    handleAllCase() {},
    //el-tree点击事件
    myEvent(d1, d2, d3) {
      this.$emit("myEvent", d1.id);
    }, //d1.label
    //下拉列表
    handleDropdown(v) {
      this.dropdownShow = v;
      if (v) return;
      this.currentEle.style.cssText += "display:none";
    },
    //增删改鼠标移入移出隐藏显示
    //鼠标移入
    onMouseOver: function (event) {
      event.target.parentElement.querySelector(
        ".comp-tr-node--btns"
      ).style.cssText += "display:block";
      this.currentEle = event.target.parentElement.querySelector(
        ".comp-tr-node--btns"
      );
    },
    //鼠标移出
    onMouseOut: function (event) {
      if (this.dropdownShow) return;
      event.target.parentElement.querySelector(
        ".comp-tr-node--btns"
      ).style.cssText += "display:none";
    },
    //新增一级目录模块点击事件
    handleNewMoudle() {
      this.data.push({
        id: id++,
        label: "未命名模块",
        children: [],
        isEdit: true,
      });
    },
     FindBugByModule(){
        let data2={
          Module:"系统安全测试"
        }
        let url1='http://localhost:8081/findBugNumByModule';
        let n=0;
        axios.post(url1,data2).then(res=>{
          n=res.data;
        }
        ) 
        
        let url2='http://localhost:8081/findBugByModule';
        axios.post(url2,data2).then(res=>{
          this.tableData=[{
        }
        ]
          while(n-1>=0){
            this.tableData.push(
        {
          Bug_Title:res.data[n-1][0],
          Priority: res.data[n-1][1],
          Bug_Status:res.data[n-1][2],
          Creator:res.data[n-1][3],
          creat_time:res.data[n-1][4],
          Bug_End_Date:res.data[n-1][5],
          Assignee:res.data[n-1][6],
          Severity:res.data[n-1][7],
          Operating_System:res.data[n-1][8],
          Related_Modules:res.data[n-1][9],
          Related_Tasks:res.data[n-1][10],
          Related_Needs:res.data[n-1][11],
          Person_In_Charge:res.data[n-1][12],
        });
        n=n-1;
          }
            
        
        }
        ) 
        
      },

    //确定之后加入tree内
    NewModuleGo() {
       if(!this.form_name)
       this.$message.error("模块名不能为空！");
       else if(!this.form_description)
       this.$message.error("模块描述不能为空！");
       else{ 
        let data1 = {
        Module_Name:this.form_name,
            Module_Description:this.form_description
        }
    let url = 'http://localhost:8081/addModule';
    axios.post(url,data1).then(res=>{
       if(res.data==0){
        //dialogFormVisible = false;
      this.data.push({
        id: id++,
        label: this.form_name,
        children: [],
        isEdit: false,
      });
      alert("插入成功！")
       }
       else if(res.data==1)
       alert("模块名已经存在，请重新输入！");
       
    })}
      
    },

    //新增按钮
    append(node, data) {
      if (node.level >= this.MAX_LEVEL) {
        this.$message.warning(
          "当前目录已达到" + this.MAX_LEVEL + "级，无法新增！"
        );
        return false;
      }
      //新定义一个对象
      const newChild = {
        id: id++,
        label: "请输入模块名",
        children: [],
        isEdit: true,
      };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
      //新增子节点到3级
      console.log(node, data);
 
      this.$nextTick(() => {
        if (this.$refs["slotTreeInput" + data[this.id]]) {
          this.$refs["slotTreeInput" + data[this.id]].$refs.input.focus();
        }
      });
    },
    //删除按钮
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
       
    //编辑按钮
    handleInput(node, data) {
      // 修改节点
      console.log(node, data);
      // 退出编辑状态
      if (data.isEdit) {
        this.$set(data, "isEdit", false);
      }
    },
    handleEdit(node, data) {
      // 编辑节点
      console.log(node, data);
      // 设置编辑状态
      if (!data.isEdit) {
        this.$set(data, "isEdit", true);
      }
 
      // 输入框聚焦
      this.$nextTick(() => {
        if (this.$refs["slotTreeInput" + data[this.id]]) {
          this.$refs["slotTreeInput" + data[this.id]].$refs.input.focus();
        }
      });
    },
 
    //拖拽点击事件
    handleDragStart(node, ev) {
      // console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      //console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      // console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      // console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      // console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      // console.log("tree drop: ", dropNode.label, dropType);
    },
    //拖拽点击事件
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-2-2") === -1;
    },



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

    //模块选择

  },


//树形hhh
props: {
    bool: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    // 初始值
    this.startId = this.NODE_ID_START;
  },

  data () {
    

    //模块选择树部分
    const data = [{
        id: 1,
        label: '系统管理',
        children: [{
          id: 4,
          label: '系统全管理',
        },{
          id: 5,
          label:'系统小管理',
        }
        ]
      },
      
      {
        id: 2,
        label: '系统分析',
        children: [{
          id: 6,
          label: '系统小分析'
        }, {
          id: 7,
          label: '系统循环分析'
        },{
          id:8,
          label:'系统高压分析'
        }]
      }, 
      
      {
        id: 3,
        label: '系统循环测试',
        children: [{
          id: 9,
          label: '系统部分循环测试'
        }]
      },{
        id: 10,
        label:'程序安全测试'
      },{
        id:11,
        label:'程序循环测试'
      },{
        id:12,
        label:'程序高压测试'
      },
      {
        id:13,
        label:'页面安全测试'
      },{
        id:14,
        label:'页面显示测试'
      }
      
      
      
      
      
      
      ];
    return {
      form_name:"",
      form_description:"",
      
      data: JSON.parse(JSON.stringify(data)),
      currentEle: null, //操作下拉列表 当前图表元素 省略号
      dropdownShow: false, //下拉列表当前显示状态
      setTree: [], // tree数据
      id: "id", // id对应字段
      MAX_LEVEL: 2, // 设定最大层级
      NODE_ID_START: 0, // 新增节点id，逐次递减
      startId: null,
      //页面可拖拽
      defaultProps: {
        children: "children",
        label: "label",
      },



       dialogFormVisible:false, 
       circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //顶层标签页切换
      activeIndex2: '1',
      //左侧模块
      //树部分
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
      //模块管理部分
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: [],
          resource: '',
          desc: ''
        },

      leftShow1: true,
      leftShow2: false,
      leftShow3: false,
      //项目选择部分
      options: [{
        value: '选项1',
        label: '程序测试'
      }, {
        value: '选项2',
        label: '系统测试'
      }, {
        value: '选项3',
        label: '页面测试 '
      }],
      value: '',
       props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
    }
  }
}
</script>
