<template>
  <div id="app">
     <!-- 路由导航层 -->
     <nav>
       <router-link to="/child1">菜单1</router-link>
       <router-link to="/child2">菜单2</router-link>
       <router-link to="/child3">菜单3</router-link> 
     </nav>
     <!--路由内容展示层 -->
     <router-view></router-view>
  </div>
</template>

<script>
  
export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
