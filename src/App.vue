<template>
  <div id="app">
    <!-- 3.1配置路由导航层 -->
    <Header></Header>
    <!-- 3.2配置路由展示层 -->
    
    <router-view></router-view>
  </div>
</template>

<script>
// 1.引入组件Header
import Header from './components/Header'
// 2.配置组件Header
export default {
  name: 'App',
  data(){
    return{
      title:'Hello JSX-PIZZA项目！' 
    } 
  },
  components:{
     Header //'Header':Header 
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
