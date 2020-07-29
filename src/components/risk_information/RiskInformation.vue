<template>
  <baidu-map class="bm-view" v-loading="loading" element-loading-text="加载中..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" :center="center" :zoom="zoom" @ready="handler">
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <bm-marker :position="{lng:parseFloat(item.lng),lat:parseFloat(item.lat)}" :title="item.companyName" :icon="{url: item.url, size: {width: 30, height: 30}}"   @click="infoWindowOpen(item)" v-for="(item,index) in this.enterprise" :key="index">


    </bm-marker>
    <bm-info-window :position="position" :title="enterpriseInfo.companyName" :show="show" @close="infoWindowClose" @open="myInfoWindowOpen"  >
      <ul>
        <li>单位名称：{{enterpriseInfo.companyName}}</li>
        <li>负责人：{{enterpriseInfo.principal}}</li>
        <li>填报人：{{enterpriseInfo.fillName}}</li>
        <li>填报人电话：{{enterpriseInfo.fillNumber}}</li>
        <li>企业员工总数：{{enterpriseInfo.employeeNumber}}</li>
        <li>单位地址：{{enterpriseInfo.address}}</li>
        <li>风险值：{{enterpriseInfo.score}}</li>
        <li>风险等级：{{enterpriseInfo.therisklevel}}</li>
      </ul>
    </bm-info-window>
  </baidu-map>
</template>

<script>
  export default {
    data () {
      return {
        loading: true,
        center: '',
        zoom: 3,
        show: false,

        enterprise: [],
        enterpriseInfo: {},
        position: {},

        // 三大类别总分数
        accidentConsequenceScore: '',
        possibilityOfAccidentScore: '',
        theNumberOfEmployeesScore: '',

        risklevel: '',
        therisklevel: '',
      }
    },
    mounted () {
      this.getEnterprise()
    },
    methods: {
      handler ({BMap, map}) {
        map.enableScrollWheelZoom(true);
        map.setMapStyle({style:'normal'});
        this.center= '深圳观湖街道办';
        this.zoom = 13
      },
      infoWindowClose () {
        this.show = false
      },
      myInfoWindowOpen(){
        this.show = true
      },
      infoWindowOpen (item) {
        this.show = true
        this.position = {lng:parseFloat(item.lng),lat:parseFloat(item.lat)}
        this.enterpriseInfo = item

      },
      async getEnterprise(){
        const {data: res} = await this.$http.get("/get/enterprise");
        res.data.forEach((item)=>{

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

          // 判断风险等级，分别添加不同颜色的点
          this.risklevel = this.accidentConsequenceScore*this.possibilityOfAccidentScore*this.theNumberOfEmployeesScore;

          if(this.risklevel>=1000){
            this.therisklevel="重大危险"
            //this.$set(item,'url',"https://i.loli.net/2020/06/05/j7GY85dDfPczIEt.png")
            this.$set(item,'url',"http://localhost:9000/uploadFile/red1.png")
            this.$set(item,'score',this.risklevel)
            this.$set(item,'therisklevel',"重大危险")

          }
          if(1000>this.risklevel&&this.risklevel>=720){
            this.therisklevel="较大风险"
            //this.$set(item,'url',"https://i.loli.net/2020/06/05/qM3AGbaHEcCtWJL.png")
            this.$set(item,'url',"http://localhost:9000/uploadFile/orange1.png")
            this.$set(item,'score',this.risklevel)
            this.$set(item,'therisklevel',"较大风险")

          }
          if(720>this.risklevel&&this.risklevel>=500){
            this.therisklevel="一般风险"
            //this.$set(item,'url',"https://i.loli.net/2020/06/05/dxCYi4MK1S237fU.png")
            this.$set(item,'url',"http://localhost:9000/uploadFile/yellow1.png")
            this.$set(item,'score',this.risklevel)
            this.$set(item,'therisklevel',"一般风险")
          }
          if(500>this.risklevel&&this.risklevel>=300){
            this.therisklevel="较低风险"
            //this.$set(item,'url',"https://i.loli.net/2020/06/05/eX97TtqKB4EjG28.png")
            this.$set(item,'url',"http://localhost:9000/uploadFile/blue1.png")
            this.$set(item,'score',this.risklevel)
            this.$set(item,'therisklevel',"较低风险")
          }
          if(300>this.risklevel){
            this.therisklevel="无风险"
            //this.$set(item,'url',"https://i.loli.net/2020/06/05/N8p5uaK7HJqgcZM.png")
            this.$set(item,'url',"http://localhost:9000/uploadFile/green1.png")
            this.$set(item,'score',this.risklevel)
            this.$set(item,'therisklevel',"无风险")
          }
          this.enterprise.push(item)

        })
        this.loading = false
      }

    }
  }
</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 100%;
  }</style>
