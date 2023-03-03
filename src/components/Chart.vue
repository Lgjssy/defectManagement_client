<template>
        <el-main style="padding:10px;margin:10px;height:100%">
        <div style="position:absolute;left: 20px;top:138px;background-color: white;width: 299px;height:600px ;z-index:99;">
        <h3 style="position: relative;left: 40px;color: black;">请选择报表类型</h3>
          <template>
            <el-checkbox-group v-model="checkedCharts" @change="selectedbox">
            <el-checkbox label="1:chart1" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">按项目统计bug数</el-checkbox>
            <el-checkbox label="2:chart2" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">按模块统计bug数</el-checkbox>
            <el-checkbox label="3:chart3" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">每天新增的bug数</el-checkbox>
            <el-checkbox label="4:chart4" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">每日关闭bug数</el-checkbox>
            <el-checkbox label="5:chart5" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">每人创建bug数</el-checkbox>
            <el-checkbox label="6:chart6" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">每人完成bug数</el-checkbox>
            <el-checkbox label="7:chart7" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">按bug类型统计bug数</el-checkbox>
            <el-checkbox label="8:chart8" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">按紧急程度统计bug数</el-checkbox>
            <el-checkbox label="9:chart9" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">按优先级统计bug数</el-checkbox>
            <el-checkbox label="0:chart10" style="display: block;padding-top: 10px;position: relative;left: 35px;color: lightskyblue;">按状态统计bug数</el-checkbox>
          </el-checkbox-group>
        </template>
        <el-button type="primary" size="medium" @click="ChartManage" style="margin-left:70px;margin-top:20px;">生成报表</el-button>
        </div>
      <div style="position:absolute;left:350px;top:138px;width:1150px;height:105px;background-color: white;z-index: 99;">
      <div style="display:flex">
        <div style="position: absolute;left:10px;top:12px">
          <el-input 
            placeholder="请输入内容"
            maxlength="10"
            size="medium"
            v-model="search"
            clearable>
          </el-input> 
        </div>
        <el-button type="primary" size="medium" style="position: absolute;left: 240px;top:12px ">+筛选</el-button>
        <el-button type="primary" size="medium" icon="el-icon-search"  style="position: absolute;left: 315px;top:11.5px">搜索</el-button>
      </div>
      <div style="display:flex">
        <el-button ref="btn" type="primary" @click="Namechange" style="position: absolute;left:10px;top:50px;color:white" v-show="btn1">饼状图</el-button>
        <el-button ref="btn" type="primary" @click="Namechange" style="position: absolute;left:0px;top:50px;color:white" v-show="btn2">柱状图</el-button>
        <p style="position: absolute;left:10px;top:80px;color:lightgray;font-size: 12px;">注：统计报表的数据来源于列表页面的检索结果，生成统计报表前请先在列表页面进行检索。比如列表页面我们检索的是未关闭Bug，那么报表就是基于之前检索的未关闭Bug的结果集进行统计</p>
      </div>
      </div>
      <div v-show="one || eleven" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData1"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example1" v-show="one"></div>
    <div id="chart_example11" v-show="eleven"></div>

    <div v-show="two || twelve" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData2"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example2" v-show="two"></div>
    <div id="chart_example12" v-show="twelve"></div>

    <div v-show="three || thirteen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData3"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example3" v-show="three"></div>
    <div id="chart_example13" v-show="thirteen"></div>

    <div v-show="four || fourteen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData4"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example4" v-show="four"></div>
    <div id="chart_example14" v-show="fourteen"></div>

    <div v-show="five || fifteen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData5"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example5" v-show="five"></div>
    <div id="chart_example15" v-show="fifteen"></div>

    <div v-show="six || sixteen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData6"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example6" v-show="six"></div>
    <div id="chart_example16" v-show="sixteen"></div>
    
    <div v-show="seven || seventeen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData7"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example7" v-show="seven"></div>
    <div id="chart_example17" v-show="seventeen"></div>

    <div v-show="eight || eighteen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData8"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example8" v-show="eight"></div>
    <div id="chart_example18" v-show="eighteen"></div>

    <div v-show="nine || ninteen" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData9"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example9" v-show="nine"></div>
    <div id="chart_example19" v-show="ninteen"></div>

    <div v-show="ten || twenty" style="margin-left:750px;margin-top: 80px;float: left;"><el-table
      :data="tableData10"
      style="width: 100%"
      max-height="300">
      <el-table-column
        prop="name"
        label="条目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="value"
        label="值">
      </el-table-column>
    </el-table></div>
    <div id="chart_example10" v-show="ten"></div>
    <div id="chart_example20" v-show="twenty"></div>
    </el-main>

</template>
<style>
  .el-main {
    background-color: white;
    color: #D3DCE6;
  }
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example1{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
 #chart_example2{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example3{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example4{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example5{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example6{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example7{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example8{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example9{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example10{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example11{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example12{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example13{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example14{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example15{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example16{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example17{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example18{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example19{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
  #chart_example20{
    width: 550px;
    height: 300px;
    background-color: transparent;
    margin-top: 90px;
    position: relative;
    left: 50px;
  }
</style>
 
<script>
  import * as echarts from 'echarts'
  const chartOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data()  {
      return {
        checkedCharts:[],
        values:[],
        labels:[],
        one:0,
        two:0,
        three:0,
        four:0,
        five:0,
        six:0,
        seven:0,
        eight:0,
        nine:0,
        ten:0,
        eleven:0,
        twelve:0,
        thirteen:0,
        fourteen:0,
        fifteen:0,
        sixteen:0,
        seventeen:0,
        eighteen:0,
        ninteen:0,
        twenty:0,
        btn1:1,
        btn2:0,
        btnText:'饼状图',
        checkAll: false,
        checkedCharts: [],
        charts: chartOptions,
        isIndeterminate: true,
        tableData1:[
          { value: 9, name: '系统测试' },
          { value: 12, name: '页面测试' },
          { value: 1, name: '程序测试' },
          { value: 8, name: '缺陷测试' }
        ],
        tableData2:[
          { value: 2, name: '系统部分循环测试' },
          { value: 0, name: '系统高压测试' },
          { value: 3, name: '系统循环测试' },
          { value: 9, name: '页面显示测试' },
          { value: 13, name: '系统全管理' },
          { value: 15, name: '程序循环测试' },
          { value: 7, name: '程序高压测试' },
          { value: 24, name: '程序安全测试' },
          { value: 5, name: '系统管理' },
          { value: 3, name: '页面安全测试' },
        ],
        tableData3:[
          { value: 20, name: '2022-7-1' },
          { value: 34, name: '2022-7-2' },
          { value: 15, name: '2022-7-3' },
          { value: 12, name: '2022-7-4' },
          { value: 26, name: '2022-7-5' },
        ],
        tableData4:[
          { value: 20, name: '2022-6-22' },
          { value: 34, name: '2022-6-23' },
          { value: 15, name: '2022-6-24' },
          { value: 12, name: '2022-6-25' },
          { value: 26, name: '2022-6-26' },
        ],
        tableData5:[
          { value: 1, name: '大萨达' },
          { value: 6, name: '小刘' },
          { value: 2, name: '测试员甲' },
          { value: 1, name: '小金' },
          { value: 1, name: '测试员丙' },
          { value: 8, name: '小李' },
          { value: 2, name: '小王' },
          { value: 3, name: '小闫' },
          { value: 1, name: '小胡' },
          { value: 3, name: '小佟' },
          { value: 1, name: '小严' },
        ],
        tableData6:[
          { value: 1, name: '项目经理' },
          { value: 4, name: '小周' },
          { value: 5, name: '测试员甲' },
          { value: 5, name: '小金' },
          { value: 8, name: '小李' },
          { value: 10, name: '小王' },
          { value: 4, name: '小闫' },
          { value: 3, name: '小佟' },
        ],
        tableData7:[
          { value: 8, name: '页面bug' },
          { value: 3, name: '系统bug' },
          { value: 3, name: '数据bug' },
          { value: 6, name: '测试' },
          { value: 1, name: '单元测试' },
          { value: 1, name: '简单' },
          { value: 6, name: '显示bug' },
        ],
        tableData8:[
          { value: 10, name: '高' },
          { value: 12, name: '中' },
          { value: 9, name: '低' },
        ],
        tableData9:[
          { value: 2, name: '优先级1' },
          { value: 10, name: '优先级2' },
          { value: 8, name: '优先级3' },
          { value: 3, name: '优先级4' },
          { value: 6, name: '优先级5' },
        ],
         tableData10:[
           { value: 14, name: '未确认' },
              { value: 6, name: '已解决' },
              { value: 9, name: '已确认' },
        ],
      }
    },
    mounted() {
      //let this_ = this;
      let myChart1 = echarts.init(document.getElementById('chart_example1'));
      let myChart2 = echarts.init(document.getElementById('chart_example2'));
      let myChart3 = echarts.init(document.getElementById('chart_example3'));
      let myChart4 = echarts.init(document.getElementById('chart_example4'));
      let myChart5 = echarts.init(document.getElementById('chart_example5'));
      let myChart6 = echarts.init(document.getElementById('chart_example6'));
      let myChart7 = echarts.init(document.getElementById('chart_example7'));
      let myChart8 = echarts.init(document.getElementById('chart_example8'));
      let myChart9 = echarts.init(document.getElementById('chart_example9'));
      let myChart10 = echarts.init(document.getElementById('chart_example10'));
      let myChart11 = echarts.init(document.getElementById('chart_example11'));
      let myChart12 = echarts.init(document.getElementById('chart_example12'));
      let myChart13 = echarts.init(document.getElementById('chart_example13'));
      let myChart14 = echarts.init(document.getElementById('chart_example14'));
      let myChart15 = echarts.init(document.getElementById('chart_example15'));
      let myChart16 = echarts.init(document.getElementById('chart_example16'));
      let myChart17 = echarts.init(document.getElementById('chart_example17'));
      let myChart18 = echarts.init(document.getElementById('chart_example18'));
      let myChart19 = echarts.init(document.getElementById('chart_example19'));
      let myChart20 = echarts.init(document.getElementById('chart_example20'));

      let option1 = {
              title: {
          text: '按项目统计bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 9, name: '系统测试' },
              { value: 12, name: '页面测试' },
              { value: 1, name: '程序测试' },
              { value: 8, name: '缺陷测试' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option2 = {
              title: {
          text: '按模块统计bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                 { value: 2, name: '系统部分循环测试' },
                  { value: 0, name: '系统高压测试' },
                  { value: 3, name: '系统循环测试' },
                  { value: 9, name: '页面显示测试' },
                  { value: 13, name: '系统全管理' },
                  { value: 15, name: '程序循环测试' },
                  { value: 7, name: '程序高压测试' },
                  { value: 24, name: '程序安全测试' },
                  { value: 5, name: '系统管理' },
                  { value: 3, name: '页面安全测试' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option3 = {
              title: {
          text: '每天新增的bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 20, name: '2022-7-1' },
                { value: 34, name: '2022-7-2' },
                { value: 15, name: '2022-7-3' },
                { value: 12, name: '2022-7-4' },
                { value: 26, name: '2022-7-5' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option4 = {
              title: {
          text: '每日关闭bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value:23 , name: '2022-6-22' },
                { value:25, name: '2022-6-23' },
                { value: 34, name: '2022-6-24' },
                { value: 27, name: '2022-6-25' },
                { value:14 , name: '2022-6-26' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option5 = {
              title: {
          text: '每人创建bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
               { value: 1, name: '大萨达' },
                { value: 6, name: '小刘' },
                { value: 2, name: '测试员甲' },
                { value: 1, name: '小金' },
                { value: 1, name: '测试员丙' },
                { value: 8, name: '小李' },
                { value: 2, name: '小王' },
                { value: 3, name: '小闫' },
                { value: 1, name: '小胡' },
                { value: 3, name: '小佟' },
                { value: 1, name: '小严' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option6 = {
              title: {
          text: '每人完成bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                  { value: 1, name: '项目经理' },
                { value: 4, name: '小周' },
                { value: 5, name: '测试员甲' },
                { value: 5, name: '小金' },
                { value: 8, name: '小李' },
                { value: 10, name: '小王' },
                { value: 4, name: '小闫' },
                { value: 3, name: '小佟' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option7 = {
              title: {
          text: '按bug类型统计bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                  { value: 8, name: '页面bug' },
                  { value: 3, name: '系统bug' },
                  { value: 3, name: '数据bug' },
                  { value: 6, name: '测试' },
                  { value: 1, name: '单元测试' },
                  { value: 1, name: '简单' },
                  { value: 6, name: '显示bug' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option8 = {
              title: {
          text: '按紧急程度统计bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 10, name: '高' },
          { value: 12, name: '中' },
          { value: 9, name: '低' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option9 = {
              title: {
          text: '按优先级统计bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 2, name: '优先级1' },
                { value: 10, name: '优先级2' },
                { value: 8, name: '优先级3' },
                { value: 3, name: '优先级4' },
                { value: 6, name: '优先级5' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option10 = {
              title: {
          text: '按状态统计bug数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 14, name: '未确认' },
              { value: 6, name: '已解决' },
              { value: 9, name: '已确认' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      let option11 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
               itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option12 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统部分循环测试', '系统高压测试', '系统循环测试', '页面显示测试','系统全管理','程序循环测试','程序高压测试','程序安全测试','系统管理','页面安全测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [2,0,3,9,13,15,7,24,5,3],
              type: 'bar'
            }
          ]
      };

      let option13 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
            
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option14 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option15 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option16 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option17 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option18 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option19 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };

      let option20 = {
          xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0,
                rotate:-30
              },
            data: ['系统测试', '页面测试', '程序测试', '缺陷测试']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              itemStyle:{
                normal:{
                  color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622','#4ad2ff','#61a0a8'];
                            return colorList[params.dataIndex];
                        }
                }
              },
              data: [9,12,1,8],
              type: 'bar'
            }
          ]
      };
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option4);
      myChart5.setOption(option5);
      myChart6.setOption(option6);
      myChart7.setOption(option7);
      myChart8.setOption(option8);
      myChart9.setOption(option9);
      myChart10.setOption(option10);
      myChart11.setOption(option11);
      myChart12.setOption(option12);
      myChart13.setOption(option13);
      myChart14.setOption(option14);
      myChart15.setOption(option15);
      myChart16.setOption(option16);
      myChart17.setOption(option17);
      myChart18.setOption(option18);
      myChart19.setOption(option19);
      myChart20.setOption(option20);

      window.addEventListener('resize',function() {myChart1.resize()});
      window.addEventListener('resize',function() {myChart2.resize()});
      window.addEventListener('resize',function() {myChart3.resize()});
      window.addEventListener('resize',function() {myChart4.resize()});
      window.addEventListener('resize',function() {myChart5.resize()});
      window.addEventListener('resize',function() {myChart6.resize()});
      window.addEventListener('resize',function() {myChart7.resize()});
      window.addEventListener('resize',function() {myChart8.resize()});
      window.addEventListener('resize',function() {myChart9.resize()});
      window.addEventListener('resize',function() {myChart10.resize()});
      window.addEventListener('resize',function() {myChart11.resize()});
      window.addEventListener('resize',function() {myChart13.resize()});
      window.addEventListener('resize',function() {myChart14.resize()});
      window.addEventListener('resize',function() {myChart15.resize()});
      window.addEventListener('resize',function() {myChart16.resize()});
      window.addEventListener('resize',function() {myChart17.resize()});
      window.addEventListener('resize',function() {myChart18.resize()});
      window.addEventListener('resize',function() {myChart19.resize()});    
      window.addEventListener('resize',function() {myChart20.resize()});         
    },
    methods: {
      selectedbox(val){
        this.values=[];
        val.forEach(item => {
          const value = item.split(':')[0];
          this.values.push(value);
        });
      },
      ChartManage(){
        if(this.btn1==1){
        if(this.values.includes('1')){
          this.one = 1;
        }else {
          this.one = 0;
        }

        if(this.values.includes("2")){
          this.two = 1;
        }else {
          this.two = 0;
        }

        if(this.values.includes("3")){
          this.three = 1;
        }else {
          this.three = 0;
        }

        if(this.values.includes("4")){
          this.four = 1;
        }else {
          this.four = 0;
        }

        if(this.values.includes("5")){
          this.five = 1;
        }else {
          this.five = 0;
        }

        if(this.values.includes("6")){
          this.six = 1;
        }else {
          this.six = 0;
        }

        if(this.values.includes("7")){
          this.seven = 1;
        }else {
          this.seven = 0;
        }

        if(this.values.includes("8")){
          this.eight = 1;
        }else {
          this.eight = 0;
        }

        if(this.values.includes("9")){
          this.nine = 1;
        }else {
          this.nine = 0;
        }

        if(this.values.includes("0")){
          this.ten = 1;
        }else {
          this.ten = 0;
        }
        }
        if(this.btn2==1){
        if(this.values.includes('1')){
          this.eleven = 1;
        }else {
          this.eleven = 0;
        }

        if(this.values.includes('2')){
          this.twelve = 1;
        }else {
          this.twelve = 0;
        }

        if(this.values.includes("3")){
          this.thirteen = 1;
        }else {
          this.thirteen = 0;
        }

        if(this.values.includes("4")){
          this.fourteen = 1;
        }else {
          this.fourteen = 0;
        }

        if(this.values.includes("5")){
          this.fifteen = 1;
        }else {
          this.fifteen = 0;
        }

        if(this.values.includes("6")){
          this.sixteen = 1;
        }else {
          this.sixteen = 0;
        }

        if(this.values.includes("7")){
          this.seventeen = 1;
        }else {
          this.seventeen = 0;
        }

        if(this.values.includes("8")){
          this.eighteen = 1;
        }else {
          this.eighteen = 0;
        }

        if(this.values.includes("9")){
          this.ninteen = 1;
        }else {
          this.ninteen = 0;
        }

        if(this.values.includes("0")){
          this.twenty = 1;
        }else {
          this.twenty = 0;
        }
        }
        },
        Namechange(){
            if(this.btn1==1){
              this.btn1=0
              this.btn2=1
              this.one=0
              this.two=0
              this.three=0
              this.four=0
              this.five=0
              this.six=0
              this.seven=0
              this.eight=0
              this.nine=0
              this.ten=0
            }else{
              this.btn2=0
              this.btn1=1
              this.eleven=0
              this.twelve=0
              this.thirteen=0
              this.fourteen=0
              this.fifteen=0
              this.sixteen=0
              this.seventeen=0
              this.eighteen=0
              this.ninteen=0
              this.twenty=0
            }
        }
    },
    watch: {},
    created() {
 
    }
  }
</script>

