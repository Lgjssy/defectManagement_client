<template>

    <el-container style="background-color: #e5f2ff;height: 100%;margin: 0px;">
      <el-main style="padding: 10px; margin: 10px; height: 100%">
        <div style="display: flex">
          <h3 style="margin-left: 10px; margin-top: 10px; color: black">
            测试计划
          </h3>
          <el-button
            type="primary"
            style="margin-left: 70%; margin-top: 10px"
            @click="submitPlanButton(); "
            >+提交测试</el-button
          >
        </div>
<!--提交测试弹框---------------------------------------------------------------------------------------------------------->
        <el-dialog :title="titleType + '计划'" :visible.sync="submitPlanDialogVisible" width="80%">
          <el-form   v-model="submitPlanForm" label-width="100px">
              <el-form-item label="id">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-input  v-model="submitPlanForm.id" :disabled="idEditable"></el-input>
                  </el-col>
                  <el-col class="line" :span="4">-</el-col> 
                  <el-col class="line" :span="2"><label>风险程度</label></el-col>
                  <el-col :span="8"> 
                    <el-select v-model="submitPlanForm.risk" placeholder="请选择风险程度">
                      <el-option 
                        v-for="risk in risks"
                        :key="risk.value"
                        :value="risk.value"
                        :label="risk.label"
                      ></el-option>
                    </el-select>                 
                  </el-col>
                </el-row>
              </el-form-item> 
              <el-form-item label="名称">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-input  v-model="submitPlanForm.name"></el-input>
                  </el-col>
                  <el-col class="line" :span="4">-</el-col> 
                  <el-col class="line" :span="2"><label>所属模块</label></el-col>
                  <el-col :span="8"> 
                    <el-select v-model="submitPlanForm.project" placeholder="请选择">
                      <el-option 
                        v-for="project in projects"
                        :key="project.value"
                        :value="project.value"
                        :label="project.label"
                      ></el-option>
                    </el-select>                 
                  </el-col>
                </el-row>
              </el-form-item> 
              <!-- <el-form-item label="所属项目">
                  <el-select v-model="submitPlanForm.project" placeholder="请选择">
                  <el-option 
                    v-for="project in projects"
                    :key="project.value"
                    :value="project.value"
                    :label="project.label"
                  ></el-option>
                  </el-select>
              </el-form-item> -->
              <el-form-item label="项目负责人"> 
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-input  v-model="submitPlanForm.people"></el-input>
                  </el-col>
                  <el-col class="line" :span="4">-</el-col>
                  <el-col :span="2">
                    <label>优先级</label>
                  </el-col>
                  <el-col :span="8">                   
                    <el-select label="优先级" v-model="submitPlanForm.Priority" placeholder="请选择">
                      <el-option 
                        v-for="Pri in Priority"
                        :key="Pri.value"
                        :value="Pri.value"
                        :label="Pri.label"
                      ></el-option>
                    </el-select>  
                  </el-col>
                </el-row>
              </el-form-item> 
              <el-form-item label="开始日期">
                <el-row :gutter="20">
                  <el-col :span="6">
                  <el-date-picker type="date" placeholder="选择开始日期" v-model="submitPlanForm.StartDate" width="60%"></el-date-picker>
                    </el-col>
                  <el-col class="line" :span="4">-</el-col>
                  <el-col :span="2">
                    <label>结束日期</label>
                  </el-col >
                  <el-col :span="8">
                    <el-date-picker type="date" placeholder="选择结束日期" v-model="submitPlanForm.EndDate" width="60%"></el-date-picker>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item :gutter="20" label="状态">
                <el-row :gutter="20">

                  <el-col :span="6">
                    
                    <el-select  v-model="submitPlanForm.status" placeholder="请选择">
                      <el-option 
                        v-for="sta in status"
                        :key="sta.value"
                        :value="sta.value"
                        :label="sta.label"
                      ></el-option>
                    </el-select>  
                  </el-col>
                   <el-col class="line" :span="3">-</el-col>
                  <el-col :span="3">
                    <label>人力资源分配</label>
                  </el-col >
                  <el-col :span="8">
                    <el-select  v-model="submitPlanForm.Human_resource_allocation" placeholder="请选择">
                      <el-option 
                        v-for="hra in Human_resource_allocation"
                        :key="hra.value"
                        :value="hra.value"
                        :label="hra.label"
                      ></el-option>
                    </el-select> 
                  </el-col>
                </el-row>          
              </el-form-item>
              <!-- <el-form-item label="名称">
                <el-input  v-model="submitPlanForm.name"></el-input>
              </el-form-item> -->
              <el-form-item label="描述">
                <el-input
                  :rows="9"
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="submitPlanForm.description"
                  maxlength="100"
                  show-word-limit
                >
                </el-input>
              </el-form-item>
              <el-form-item label="抄送给">
                  <el-select v-model="submitPlanForm.handler" placeholder="请选择">
                  <el-option 
                    v-for="han in handler"
                    :key="han.value"
                    :value="han.value"
                    :label="han.label"
                  ></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item>
                <el-row :gutter="20">
                  <el-col :span="3">
                    <el-button type="primary" @click="onSubmit" size="large">保存</el-button>
                  </el-col>
                  <el-col :span="10">
                    <el-button @click="submitPlanDialogVisible = false"  size="large">取消</el-button>
                  </el-col>
                </el-row>
              </el-form-item> 
          </el-form> 
        </el-dialog>
<!---------------------------------------------------------------------------------------------------------->

        <div style="display: flex">
          <div style="margin-left: 20px; margin-bottom: 10px;display:flex;">
            <el-input
              placeholder="请输入内容"
              maxlength="10"
              size="small"
              v-model="input_search"
              clearable
            >
            </el-input><el-button type="primary" style="margin: 0 10px;height: 32px;width: 70px;" @click="FindAllPlan()">搜索</el-button>
          </div>
        </div>
        <el-table
          :data="PlanData"
          style="width: 100%; text-align: center"
          :default-sort="{ prop: 'Test_Plan_Id', order: 'descending' }"
        >
          <el-table-column prop="Test_Plan_Id" label="ID" sortable width="80">
          </el-table-column>
                    <el-table-column prop="Priority" label="优先级" width="100" sortable>
            <template slot-scope="scope1">  
            <img :src="require('../assets/'+scope1.row.Priority+'.png')"
            style="height:25px;width:25px" 
            />
            </template>
            <!--scope2.row.State未进行已完成进行中-->
          </el-table-column>
            <el-table-column prop="State" label="状态" width="100" sortable>
            <template slot-scope="scope2">
            <img :src="require('../assets/'+scope2.row.State+'.png')"
            style="height:30px;width:72px" 
            />
            
            </template> 
          </el-table-column>
          <el-table-column prop="Test_Plan_Name" label="名称" sortablewidth="110">
          </el-table-column>
          <el-table-column prop="Owning_module" label="所属模块" sortable width="100">
          </el-table-column>
          <el-table-column prop="Human_resource_allocation" label="人力资源分配" sortable width="180">
          </el-table-column>
          <el-table-column prop="Start_Date" label="开始日期" sortable width="180" >
          </el-table-column>
          <el-table-column prop="End_Date"  label="结束日期" sortable width="180" >
          </el-table-column>
        

          <el-table-column prop="Description" label="描述" width="100" sortable>
          </el-table-column>
          <el-table-column prop="Test_risk" label="测试风险" width="100">
          </el-table-column>
          <el-table-column prop="Operation" label="操作" fixed="right" width="240">
<!---------------------------------------------------------------------------------------------------------->
            <router-link to="/Plan/select"><!-- 查看包含的用例 -->
              <el-button
                icon="el-icon-folder-opened"
                type="text"
                style="font-size:21px"
                @click="jumpToUseCase"
              ></el-button>
            </router-link>
<!----------- ----------------------------------------------------------------------------------------------->
            <template><el-button  
              icon="el-icon-notebook-2"
              style="font-size: 20px"
              type="text"
              @click="situationButton()"
            ></el-button></template> <!--查看概况-->

            <el-button
              icon="el-icon-edit-outline"
              style="font-size: 20px"
              type="text"
              @click="idEditable = false;submitPlanDialogVisible = true"
            ></el-button><!--修改计划-->
            
<!---------------------------------------------------------------------------------------------------------->            
          </el-table-column>
        </el-table>
        <!-----------------弹窗-概况-------------------------->
        <el-dialog title="概况" :visible.sync="situationDialogVisible" width="80%">
          <el-container height="800px" >
            <el-container> 
            <el-header height="200px" style="margin:5px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
              <label style="margin-top:4px;color:black;font-size:18px">描述</label>
              <div>{{word_description_situationDialog}}</div>
            </el-header>
                  
            <el-main height="200px" style="margin:5px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
              <label style="color:black;font-size:18px">历史记录</label>
              <div>{{word_historyRecord_situationDialog}}</div>
            </el-main>
            </el-container> 
            <el-aside height="600px" style="margin:5px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" width="200px">
              <label style="margin-top:4px;color:black;font-size:18px">基本信息</label>
              <div v-for="basicInformation in word_basicInformation_situationDialog" :key="basicInformation.label">{{basicInformation.label}}:{{basicInformation.value}}</div>
            </el-aside>
            
          </el-container>
          <el-button type="info" @click="Start">开始</el-button>
          <el-button type="info" @click="Save">保存</el-button>
          <el-button type="info" @click="situationDialogVisible = false">关闭</el-button>
          <el-button type="info" @click="Acivate">激活</el-button>
        </el-dialog>
<!---------------------------------------------------------------------------------------------------------->

      </el-main>
    </el-container>

</template>

<style>
.test {
  border: 1px solid #eaff00;
}

.el-main {
  background-color: white;
  color: #d3dce6;
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
import axios from 'axios'
export default {
  methods: {
     FindAllPlan(){
       let data3={
        Test_Plan_Name:this.input_search
       }
       let url1='http://localhost:8081/findTPNumByName';
        let n=0;
         axios.post(url1,data3).then(res=>{
         //alert(res.data);
          n=res.data;
         }
         ) 
        let url2='http://localhost:8081/findTPByName';
         axios.post(url2,data3).then(res=>{
           this.PlanData=[
         
         ]
           while(n-1>=0){
            
             this.PlanData.push(
         { 
           Test_Plan_Id:res.data[n-1][0],
           Test_Plan_Name:res.data[n-1][1],
           Owning_module:res.data[n-1][8],
           Human_resource_allocation:res.data[n-1][2],
           Start_Date:res.data[n-1][4],
          End_Date:res.data[n-1][5],
           State:res.data[n-1][6],
           Priority:res.data[n-1][7],
           Description:res.data[n-1][10],
           Test_risk:res.data[n-1][9],
         });
         n=n-1;
          }
            
        
         }
         ) 
    },
    submitPlanButton(){
      
      
      this.titleType = "提交";
      this.idEditable = false;
      this.submitPlanDialogVisible = true;
    },
    situationButton(){
      this.titleType = "修改";
      this.idEditable = true;
      this.situationDialogVisible = true
    },
    //行按钮-概况
    situation(row, column){
      //word_basicInformation_situationDialog[0][label]
      situationDialogVisible = true
    },
    //对话框：概况——底部按钮
    Acivate(){},
    Save(){},
    Start(){},

    jumpToUseCase(){
      this.$router.push('/Plan/select')
    },
    updateInput(e) {
      this.$forceUpdate();
    },
    //提交测试计划
    submitTest(){},

    //链接测试计划与用例
    associate(){},
    onSubmit(){
      let PlanData={
          Test_risk:this.submitPlanForm.risk,
          Test_Plan_Name:this.submitPlanForm.name,
          Owning_module:this.submitPlanForm.project,
          principal:this.submitPlanForm.people,
          Human_resource_allocation:this.submitPlanForm.Human_resource_allocation,
          Start_Date:this.submitPlanForm.StartDate,
          End_Date:this.submitPlanForm.EndDate,
          State:this.submitPlanForm.status,
          Priority:this.submitPlanForm.Priority,
          Description:this.submitPlanForm.description,
      }
      if (!this.submitPlanForm.risk) {
        this.$message.error("请输入风险等级");
        return;
      } else if (!this.submitPlanForm.name) {
        this.$message.error("请输入名称");
        return;
      }else if (!this.submitPlanForm.status) {
        this.$message.error("请输入状态！");
        return;
      }else if (!this.submitPlanForm.Human_resource_allocation) {
        this.$message.error("请输入人员分配！");
        return;
      }else if (!this.submitPlanForm.Priority) {
        this.$message.error("请输入优先级！");
        return;
      }else if (!this.submitPlanForm.project) {
        this.$message.error("请输入所属模块！");
        return;
      }else{
        let url1='http://localhost:8081/insertTP';
        axios.post(url1,PlanData).then(res=>{
          if(res.data==0)
          this.$message({
            type: 'success',
            message: '已成功插入'
          });
          else if(res.data==1)
          this.$message({
            type: 'error',
            message: '已经存在！'
          });
        })}
     
      this.submitPlanDialogVisible = false;
    }
  },
  data() {

    return {
      //“提交计划”弹窗标题
      idEditable: false,
      titleType:'卡其脱离太',
      //主表格初值
      form: {
        Test_Plan_Id: "1",
        Test_Plan_Name: "1",
        Owning_module: "1",
        Human_resource_allocation: "1",
        Start_Date: "1",
        End_Date: "1",
        State: "1",
        Priority: "1",
        Description: "1",
        Test_risk: "1",
      },

      //主表格数据
      PlanData: [
        
      ],
      input_search:'',
       //对话框：概况
        word_description_situationDialog:"系统测试",//描述
        word_basicInformation_situationDialog:[//基本信息
          {label:'所属模块', value:'系统模块'},
          {label:'负责人', value:'小李'},
          {label:'开始日期', value:'2022-07-15'},
          {label:'结束日期', value:'2022-07-15'},
          {label:'人力资源分配', value:'2'},
          {label:'状态', value:'未完成'},
          {label:'优先级', value:'2'},
          {label:'抄送给', value:'小佟'},
        ],
        word_historyRecord_situationDialog:[{//历史记录

        }],
        situationDialogVisible:false,//
        //表单：增加计划
        titleType:'',
        projects:[//所属模块

          {value:'系统模块',label:'系统模块'},
          {value:'页面模块',label:'页面模块'}
        ],
         risks:[//严重程度 

          {label:'最高严重程度', value:'1'},
          {label:'严重程度二', value:'2'},
          {label:'严重程度三', value:'3'},
          {label:'最低严重程度', value:'4'}
        ],
        Priority:[//优先级 

          {label:'最高优先级', value:'1'},
          {label:'优先级二', value:'2'},
          {label:'优先级三', value:'3'},
          {label:'最低优先级', value:'4'}
        ],
        status:[//状态
          {value:'未开始',label:'未开始'},
          {value:'已开始',label:'已开始'}
        ],
        Human_resource_allocation:[//人力资源分配
          {value:'1到2人',label:'1到2人'},
          {value:'2到3人',label:'2到3人'},
          {value:'3到4人',label:'3到4人'}
        ],
        handler:[//项目负责人
          {value:'han1',label:'小李'},
          {value:'han2',label:'小王'},
          {value:'han3',label:'小闫'}
        ],
        submitPlanDialogVisible:false,
        submitPlanForm: {
          id:'',
          risk:'',
          project: '',
          Priority: '',
          StartDate: '',
          EndDate: '',
          status:'',
          Human_resource_allocation:'',
          name:'',
          handler:'',
          description:''
        },

    };
  },
};
</script>