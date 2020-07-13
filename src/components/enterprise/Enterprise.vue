<template>
  <div class="box-body">
    <div class="box-echarts">
      <el-card class="box-card">
        <h3>深圳市观湖街道办企业风险数量情况</h3>
        <p>企业总数：{{majorHazardNumber+generalRiskNumber+largerRiskNumber+lowRiskNumber+noRiskNumber}}</p>
        <p>重大风险数量：{{majorHazardNumber}}</p>
        <p>较大风险数量：{{largerRiskNumber}}</p>
        <p>一般风险数量：{{generalRiskNumber}}</p>
        <p>低风险数量：{{lowRiskNumber}}</p>
        <p>无风险数量：{{noRiskNumber}}</p>

      </el-card>
      <el-card class="welcome-container" id="main"></el-card>
    </div>
    <div class="box-table">
    <el-table
      v-loading="loading"
      :data="tableData"
      border
      :height="tableHeight"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="companyName"
        label="企业名称"
        width="300"
        :filters="[{ text: '重大风险', value: '重大风险' }, { text: '较大风险', value: '较大风险' },{ text: '一般风险', value: '一般风险' },{ text: '低风险', value: '低风险' },{ text: '无风险', value: '无风险' }]"
        :filter-method="filterTag">
      </el-table-column>
      <el-table-column
        prop="riskScore"
        label="风险值"
        width="120">
      </el-table-column>
      <el-table-column
        prop="strengthenTraining"
        label="加强培训"
        width="120">
      </el-table-column>
      <el-table-column
        prop="principal"
        label="负责人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="fillName"
        label="填报人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="fillNumber"
        label="填报人电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        loading: true,
        tableHeight: (window.innerHeight -60)/2 -3,

        accidentConsequenceScore:'',
        possibilityOfAccidentScore:'',
        theNumberOfEmployeesScore:'',
        risklevel: '',
        therisklevel: '',

        majorHazardNumber:'',
        generalRiskNumber:'',
        largerRiskNumber:'',
        lowRiskNumber:'',
        noRiskNumber: '',
        riskNumber: ''


      }
    },
    mounted () {
      this.drawLine();
    },
    methods: {
      filterTag(value, row) {
        return value === row.therisklevel;
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      async drawLine(){
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('main'));
        myChart.showLoading();
        const {data: res} = await this.$http.get("/get/enterprise");
        this.tableData = res.data
        this.loading = false
        // 获取各类风险总数
        let majorHazardNumber = 0
        let generalRiskNumber = 0
        let largerRiskNumber = 0
        let lowRiskNumber = 0
        let noRiskNumber = 0
        res.data.forEach((item,index)=>{

          // 初始化总分值
          let accidentConsequenceScore = null;
          let possibilityOfAccidentScore = null;
          let theNumberOfEmployeesScore = null;
          item.concreteEvaluationList.forEach((item,index)=>{

            // 事故后果总分
            if (item.categoryId ===1){
              accidentConsequenceScore = accidentConsequenceScore + item.score
            }
            // 事故可能性总分
            if (item.categoryId ===2){
              possibilityOfAccidentScore = possibilityOfAccidentScore + item.score
            }
            // 暴露人数总分
            if (item.categoryId ===3) {
              theNumberOfEmployeesScore = theNumberOfEmployeesScore + item.score
            }
          })
          this.accidentConsequenceScore = accidentConsequenceScore
          this.possibilityOfAccidentScore = possibilityOfAccidentScore
          this.theNumberOfEmployeesScore = theNumberOfEmployeesScore

          // 风险等级评估
          // 获取相应等级企业总数
          this.risklevel = this.accidentConsequenceScore*this.possibilityOfAccidentScore*this.theNumberOfEmployeesScore;
          if(this.risklevel>=1000){
            this.therisklevel="重大风险"
            this.$set(item,'therisklevel',this.therisklevel)
            majorHazardNumber = majorHazardNumber + 1

          }
          if(1000>this.risklevel&&this.risklevel>=720){
            this.therisklevel="较大风险"
            this.$set(item,'therisklevel',this.therisklevel)
            largerRiskNumber = largerRiskNumber + 1

          }
          if(720>this.risklevel&&this.risklevel>=500){
            this.therisklevel="一般风险"
            this.$set(item,'therisklevel',this.therisklevel)
            generalRiskNumber = generalRiskNumber + 1
          }
          if(500>this.risklevel&&this.risklevel>=300){
            this.therisklevel="低风险"
            this.$set(item,'therisklevel',this.therisklevel)
            lowRiskNumber = lowRiskNumber + 1
          }
          if(300>this.risklevel){
            this.therisklevel="无风险"
            this.$set(item,'therisklevel',this.therisklevel)
            noRiskNumber = noRiskNumber + 1
          }

        })
        this.majorHazardNumber = majorHazardNumber
        this.largerRiskNumber = largerRiskNumber
        this.generalRiskNumber = generalRiskNumber
        this.lowRiskNumber = lowRiskNumber
        this.noRiskNumber = noRiskNumber

        myChart.hideLoading();
        myChart.setOption({

          legend: {},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },

          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data:[
                {value:this.majorHazardNumber, name:'重大风险',
                  itemStyle:{
                    color:'#F56C6C'
                  }},
                {value:this.largerRiskNumber, name:'较大风险',
                  itemStyle:{
                    color:'#E6A23C'
                  }},
                {value:this.generalRiskNumber, name:'一般风险',
                  itemStyle:{
                    color:'#FFFF77'
                  }},
                {
                value:this.lowRiskNumber, name:'低风险',
                  itemStyle: {
                    color: '#409EFF'
                  }
                },
                {value:this.noRiskNumber, name:'无风险',
                  itemStyle:{
                    color:'#67C23A'
                  }},


              ]
            }
          ]
        })

      },
    },

  }
</script>

<style scoped>

  .welcome-container{
    background: #FFF;
    height: 100%;
    width: 50%;
    margin: 0 auto;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    height: 100%;
    width: 50%;
  }
  .box-echarts{
    display: flex;
    height: 50%;
  }
  .box-card p{
    text-align: center;
  }
  .box-body{
    height: 100%;
    width: 100%;

  }
  .box-table{
    width: 100%;
  }
</style>
