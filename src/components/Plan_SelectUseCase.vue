<template>
 <el-container style="background-color: #e5f2ff;height:720px;margin:0px">
    <el-main style="padding:10px;margin:10px;height:100%" >
      <el-row :gutter="20">
        <el-col :span="2">
          <el-button type="text" @click="returnToPlan" icon="el-icon-date" style="font-size:15px">返回</el-button>
        </el-col>
        <el-col :span="5">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部用例" name="allUseCase">全部用例</el-tab-pane>
                <el-tab-pane label="分配给我" name="myUseCase">分配给我</el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="12">
            <el-input
            placeholder="请输入用例标题"
            maxlength="10"
            size="small"
            v-model="search"
            clearable>
            </el-input>
            
        </el-col>
        <el-col :span="3">
            <el-button type="primary" style="margin: 0 10px;height: 32px;width: 70px;">搜索</el-button>
        </el-col>
      </el-row>
      <div style="display:flex">
        <div style="margin-left:20px;margin-bottom:10px;display: flex;">
         
        </div>
      </div>
      <el-table
        ref="selectTable"
        :data="tableData"
        style="width: 100%;text-align: center"
        :default-sort = "{prop: 'ID', order: 'descending'}"
        >
        <el-table-column
            type="selection"
            width="55"
            fixed="left">
        </el-table-column>



        <el-table-column
          prop="ID"
          label="ID"
          sortable
          width="80">
        </el-table-column>
        <el-table-column
          prop="Priority"
          label="P"
          sortable
          width="80">
        </el-table-column>
        <el-table-column
          prop="Title"
          label="用例标题"
          sortable
          width="210">
        </el-table-column>
        <el-table-column
          prop="Type"
          label="类型"
          sortable
          width="110">
        </el-table-column>
        <el-table-column
          prop="Creator"
          label="创建人"
          sortable
          width="110">
        </el-table-column>
        <el-table-column
          prop="Do_people"
          label="执行人"
          sortable
          width="110">
        </el-table-column>
        <el-table-column
          prop="Do_time"
          label="执行时间"
          width="110"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Result"
          label="结果"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Status"
          label="状态"
          width="110"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Bug_num"
          label="B"
          width="50">
        </el-table-column>
        <el-table-column
          prop="Res_num"
          label="R"
          width="50">
        </el-table-column>
        <el-table-column
          prop="Step_num"
          label="S"
          width="50">
        </el-table-column>
        
      </el-table>
    </el-main>
    <el-footer style="padding:10px;margin:10px;margin-top:0px;padding-top:0px;background-color:white;height:30px">
      <el-row :gutter="20">
        <el-col :span="2">
           <el-checkbox @change="toggleSelection()">全选</el-checkbox>  
        </el-col>
        <el-col :span="12">
           <el-button @click="selectUseCaseSave()" size="small" type="primary">保存</el-button>  
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<style>
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
export default {
  methods: {
    returnToPlan(){
      this.$router.back()
    },
    selectUseCaseSave(){
        this.$router.back()
    },
    toggleSelection(){

        this.$refs.selectTable.toggleAllSelection();
    },
    add(){
      this.formInline.push({
        step:'',
        hope:''
      })
    },
  del(){
    this.formInline.splice(this.formInline.indexOf(),1)
  },


      handleClick(tab, event) {
        //console.log(tab, event);
      },
   


      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
     onSubmit() {
        console.log('submit!');
      },

   
      //主页面-bug模块-标签页选择
      handleClick(tab, event) {
       
      }
  },

  data () {

       const data = [{
        id: 1,
        label: '用例管理',
        children: [{
          id: 4,
          label: '用例first',
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
        selectAll:false,
      
        dialogTableVisible2: false,
        

        input: '',

        




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
      //主页面-bug模块-表格
    tableData: [
      {
      ID:'36',
 Priority:'5',
 Title:'开发人员是否有测试权限',
Type:'安全相关',
 Creator:'小刘',
 Do_people:'小王',
 Do_time:'2022-07-14 ',
Result:'失败',
 Status:'已测试',
Bug_num:'0',
 Res_num:'1',
Step_num:'2',
      },
      {
        ID:'42',
 Priority:'3',
 Title:'模块自顶向下测试',
Type:'安全相关',
 Creator:'小李',
 Do_people:'小王',
 Do_time:'2022-07-14 ',
Result:'成功',
 Status:'已测试',
Bug_num:'0',
 Res_num:'1',
Step_num:'3',
      }
      ],
      //主页面-bug模块-搜索框
      input: '',
    
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
