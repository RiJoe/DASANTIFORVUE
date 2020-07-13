<template>
  <div>
  <h3>Welcome To Risk Information System</h3>
  <div class="welcome-container" id="main" >
  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{}
    },
    mounted () {
      this.drawLine();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        const option = {
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          series: [{
            type: 'pie',
            radius: 60,
            center: ['25%', '30%']
            // No encode specified, by default, it is '2012'.
          }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '30%'],
            encode: {
              itemName: 'product',
              value: '2013'
            }
          }, {
            type: 'pie',
            radius: 60,
            center: ['25%', '75%'],
            encode: {
              itemName: 'product',
              value: '2014'
            }
          }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '75%'],
            encode: {
              itemName: 'product',
              value: '2015'
            }
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }

</script>

<style scoped>
  .welcome-container{
    width: 1000px;
    height: 400px;
    margin: 0 auto;
}
</style>
