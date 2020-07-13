// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import red from './assets/red.png'
import './assets/orange.png'
import './assets/yellow.png'
import './assets/blue.png'
import './assets/green.png'
import {Button,Input,Form,FormItem,Container,Header,Aside,Main,Menu,MenuItem,Message,Table,TableColumn,Row,Loading,Dialog,Tooltip,Collapse,CollapseItem,Image,Divider,Card,Pagination} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Loading)
Vue.use(red)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Image)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Pagination)

Vue.use(BaiduMap,{
  ak: 'wFQlNo1lSDLEx8RV6vehHiwLKlx23GNg'
})
Vue.prototype.$message = Message
Vue.prototype.$echarts = echarts

axios.defaults.baseURL='http://localhost:9000/'
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
