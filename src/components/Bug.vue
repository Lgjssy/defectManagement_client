<template>


    <el-main style="padding:10px;margin:10px;height:100%" >
      <div style="display:flex">
        <h3 style="margin-left:10px;margin-top:10px;color:black">我的BUG</h3>
        <el-button type="primary" @click="dialogForm1Visible = true" style="margin-left:70%;margin-top:10px">+提BUG</el-button>
        <!--弹窗部分--> 
      <el-dialog title="新增Bug" :visible.sync="dialogForm1Visible" >
    
  <el-form :label-position="labelPosition" :model="form1" >
    <el-row >
      <el-col :span="12">
          <el-form-item label="Bug标题"  label-width="80px" >
            <el-input  placeholder="请输入bug标题" v-model="form1.name"></el-input>              
          </el-form-item>
      </el-col>
        <el-col :span="12">
          <el-form-item label=" 优先级" label-width="80px" style="margin:0 80px">
            <el-select v-model="form1.priority" placeholder="请选择优先级">
              <el-option label="1" value=1></el-option>
              <el-option label="2" value=2></el-option>
              <el-option label="3" value=3></el-option>
              <el-option label="4" value=4></el-option>
              <el-option label="5" value=5></el-option>
            </el-select>
          </el-form-item>
        </el-col>
    </el-row>

 <el-row >
      <el-col :span="12">
          <el-form-item label="相关模块"  label-width="80px"   >
            <el-input  placeholder="请输入内容" v-model="form1.modules" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>
      <el-col :span="12">
      <el-form-item label="bug状态" label-width="80px" style="margin:0 80px">
            <el-select v-model="form1.bug_status" placeholder="请选择状态">
              <el-option label="未确认" value="未确认"></el-option>
            
              <el-option label="未解决" value="未解决"></el-option>
              <el-option label="已解决" value="已解决"></el-option>
              <el-option label="已关闭" value="已关闭"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
  </el-row>

  <el-row >
      <el-col :span="12">
          <el-form-item label="相关任务"  label-width="80px">
            <el-input placeholder="请输入相关任务" v-model="form1.tasks" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>
      <el-col :span="12">
          <el-form-item label="严重程度" label-width="80px" style="margin:0 80px">
            <el-select v-model="form1.severity" placeholder="请选择严重程度">
              <el-option label="高" value="高"></el-option>
              <el-option label="较高" value="较高"></el-option>
              <el-option label="一般" value="一般"></el-option>
              <el-option label="较低" value="较低"></el-option>
              <el-option label="低" value="低"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
  </el-row>



  <el-row >
      <el-col :span="12">
          <el-form-item label="相关需求" label-width="80px">
            <el-input  placeholder="请输入相关需求" v-model="form1.requires" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>

      <el-col :span="12">
          <el-form-item label="操作系统" label-width="80px" style="margin:0 80px">
            <el-select v-model="form1.os" placeholder="请选择使用的操作系统">
              <el-option label="Windows" value="Windows"></el-option>
              <el-option label="Linux" value="Linux"></el-option>
              <el-option label="ios" value="ios"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
  </el-row>



 <el-row >
      

      <el-col :span="12">  
          <el-form-item label="受指派人" label-width="80px"   >
            <el-input placeholder="请输入受指派人的姓名" v-model="form1.assignee" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>

      <el-col :span="12">  
          <el-form-item label="负责人"  label-width="80px"   >
            <el-input placeholder="请输入负责人姓名" v-model="form1.charge" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>
  </el-row>

 <el-row >
      <el-col :span="12">
          <el-form-item label="创建日期" label-width="80px">
                <el-date-picker type="date" placeholder="选择日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
      </el-col>
      <el-col :span="12">
            <el-form-item label="截止日期" label-width="80px">
                <el-date-picker type="date" placeholder="选择日期" v-model="form1.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>  
      </el-col>         
</el-row>       
</el-form>
          <div slot="footer" class="dialog-footer" >
            <el-button @click="dialogForm1Visible = false">取 消</el-button>
            <el-button type="primary" @click="subform();dialogForm1Visible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>


      <div style="display:flex">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="指派给我" name="first"><div slot="label" @click="FindBugByPrincipal()">
             指派给我的
            </div></el-tab-pane>
          <el-tab-pane label="我创建的" name="second"><div slot="label" @click="FindBugByBuilder()">
             我创建的
            </div>  </el-tab-pane>
          <el-tab-pane label="我关闭的" name="third"><div slot="label" @click="FindBugByClose()">
             我关闭的
            </div>  </el-tab-pane>
          <el-tab-pane label="我完成的" name="fourth" > <div slot="label" @click="FindBugByFinish()">
             我完成的
            </div>     </el-tab-pane>
          <el-tab-pane  name="fifth" >
            <div slot="label" @click="FindAll()">
             全部
            </div>        
            </el-tab-pane>
        </el-tabs>
        <div style="margin-left:20px;margin-bottom:10px">
          <el-input
            placeholder="请输入内容"
            maxlength="10"
            size="small"
            v-model="input"
            clearable>
          </el-input>
        </div><el-button type="primary" style="margin: 0 10px;height: 32px;width: 70px;" @click="FindBugByName()">搜索</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;text-align: center"
        :default-sort = "{prop: 'Bug_Title', order: 'descending'}"
        >
        <el-table-column
          prop="Bug_Title"
          label="Bug标题"
          sortable
          width="170">
        </el-table-column>
       <el-table-column
          prop="Priority"
          label="优先级"
          sortable
          width="120">
          <template slot-scope="scope1">  
            <img :src="require('../assets/'+scope1.row.Priority+'.png')"
            style="height:25px;width:25px" 
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="Bug_Status"
          label="状态"
          sortable
          width="120">

            <template slot-scope="scope2">
            <img :src="require('../assets/'+scope2.row.Bug_Status+'.png')"
            style="height:25px;width:60px" 
            />
            </template>
        </el-table-column>
        <el-table-column
          prop="Creator"
          label="创建者"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="creat_time"
          label="创建日期"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="Bug_End_Date"
          label="结束日期"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="Assignee"
          label="指派人"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Severity"
          label="严重程度"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Operating_System"
          label="操作系统"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Related_Modules"
          label="相关模块"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Related_Tasks"
          label="相关任务"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Related_Needs"
          label="相关需求"
          width="100">
        </el-table-column>
        <el-table-column
          prop="Person_In_Charge"
          label="负责人"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="Operation"
          label="操作"
          fixed="right"
          width="240">
          <template slot-scope="scope">
            <el-button icon="el-icon-video-play" type="text" @click="open1(scope.row)" style="color:green;font-size:20px"></el-button>
          <el-button icon="el-icon-circle-close"  @click="open2(scope.row)" style="font-size:20px"  type="text"></el-button>
          <el-button icon="el-icon-s-opportunity"  @click="open3(scope.row)" style="font-size:20px" type="text"></el-button>
          <el-button icon="el-icon-s-custom"  @click="v4 = true" style="font-size:20px" type="text"></el-button>
          <el-dialog append-to-body="true" title="指派给他人" :visible.sync="v4" >
<el-form  :label-position="labelPosition" :model="form4">
               <el-form-item label="指派给" :label-width="form4LabelWidth">
      <el-select v-model="form4.sel" placeholder="请选择人员">
        <el-option label="小李" value="小李"></el-option>
        <el-option label="小王" value="小王"></el-option>
        <el-option label="小佟" value="小佟"></el-option>
        <el-option label="小闫" value="小闫"></el-option>
        <el-option label="小严" value="小严"></el-option>
        <el-option label="小袁" value="小刘"></el-option>
        <el-option label="小刘" value="小刘"></el-option>
      </el-select>
    </el-form-item></el-form><div slot="footer" class="dialog-footer" >
            <el-button @click="v4 = false">取 消</el-button>
           
            <el-button type="primary" @click="v4 = false;open4(scope.row)">确 定</el-button>
          </div></el-dialog>
          <el-button icon="el-icon-circle-check" @click="open5(scope.row)" style="font-size:20px" type="text"></el-button>

          
          <el-button   icon="el-icon-edit"  @click="dialogForm2Visible = true" style="font-size:20px" type="text"></el-button>
          


          <el-button @click="open7(scope.row)" icon="el-icon-delete"  style="color:red; font-size:20px" type="text"   ></el-button>
          </template>
        </el-table-column>
      </el-table>
          <el-dialog append-to-body="true" title="编辑Bug" :visible.sync="dialogForm2Visible" >
    
  <el-form :label-position="labelPosition2" :model="form2" >

  <el-row >
      <el-col :span="24">
          <el-form-item label=" 优先级" label-width="80px" style="margin:0 80px">
            <el-select v-model="form2.priority" placeholder="请选择优先级">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
</el-col></el-row>

 <el-row >
      <el-col :span="12">
          <el-form-item label="相关模块"  label-width="80px"   >
            <el-input  placeholder="请输入内容" v-model="form2.modules" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>
      <el-col :span="12">
      <el-form-item label="bug状态" label-width="80px" style="margin:0 80px">
            <el-select v-model="form2.bug_status" placeholder="请选择状态">
              <el-option label="未确认" value="未确认"></el-option>
              <el-option label="已确认" value="已确认"></el-option>
              <el-option label="未解决" value="未解决"></el-option>
              <el-option label="已解决" value="已解决"></el-option>
              <el-option label="已关闭" value="已关闭"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
  </el-row>

  <el-row >
      <el-col :span="12">
          <el-form-item label="相关任务"  label-width="80px">
            <el-input placeholder="请输入相关任务" v-model="form2.tasks" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>
      <el-col :span="12">
          <el-form-item label="严重程度" label-width="80px" style="margin:0 80px">
            <el-select v-model="form2.severity" placeholder="请选择严重程度">
              <el-option label="高" value="高"></el-option>
              <el-option label="较高" value="较高"></el-option>
              <el-option label="一般" value="一般"></el-option>
              <el-option label="较低" value="较低"></el-option>
              <el-option label="低" value="低"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
  </el-row>



  <el-row >
      <el-col :span="12">
          <el-form-item label="相关需求" label-width="80px">
            <el-input  placeholder="请输入相关需求" v-model="form2.requires" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>

      <el-col :span="12">
          <el-form-item label="操作系统" label-width="80px" style="margin:0 80px">
            <el-select v-model="form2.os" placeholder="请选择使用的操作系统">
              <el-option label="Windows" value="Windows"></el-option>
              <el-option label="Linux" value="Linux"></el-option>
              <el-option label="ios" value="ios"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
  </el-row>



 <el-row >
      <el-col :span="8">    
          <el-form-item label="创建人"  label-width="80px"  >
            <el-input placeholder="请输入创建人的姓名" v-model="form2.creator" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>

      <el-col :span="8">  
          <el-form-item label="受指派人" label-width="80px"   >
            <el-input placeholder="请输入受指派人的姓名" v-model="form2.assignee" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>

      <el-col :span="8">  
          <el-form-item label="负责人"  label-width="80px"   >
            <el-input placeholder="请输入负责人姓名" v-model="form2.charge" autocomplete="off"></el-input>              
          </el-form-item>
      </el-col>
  </el-row>

 <el-row >
      <el-col :span="12">
          <el-form-item label="创建日期" label-width="80px">
                <el-date-picker type="date" placeholder="选择日期" v-model="form2.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
      </el-col>
      <el-col :span="12">
            <el-form-item label="截止日期" label-width="80px">
                <el-date-picker type="date" placeholder="选择日期" v-model="form2.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>  
      </el-col>         
</el-row>       
</el-form>
          <div slot="footer" class="dialog-footer" >
            <el-button @click="dialogForm2Visible = false">取 消</el-button>
            <el-button type="primary" @click="subform2();dialogForm2Visible = false">确 定</el-button>
          </div>
        </el-dialog>

    </el-main>

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
import Login from './Login'
let id = 1000;
export default {
  methods: {
    //1号小按钮
     open1(e) {
        this.$confirm('此操作将使bug正式进入处理阶段, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success'
        }).then(() => {
          let BugData={
            Bug_Title:e.Bug_Title,
            Bug_Status:e.Bug_Status
          }
           let url1='http://localhost:8081/affirmBug';
        axios.post(url1,BugData).then(res=>{
          if(res.data==0){
            this.$message({
            type: 'success',
            message: '确认成功!'
          });
          }
          else if(res.data==2){
            this.$message({
            type: 'success',
            message: '无需重复确认！'
          });
          }
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消确认'
          });          
        });
      },
    
     //2号小按钮
     open2(e) {
        this.$confirm('此操作将关闭bug, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          let BugData={
            Bug_Title:e.Bug_Title,
            User_Name:"小李"
          }
           let url1='http://localhost:8081/closeBug';
        axios.post(url1,BugData).then(res=>{
          if(res.data==0){
            this.$message({
            type: 'success',
            message: '关闭成功!'
          });
          }
          else if(res.data==2){
            this.$message({
            type: 'success',
            message: '无需关闭确认！'
          });
          }
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },

           //3号小按钮
     open3(e) {
        this.$confirm('此操作将激活bug, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          let BugData={
            Bug_Title:e.Bug_Title,
            User_Name:"小李"
          }
           let url1='http://localhost:8081/activeBug';
        axios.post(url1,BugData).then(res=>{
          if(res.data==0){
            this.$message({
            type: 'success',
            message: '激活成功!'
          });
          }
          else if(res.data==2){
            this.$message({
            type: 'success',
            message: '已经处于激活状态！'
          });
          }
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
      open4(e1){
        let BugData={
            Bug_Title:"一个测试用例bug",
            Assignee:"小李",
            Person_In_Charge:this.form4.sel
          }
         // alert(e1.Bug_Title)
           let url1='http://localhost:8081/assigneeBug';
        axios.post(url1,BugData).then(res=>{
          if(res.data==0){
            this.$message({
            type: 'success',
            message: '指派成功!'
          });
          }
          else if(res.data==1){
            this.$message({
            type: 'success',
            message: '无需重复确认！'
          });
          }
        })
      },


     //5号小按钮
     open5(e) {
        this.$confirm('是否确定bug已完成?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success'
        }).then(() => {
          let BugData={
            Bug_Title:e.Bug_Title,
            User_Name:"小李"
          }
           let url1='http://localhost:8081/finishBug';
        axios.post(url1,BugData).then(res=>{
          if(res.data==0){
            this.$message({
            type: 'success',
            message: '已成功改变状态！'
          });
          }
          else if(res.data==2){
            this.$message({
            type: 'success',
            message: '已经处于解决状态！'
          });
          }
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },

      //7号小按钮
           open7(e) {
        this.$confirm('是否确认删除这条bug?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
         
          let BugData={
            Bug_Title:e.Bug_Title
          }
           let url1='http://localhost:8081/deleteBug';
        axios.post(url1,BugData).then(res=>{
           if(res.data==0){
            this.$message({
            type: 'success',
            message: '已完成该条删除'
          });
           }
           else if(res.data==1){
            this.$message({
            type: 'error',
            message: '该条数据已经删除，请刷新！'
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
    //主页面-bug模块-表格
    formatter(row, column) {
        return row.address;
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

    //模块选择树
    append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      FindAll(){
        let url1='http://localhost:8081/findBugAllNum';
        let n=0;
        axios.get(url1).then(res=>{
          n=res.data;
        }
        ) 
        let data2={
        }
        let url2='http://localhost:8081/findBugAll';
        axios.get(url2).then(res=>{
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
      FindBugByPrincipal(){
        let data2={
          User_Id:"小李"
        }
        let url1='http://localhost:8081/findBugNumByPrincipal';
        let n=0;
        axios.post(url1,data2).then(res=>{
          n=res.data;
        }
        ) 
        
        let url2='http://localhost:8081/findBugByPrincipal';
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
     
      FindBugByBuilder(){
        let data2={
          User_Id:"小李"
        }
        let url1='http://localhost:8081/findBugNumByBuilder2';
        let n=0;
        axios.post(url1,data2).then(res=>{
          n=res.data;
        }
        ) 
        
        let url2='http://localhost:8081/findBugByBuilder2';
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
       FindBugByClose(){
        let data2={
          User_Id:"小李"
        }
        let url1='http://localhost:8081/findBugNumByClose1';
        let n=0;
        axios.post(url1,data2).then(res=>{
          n=res.data;
        }
        ) 
        
        let url2='http://localhost:8081/findBugByClose1';
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
       FindBugByFinish(){
        let data2={
          User_Id:"小李"
        }
        let url1='http://localhost:8081/findBugNumByFinish1';
        let n=0;
        axios.post(url1,data2).then(res=>{
          n=res.data;
        }
        ) 
        
        let url2='http://localhost:8081/findBugByFinish1';
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
      FindBugByName(){
        let data2={
          Bug_Title:this.input
        }
        let url2='http://localhost:8081/findBugNumByName';
        let n=0;
        axios.post(url2,data2).then(res=>{
          n=res.data;
        }
        ) 
        let url1='http://localhost:8081/findBugByName';
        
        axios.post(url1,data2).then(res=>{
          this.tableData=[
        
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
      InsertBug(){
        let data={
           Bug_Title: this.form1.name,
          Priority: this.form1.priority,
          Bug_Status:this.form1.bug_status,
          Creator:"小李",
          Bug_Create_Date:this.form1.date1,
          Bug_End_Date:this.form1.date2,
          Assignee:this.form1.assignee,
          Severity:this.form1.severity,
          Operating_System:this.form1.os,
          Related_Modules:this.form1.modules,
          Related_Tasks:this.form1.tasks,
          Related_Needs:this.form1.requires,
          Person_In_Charge:this.form1.charge,
        }
        if (!this.form1.name) {
        this.$message.error("请输入bug名！");
        return;
      } else if (!this.form1.priority) {
        this.$message.error("请输入优先级！");
        return;
      }else if (!form1.bug_status) {
        this.$message.error("请输入状态！");
        return;
      }else if (!this.form1.severity) {
        this.$message.error("请输入严重程度！");
        return;
      }else if (!this.form1.modules) {
        this.$message.error("请输入相关模块！");
        return;
      }else if (!this.form1.charge) {
        this.$message.error("请输入负责人！");
        return;
      }else{
        let url1='http://localhost:8081/addBug';
        axios.post(url1,data).then(res=>{
          if(res.data==0)
          alert("插入成功！");
          else
          alert("模块名已经存在！")
        })
      }
        
      },
//提bug到表单中
subform(){
  let data={
           Bug_Title: this.form1.name,
          Priority: this.form1.priority,
          Bug_Status:this.form1.bug_status,
          Creator:"小李",
          Bug_Create_Date:this.form1.date1,
          Bug_End_Date:this.form1.date2,
          Assignee:this.form1.assignee,
          Severity:this.form1.severity,
          Operating_System:this.form1.os,
          Related_Modules:this.form1.modules,
          Related_Tasks:this.form1.tasks,
          Related_Needs:this.form1.requires,
          Person_In_Charge:this.form1.charge,
        }
       if (!this.form1.name) {
        this.$message.error("请输入bug名！");
        return;
      } else if (!this.form1.priority) {
        this.$message.error("请输入优先级！");
        return;
      }else if (!this.form1.bug_status) {
        this.$message.error("请输入状态！");
        return;
      }else if (!this.form1.severity) {
        this.$message.error("请输入严重程度！");
        return;
      }else if (!this.form1.modules) {
        this.$message.error("请输入相关模块！");
        return;
      }else if (!this.form1.charge) {
        this.$message.error("请输入负责人！");
        return;
      }else{
        let url1='http://localhost:8081/addBug';
        axios.post(url1,data).then(res=>{
          if(res.data==0)
          alert("插入成功！");
          else if(res.data==1)
          alert("模块名已经存在！")
        })
      }
      this.tableData.push(
        {
          Bug_Title: this.form1.name,
          Priority: this.form1.priority,
          Bug_Status:this.form1.bug_status,
          Creator:"小李",
          creat_time:this.form1.date1,
          Bug_End_Date:this.form1.date2,
          Assignee:this.form1.assignee,
          Severity:this.form1.severity,
          Operating_System:this.form1.os,
          Related_Modules:this.form1.modules,
          Related_Tasks:this.form1.tasks,
          Related_Needs:this.form1.requires,
          Person_In_Charge:this.form1.charge,
        });



},
subform2(){
      this.tableData.push(
        {

          Priority: this.form2.priority,
          Bug_Status:this.form2.bug_status,
          Creator:this.form2.creator,
          creat_time:this.form2.date1,
          Bug_End_Date:this.form2.date2,
          Assignee:this.form2.assignee,
          Severity:this.form2.severity,
          Operating_System:this.form2.os,
          Related_Modules:this.form2.modules,
          Related_Tasks:this.form2.tasks,
          Related_Needs:this.form2.requires,
          Person_In_Charge:this.form2.charge,
        });
},



//bug删除方法
deletebug(node,data){
  this.splice(scope.$index);
}
,

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
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
      //主页面-bug模块-标签页选择
      handleClick(tab, event) {
        console.log(tab, event);
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

      v4:false,
      form4:{
        sel:'',
        name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
  form4LabelWidth:'120px',





      user: {
        username: "",
        password: ""
      }  ,
  
      labelPosition: 'right',
      form1: {
          name: '',
          priority: '',
          bug_status:'',
          creator:'',
          date1: '',
          date2: '',
          assignee:'',
          severity:'',
          os:'',
          modules:'',
          tasks:'',
          requires:'',
          charge:'',
          type:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

        labelPosition2: 'right',
         form2: {

          priority: '',
          bug_status:'',
          creator:'',
          date1: '',
          date2: '',
          assignee:'',
          severity:'',
          os:'',
          modules:'',
          tasks:'',
          requires:'',
          charge:'',
          type:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //弹窗默认关闭
        dialogForm1Visible:false,
        dialogForm2Visible:false,
      

      //主页面-bug模块-表格
      tableData: [
        ],
      //主页面-bug模块-搜索框
      input: '',
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
  }
}
</script>