import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Enterprise from '../components/enterprise/Enterprise'
import RiskMap from '../components/map/RiskMap'
import RiskInformation from '../components/risk_information/RiskInformation'
import RiskAssessmentDetails from '../components/risk_assessment_details/RiskAssessmentDetails'
import NewRiskDocx from '../components/risk_assessment_details/NewRiskDocx'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/enterprise',
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/enterprise',
          component: Enterprise
        },
        {
          path: '/riskmap',
          component: RiskMap
        },
        {
          path: '/riskinformation',
          component: RiskInformation
        },
        {
          path: '/riskassessmentdetails',
          component: RiskAssessmentDetails
        },
        {
          path: '/newriskdocx',
          name: "newRiskDocx",
          component: NewRiskDocx
        }
      ]

    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next()
  const userId = window.sessionStorage.getItem('userId')
  if(!userId) return next('/login')
  next()
})
export default router
