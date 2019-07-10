<template>
    <div class="child2">
       <h1>{{msg}}</h1>
       <!-- 路由导航区 -->
       <nav>
         <router-link to="/grand1">二级菜单1</router-link> 
         <router-link to="/grand2">二级菜单2</router-link> 
         <router-link to="/grand3">二级菜单3</router-link>
       </nav>
       <!-- 路由展示区 -->
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name:'Child2',
      data(){
        return{
          msg:'Child2页面'  
        }  
      }  
    }
</script>

<style scoped>

</style>