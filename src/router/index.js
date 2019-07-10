import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 1.引入路由组件
// 一级路由
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

// 二级路由
import Activity from '../components/about/Activity'
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'

// 三级路由
import Address from '../components/about/contact/Address'
import Person from '../components/about/contact/Person'
import Tel from '../components/about/contact/Tel'

// 展示页路由
import Details from '../components/Details'
// 2.配置路由
// 3.回到页面配置路由导航层+路由展示层
export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home 
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu 
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin 
    },
    {
      path:'/about',
      name:'About',
      component:About,
      children:[
        {
          path:'/activity',
          name:'Activity',
          component:Activity
        },
        {
          path:'/contact',
          name:'Contact',
          component:Contact,
          redirect:'/ads',
          children:[
            {
              path:'/ads',
              name:'Address',
              component:Address
            },
            {
              path:'/pes',
              name:'Person',
              component:Person
            }, 
            {
              path:'/tel',
              name:'Tel',
              component:Tel
            } 
          ]
        },
        {
          path:'/delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/history',
          name:'History',
          component:History
        }
      ] 
    },
    {
      path:'/login',
      name:'Login',
      component:Login 
    },
    {
      path:'/register',
      name:'Register',
      component:Register 
    },
    {path:'/details',name:'Details',component:Details}
  ],
  mode:'history'//取消锚点链接
})
