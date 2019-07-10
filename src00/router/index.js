import Vue from 'vue'
import Router from 'vue-router'

// 二级路由
import Child1 from '../components/child1'
import Child2 from '../components/child2'
import Child3 from '../components/child3'
// 三级路由
import Grand1 from '../components/child2/Grand1.vue'
import Grand2 from '../components/child2/grand2.vue'
import Grand3 from '../components/child2/Grand3.vue'
import Grand4 from '../components/child3/Grand4.vue'
import Grand5 from '../components/child3/Grand5.vue'

// 使用或者挂载
Vue.use(Router)

// 配置路由参数：
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Child1',
      component: Child1
    },
    {
      path: '/child1',
      name: 'Child1',
      component: Child1
    },
    {
      path: '/child2',
      name: 'Child2',
      component: Child2,
      redirect:"/grand1",
      children:[
        {
          path: '/grand1',
          name: 'Grand1',
          component: Grand1,
        },
        {
          path: '/grand2',
          name: 'Grand2',
          component: Grand2,
        },
        {
          path: '/grand3',
          name: 'Grand3',
          component: Grand3,
        } 
      ]
    },
    {
      path: '/child3',
      name: 'Child3',
      component: Child3,
      redirect:"/child3/grand4",
      children:[
        {
          path: '/child3/grand4',
          name: 'Child4',
          component: Grand4,
        },
        {
          path: '/child3/grand5',
          name: 'Child5',
          component: Grand5,
        } 
      ]
    },
    {
      path:'*',
      redirect:'/child1'
    }
  ],
  // 取消锚点链接
  mode:'history'
})
