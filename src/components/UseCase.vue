<template>
 <el-container style="background-color: #e5f2ff;height:720px;margin:0px">

    <el-main style="padding:10px;margin:10px;height:100%" >
      <div style="display:flex;">
        <h3 style="position:relative;left:10px;top:0px;color:black;width: 300px;">用例列表</h3>
        <el-button @click="visible=true" size="medium" type="primary" style="height:50px;margin-left:1000px;margin-top:10px">新建用例</el-button>
        <el-dialog title="添加用例" :visible.sync="visible" append-to-body>
  <el-form ref="form" :model="form" label-width="80px">
  <el-row >
    <el-col :span="10">
  <el-form-item  label="用例ID" >
    <el-input placeholder="请输入用例ID" v-model="Yl_create.Test_Case_ID"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
   <el-form-item label="用例标题" >
    <el-input placeholder="请输入用例标题" v-model="Yl_create.Test_Case_Name"></el-input>
  </el-form-item>
</el-col>
    </el-row>

<el-row >
    <el-col :span="10">
  <el-form-item label="用例类型">
    <el-select placeholder="请选择用例类型" v-model="Test_Case_Type">
      <el-option label="功能测试" value="功能测试"></el-option>
      <el-option label="性能测试" value="性能测试"></el-option>
      <el-option label="配置相关" value="配置相关"></el-option>
      <el-option label="安装部署" value="安装部署"></el-option>
      <el-option label="安全相关" value="安全相关"></el-option>
      <el-option label="接口测试" value="接口测试"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
       
    </el-row>


<el-row >
    <el-col :span="10">
  <el-form-item label="执行人" >
    <el-input placeholder="请输入执行人" v-model="Yl_create.Executor"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
  <el-form-item label="结果" >
    <el-input placeholder="请输入结果" v-model="Yl_create.Result"></el-input>
  </el-form-item>
  </el-col>
    </el-row>

<el-row >
    <el-col :span="10">
  <el-form-item label="结果数量" >
    <el-input placeholder="请输入执行结果数量" v-model="Yl_create.Number_Of_Execution_Results"></el-input>
  </el-form-item>
   </el-col>
        <el-col :span="12">
  <el-form-item label="Bug数量" >
    <el-input placeholder="请输入Bug数量" v-model="Yl_create.Number_Of_Bug"></el-input>
  </el-form-item>
  </el-col>
    </el-row>

<el-row >
    <el-col :span="10">
  <el-form-item label="步骤数量" >
    <el-input placeholder="请输入步骤数量" v-model="Yl_create.Use_Case_Steps"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
  <el-form-item label="状态" >
    <el-input placeholder="请输入状态" v-model="Yl_create.State"></el-input>
  </el-form-item>
  </el-col>
    </el-row>



  <el-form-item label="前置条件">
    <el-input type="textarea" v-model="Yl_create.Precondition"></el-input>
  </el-form-item>
 
 
 <el-row >
    <el-col :span="10">
  <el-form-item label="所属模块" >
    <el-input placeholder="请输入所属模块" v-model="Yl_create.Owning_Moudule_Name"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
  <el-form-item label="优先级别">
    <el-select  placeholder="请选择优先级别" v-model="Priority">
      <el-option label="优先级1" value="1"></el-option>
      <el-option label="优先级2" value="2"></el-option>
      <el-option label="优先级3" value="3"></el-option>
      <el-option label="优先级4" value="4"></el-option>
      <el-option label="优先级5" value="5"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
    </el-row>

 <el-row >
    <el-col :span="10">
  <el-form-item label="关键字" >
    <el-input placeholder="请输入关键字" v-model="Yl_create.Key_Words"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
 <el-form-item label="测试计划" >
    <el-input placeholder="请输入测试计划" v-model="Yl_create.Text_plan"></el-input>
  </el-form-item>
  </el-col>
    </el-row>

    <el-row >
    <el-col :span="10">
   <el-form-item label="适用阶段">
    <el-select  placeholder="请选择适用阶段" v-model="Applicable_Stage">
      <el-option label="单元测试阶段" value="单元测试阶段"></el-option>
      <el-option label="功能测试阶段" value="功能测试阶段"></el-option>
      <el-option label="集成测试阶段" value="集成测试阶段"></el-option> 
      <el-option label="系统测试阶段" value="系统测试阶段"></el-option>
      <el-option label="冒烟测试阶段" value="冒烟测试阶段"></el-option>
      <el-option label="版本验证阶段" value="版本验证阶段"></el-option>
    </el-select>
  </el-form-item>
 </el-col>
        <el-col :span="12"> 
  <el-form-item label="执行时间" >
    <el-input placeholder="请输入执行时间" v-model="Yl_create.Execution_Time"></el-input>
  </el-form-item>
    </el-col>
    </el-row>
 
  
<el-form-item label="描述">
    <el-input type="textarea" v-model="Yl_create.Description"></el-input>
  </el-form-item>

   
  


 <el-form :inline="true" v-for="(item,index) in Create_formInline" :key="index" class="demo-form-inline">
    <el-form-item label="步骤" prop="step">
      <el-input v-model="item.step" placeholder="步骤"></el-input>
    </el-form-item>
    <el-form-item label="预期" prop="hope">
      <el-input v-model="item.hope" placeholder="预期"></el-input>
    </el-form-item>
    <el-button v-show="index===0" @click="add1('Create_formInline')" icon="el-icon-plus" szie="medium"></el-button>
    <el-button v-show="index!==0" @click.prevent="del1('Create_formInline')" icon="el-icon-minus" szie="medium"></el-button>
 </el-form>

  <el-form-item>
    <el-button type="primary" @click="Submit();visible=false">立即创建</el-button>
  </el-form-item>
</el-form>
</el-dialog>

      </div>
      <div style="display:flex">
        <div style="margin-left:20px;margin-bottom:10px;display: flex;">
          <el-input
            placeholder="请输入用例标题"
            maxlength="10"
            size="small"
            v-model="input"
            clearable>
          </el-input>
          <el-button type="primary" style="margin: 0 10px;height: 32px;width: 70px;" @click="FindAllUse_case()">搜索</el-button>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%;text-align: center" :default-sort = "{prop: 'UseCase_Title', order: 'descending'}">

        <el-table-column
          prop="ID"
          label="ID"
          sortable
          width="70">
        </el-table-column>
        <el-table-column
          prop="Priority"
          label="优先级"
          sortable
          width="110">
          <template slot-scope="scope1">  
            <img :src="require('../assets/'+scope1.row.Priority+'.png')"
            style="height:25px;width:25px" 
            />
          </template>
        </el-table-column>
        <!--scope2.row.Status测试中待评审已测试-->
        <el-table-column
          prop="Status"
          label="状态"
          width="110"
          sortable>
           <template slot-scope="scope2">
            <img :src="require('../assets/'+scope2.row.Status+'.png')"
            style="height:30px;width:72px" 
            />
            
            </template> 
        </el-table-column>
        <el-table-column
          prop="Title"
          label="用例标题"
          sortable
          width="300">
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
          width="120">
        </el-table-column>
        <el-table-column
          prop="Do_people"
          label="执行人"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="Do_time"
          label="执行时间"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Result"
          label="结果"
          width="100"
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
        <el-table-column
          prop="Operation"
          label="操作"
          fixed="right"
          width="140">
          <template slot-scope="scope">
            <el-button type="text" @click="dialogTableVisible1 = true" icon="el-icon-date" style="font-size:20px"></el-button>
            <el-dialog title="执行历史" :visible.sync="dialogTableVisible1" append-to-body>
              <el-table :data="HistoryData">
                <el-table-column property="Test_ID" label="测试ID" width="150"></el-table-column>
                <el-table-column property="Test_time" label="测试日期" width="200"></el-table-column>
                <el-table-column property="Test_people" label="执行人"></el-table-column>
                <el-table-column property="Creator" label="创建人"></el-table-column>
                <el-table-column property="Test_result" label="执行结果"></el-table-column>
              </el-table>
            </el-dialog>



          <el-button icon="el-icon-video-play" @click="dialogTableVisible2 = true" style="font-size:20px"  type="text"></el-button>          
            <el-dialog title="执行" :visible.sync="dialogTableVisible2" append-to-body>
              <el-table :data="Do">
                <el-table-column property="Do_ID" label="编号" width="70"></el-table-column>
                <el-table-column property="Do_step" label="步骤" width="220"></el-table-column>
                <el-table-column property="Do_hope" label="预期" width="70"></el-table-column>
                <el-table-column label="结果" width="110">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.floorRange" placeholder="结果" >
                      <el-option v-for="item in Do_result_Options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="Do_real" label="实际情况">
                  <template slot-scope="scope">
		                <el-input placeholder="请输入" v-model="scope.row.Do_real" >
                    </el-input>
	                </template>
                </el-table-column>
              </el-table>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="Do_onece();dialogTableVisible2 = false" >确 定</el-button>
              </div>
          </el-dialog>



        <el-button icon="el-icon-edit-outline"  style="font-size:20px" type="text" @click="Edit_begin();dialogTableVisible3 = true"></el-button>
      
          
          <el-button icon="el-icon-s-release"  @click="gobug(scope.row)" style="font-size:20px" type="text"></el-button>
          </template>
          
        </el-table-column>
      </el-table>
          <el-dialog title="修改" :visible.sync="dialogTableVisible3" append-to-body>
            <el-form ref="form" :model="form" label-width="80px">
              <el-row >
                <el-col :span="10">
                  <el-form-item  label="用例ID" >
                    <el-input placeholder="请输入用例ID" v-model="Edit.Test_Case_ID"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="用例标题" >
                    <el-input placeholder="请输入用例标题" v-model="Edit.Test_Case_Name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>

              <el-row >
                <el-col :span="10">
                  <el-form-item label="用例类型">
                    <el-select placeholder="请选择用例类型" v-model="Test_Case_Type2">
                      <el-option label="功能测试" value="功能测试"></el-option>
                      <el-option label="性能测试" value="性能测试"></el-option>
                      <el-option label="配置相关" value="配置相关"></el-option>
                      <el-option label="安装部署" value="安装部署"></el-option>
                      <el-option label="安全相关" value="安全相关"></el-option>
                      <el-option label="接口测试" value="接口测试"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>


<el-row >
    <el-col :span="10">
  <el-form-item label="执行人" >
    <el-input placeholder="请输入执行人" v-model="Edit.Executor"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
  <el-form-item label="结果" >
    <el-input placeholder="请输入结果" v-model="Edit.Result"></el-input>
  </el-form-item>
  </el-col>
    </el-row>

<el-row >
    <el-col :span="10">
  <el-form-item label="结果数量" >
    <el-input placeholder="请输入执行结果数量" v-model="Edit.Number_Of_Execution_Results"></el-input>
  </el-form-item>
   </el-col>
        <el-col :span="12">
  <el-form-item label="Bug数量" >
    <el-input placeholder="请输入Bug数量" v-model="Edit.Number_Of_Bug"></el-input>
  </el-form-item>
  </el-col>
    </el-row>

<el-row >
    <el-col :span="10">
  <el-form-item label="步骤数量" >
    <el-input placeholder="请输入步骤数量" v-model="Edit.Use_Case_Steps"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
  <el-form-item label="状态" >
    <el-input placeholder="请输入状态" v-model="Edit.State"></el-input>
  </el-form-item>
  </el-col>
    </el-row>



  <el-form-item label="前置条件">
    <el-input type="textarea" v-model="Edit.Precondition"></el-input>
  </el-form-item>
 
 
 <el-row >
    <el-col :span="10">
  <el-form-item label="所属模块" >
    <el-input placeholder="请输入所属模块" v-model="Edit.Owning_Moudule_Name"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
  <el-form-item label="优先级别">
    <el-select  placeholder="请选择优先级别" v-model="Priority2">
      <el-option label="优先级1" value="1"></el-option>
      <el-option label="优先级2" value="2"></el-option>
      <el-option label="优先级3" value="3"></el-option>
      <el-option label="优先级4" value="4"></el-option>
      <el-option label="优先级5" value="5"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
    </el-row>

 <el-row >
    <el-col :span="10">
  <el-form-item label="关键字" >
    <el-input placeholder="请输入关键字" v-model="Edit.Key_Words"></el-input>
  </el-form-item>
  </el-col>
        <el-col :span="12">
 <el-form-item label="测试计划" >
    <el-input placeholder="请输入测试计划" v-model="Edit.Text_plan"></el-input>
  </el-form-item>
  </el-col>
    </el-row>

    <el-row >
    <el-col :span="10">
   <el-form-item label="适用阶段">
    <el-select  placeholder="请选择适用阶段" v-model="Applicable_Stage2">
      <el-option label="单元测试阶段" value="cell"></el-option>
      <el-option label="功能测试阶段" value="function"></el-option>
      <el-option label="集成测试阶段" value="integration"></el-option> 
      <el-option label="系统测试阶段" value="system"></el-option>
      <el-option label="冒烟测试阶段" value="smoke"></el-option>
      <el-option label="版本验证阶段" value="edition"></el-option>
    </el-select>
  </el-form-item>
 </el-col>
        <el-col :span="12"> 
  <el-form-item label="执行时间" >
    <el-input placeholder="请输入执行时间" v-model="Edit.Execution_Time"></el-input>
  </el-form-item>
    </el-col>
    </el-row>
 
  
<el-form-item label="描述">
    <el-input type="textarea" v-model="Edit.Description"></el-input>
  </el-form-item>

   
  


 <el-form :inline="true" v-for="(item,index) in Edit_formInline" :key="index" class="demo-form-inline">
    <el-form-item label="步骤" prop="step">
      <el-input v-model="item.step" placeholder="步骤"></el-input>
    </el-form-item>
    <el-form-item label="预期" prop="hope">
      <el-input v-model="item.hope" placeholder="预期"></el-input>
    </el-form-item>
    <el-button v-show="index===0" @click="add1('Edit_formInline')" icon="el-icon-plus" szie="medium"></el-button>
    <el-button v-show="index!==0" @click.prevent="del1('Edit_formInline')" icon="el-icon-minus" szie="medium"></el-button>
 </el-form>

  <el-form-item>
    <el-button type="primary" @click="Submit();dialogTableVisible3=false">立即创建</el-button>
  </el-form-item>
</el-form>
</el-dialog>
    </el-main>
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
import axios from 'axios'
let id = 1000;
export default {
  methods: {


    //弹到bug小按钮
     gobug(e) {
      let data5={
        Test_Case_ID:e.ID
      }
      
        this.$confirm('是否确定要将该用例加到Bug页面?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          let url1='http://localhost:8081/addNewBug';
        axios.post(url1,data5).then(res=>{
          if(res.data==0){
          this.$message({
            type: 'success',
            message: '弹入成功!'
          });
        }
        else if(res.data==1){
          this.$message({
            type: 'error',
            message: '弹入失败，可能是已经插入过了!'
          });
        }
        }
        )
        
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },

    FindAllUse_case(){
       let data2={
          Test_Case_Name:this.input
        }
      let url1='http://localhost:8081/findTENumByName';
        let n=0;
        axios.post(url1,data2).then(res=>{
          n=res.data;
        }
        ) 
       
        let url2='http://localhost:8081/findTEByName';
        axios.post(url2,data2).then(res=>{
           this.tableData=[
        
        ]
      
          while(n-1>=0){
            this.tableData.push(
        {
          ID:res.data[n-1][0],
          Priority:res.data[n-1][12],
          Title:res.data[n-1][1],
          Type:res.data[n-1][2],
          Creator:res.data[n-1][3],
          Do_people:res.data[n-1][4],
          Do_time:res.data[n-1][16],
          Result:res.data[n-1][5],
          Status:res.data[n-1][9],
          Bug_num:res.data[n-1][7],
          Res_num:res.data[n-1][6],
          Step_num:res.data[n-1][8],
        });
        n=n-1;
          }
            
        
        }
        ) 
    },
    add1(){
      this.Create_formInline.push({
        step:'',
        hope:''
      })
    },
    del1(){
      this.Create_formInline.splice(this.Create_formInline.indexOf(),1)
    },

    add2(){
      this.Edit_formInline.push({
        step:'',
        hope:''
      })
    },
    del2(){
      this.Edit_formInline.splice(this.Edit_formInline.indexOf(),1)
    },



    check(){
    },


    Submit(){
      let data2={
          Test_Case_ID:this.Yl_create.Test_Case_ID,
          Test_Case_Name:this.Yl_create.Test_Case_Name,
          Test_Case_Type:"配置相关",
          Creator:"小李",
          Executor:this.Yl_create.Executor,
          Result:"无",
          Number_Of_Execution_Results:this.Yl_create.Number_Of_Execution_Results,
          Number_Of_Bug:this.Yl_create.Number_Of_Bug,
          Use_Case_Steps:this.Yl_create.Use_Case_Steps,
          State:this.Yl_create.State,
          Precondition:this.Yl_create.Precondition,
          Owning_Module_Name:this.Yl_create.Owning_Moudule_Name,
          Priority:this.Priority,
          Key_Words:this.Yl_create.Key_Words,
          Description:this.Yl_create.Description,
          Applicable_Stage:this.Applicable_Stage,
          Execution_Time:this.Yl_create.Execution_Time,
          Text_plan:this.Yl_create.Text_plan
        }
      let url1='http://localhost:8081/insertTE';
        axios.post(url1,data2).then(res=>{
          if(res.data==0)
          alert("插入成功！");
          else if(res.data==1)
          alert("插入失败！")
        }
        ) 
      
    },


    Do_onece(){
      






    },


    Edit_begin(){
      






    },



    Edit_affirm(){
        
      



    }

   


     
  },
  data () {
    
    return {
      visible:false,

      Yl_create:{
         Test_Case_ID:'',
        Test_Case_Name:'',
        Test_Case_Type:'',
        Creator:'',
        Executor:'',
        Result:'',
        Number_Of_Execution_Results:'',
        Number_Of_Bug:'',
        Use_Case_Steps:'',
        State:'',
        Precondition:'',
        Owning_Moudule_Name:'',
        Key_Words:'',
        Description:'',
        Execution_Time:'',
        Text_plan:'',
      },
      Edit:{
         Test_Case_ID:'',
        Test_Case_Name:'',
        Test_Case_Type:'',
        Creator:'',
        Executor:'',
        Result:'',
        Number_Of_Execution_Results:'',
        Number_Of_Bug:'',
        Use_Case_Steps:'',
        State:'',
        Precondition:'',
        Owning_Moudule_Name:'',
        Key_Words:'',
        Description:'',
        Execution_Time:'',
        Text_plan:'',
      },


      Do_result_Options: [
        {
          value: "选项1",
          label: "成功"
        },
        {
          value: "选项2",
          label: "忽略"
        },
        {
          value: "选项3",
          label: "阻塞"
        },
        {
          value: "选项4",
          label: "失败"
        },
      ],

      Create_formInline:[
        {
          step:'',
          hope:''
        }
      ],
      Edit_formInline:[
        {
          step:'',
          hope:''
        }
      ],
       HistoryData: [{
          Test_ID: '43',
          Test_time: '2022-07-06',
          Test_people: '小李',
          Creator:'小李',
          Test_result: '成功'
        },
        {
          Test_ID: '43',
          Test_time: '2022-07-15',
          Test_people: '小李',
          Creator:'小王',
          Test_result: '失败'
        }],
        dialogTableVisible1: false,

        Do:[{
            Do_ID:'1',
            Do_step:'打开',
            Do_hope:'成功',
            Do_real:''
        },
        {
            Do_ID:'2',
            Do_step:'关闭',
            Do_hope:'成功',
            Do_real:''
        }],

        dialogTableVisible2: false,
        dialogTableVisible3: false,
        input: '',

        Test_Case_Type: '',
        Priority: '',
        Applicable_Stage: '',
       Test_Case_Type2: '',
        Priority2: '',
        Applicable_Stage2: '',
        value7: '',

      //主页面-用例模块-表格
      tableData: [
        ],
      //搜索框
      input: '',
    
    }
  }
}
</script>
