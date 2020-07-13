<template>
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-marker  :position="{lng:parseFloat(item.lng),lat:parseFloat(item.lat)}"  :icon="{url: getIcon(item.concreteEvaluationList,index),size: {width: 300, height: 157}}" :show="false"  @click="infoWindowOpenDetail(item)" v-for="(item,index) in this.enterprise" :key="index">
        <bm-info-window class="bm-window"  :position="position" :title="enterpriseInfo.companyName" :show="show" @close="infoWindowClose"  >
          <ul>
            <li>单位名称：{{enterpriseInfo.companyName}}</li>
            <li>负责人：{{enterpriseInfo.principal}}</li>
            <li>填报人：{{enterpriseInfo.fillName}}</li>
            <li>填报人电话：{{enterpriseInfo.fillNumber}}</li>
            <li>企业员工总数：{{enterpriseInfo.employeeNumber}}</li>
            <li>单位地址：{{enterpriseInfo.address}}</li>
            <li>风险值：{{accidentConsequenceScore*possibilityOfAccidentScore*theNumberOfEmployeesScore}}</li>
            <li>风险判定：{{therisklevel}}</li>
          </ul>

        </bm-info-window>
      </bm-marker>


    </baidu-map>
</template>

<script>
  export default {
    data(){
      return{
        center: '',
        zoom: 3,
        show: false,
        position: {},
        enterprise: [],
        enterpriseInfo:{},
        concreteEvaluation:{},
        icon: {},

        // 三大类别总分数
        accidentConsequenceScore: '',
        possibilityOfAccidentScore: '',
        theNumberOfEmployeesScore: '',

        risklevel: '',
        therisklevel: '',

      }
    },
    mounted () {
      this.getEnterprise();
    },
    created() {
      //this.getEnterprise();
    },
    computed: {

    },
    methods:{


      handler ({BMap, map}) {
        map.enableScrollWheelZoom(true);
        this.center= '深圳';
        this.zoom = 13
      },
      infoWindowClose () {
        this.show = false
      },
      infoWindowOpen () {
        this.show = true
      },
      // 通过企业id获取具体的评估信息
      infoWindowOpenDetail (item) {
        this.position = {lng:parseFloat(item.lng),lat:parseFloat(item.lat)}
        this.enterpriseInfo = item
        //console.log(item)

        // 初始化总分值
        let accidentConsequenceScore = null;
        let possibilityOfAccidentScore = null;
        let theNumberOfEmployeesScore = null;

        // 遍历评估信息获取三大类别的具体总分值
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

        this.risklevel = this.accidentConsequenceScore*this.possibilityOfAccidentScore*this.theNumberOfEmployeesScore;
        if(this.risklevel>=1000){
          this.therisklevel="重大危险"

        }
        if(1000>this.risklevel&&this.risklevel>=720){
          this.therisklevel="较大风险"

        }
        if(720>this.risklevel&&this.risklevel>=500){
          this.therisklevel="一般风险"
        }
        if(500>this.risklevel&&this.risklevel>=300){
          this.therisklevel="较低风险"
        }
        if(300>this.risklevel){
          this.therisklevel="无风险"
        }

        this.show = true
      },
      getIcon: function(item,index){
        console.log(item,index)
        return 'http://developer.baidu.com/map/jsdemo/img/fox.gif'

      },
      // 获取所有企业
      async getEnterprise(){
        const {data: res} = await this.$http.get("/get/enterprise");
        this.enterprise = res.data
        /*this.enterprise.forEach((item)=>{
          this.enterpriseInfo = item
          console.log(parseFloat(item.lng),parseFloat(item.lat))
          this.position = {lng:parseFloat(item.lng),lat:parseFloat(item.lat)}
          console.log(this.position)
        })*/

      }
    }
  }
</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 100%;
  }
  li{
    height: 30px;
    width: auto;
  }
  .bm-window{
    width: 500px;
    height: auto;
  }
</style>
